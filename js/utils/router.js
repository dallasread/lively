var CustomElement = require('../utils/custom-element'),
    Bindable = require('generate-js-bindings'),
    async = require('async'),
    config = {
        interactions: {
            go: {
                event: window.$.browser.event('click'),
                target: '[data-go]',
                listener: function listener(e, $el) {
                    var _ = this;
                    _.go($el.attr('data-go'));
                }
            }
        }
    };

var Router = CustomElement.createElement(config, function Router(options) {
    var _ = this,
        path = window.location.hash;

    _.supercreate(options);
    _.defineProperties(options);

    $(window).on('hashchange', function() {
        var path = window.location.hash;
        _.go(path);
    });

    _.go(path);
});

Bindable.generateGettersSetters(Router, ['currentRoute']);

Router.definePrototype({
    parseURI: function parseURI(path) {
        path = path.replace(/#!/, '');

        var _ = this,
            params = {},
            splitPath = path.split('/'),
            route, splitRoute, isEqual, isDynamic, key;

        if (!path.length) {
            return {
                path: '/',
                blueprint: '/',
                route: _.routes['/'],
                params: {}
            };
        }

        routesLoop:
        for (key in _.routes) {
            splitRoute = key.split('/');

            pathLoop:
            for (var i = 0; i < splitPath.length; i++) {
                isDynamic = splitRoute[i] && splitRoute[i][0] === ':';
                isEqual = splitPath[i] === splitRoute[i];

                if (isDynamic) {
                    params[splitRoute[i].replace(/:/, '')] = splitPath[i];
                }

                if (isDynamic || isEqual) {
                    if (i === splitPath.length - 1) { // LAST
                        route = _.routes[key];
                        break routesLoop;
                    } else {
                        continue pathLoop;
                    }
                }

                params = {};
                break pathLoop;
            }
        }

        return {
            path: path,
            blueprint: key,
            route: route,
            params: params
        };
    },

    go: function go(path, reload) {
        var _ = this,
            uri = _.parseURI(path),
            currentRoute = _.currentRoute;

        if (!reload && window.location.hash !== '#!' + uri.path) {
            // console.log('Route does not match: ' + uri.path);
            window.location.hash = '#!' + uri.path;
            return;
        }

        if (!uri.route) {
            console.log('Route not found: ' + uri.path);
            if (currentRoute) window.location.hash = '#!' + currentRoute.path;
            return;
        }

        window.scrollTo(0, 0);

        uri.app = _;

        _.loading();
        _.currentRoute && _.currentRoute.unload();

        currentRoute = uri.route.create(uri);
        _.currentRoute = currentRoute;

        _.markActive(uri.path);

        async.waterfall(currentRoute.beforeFilters || [], function(err) {
            if (typeof err === 'string') return _.go(err);


            var $target = _.$element.find('[data-outlet]:first');
            $target.empty();
            currentRoute.$element.appendTo($target);

            _.update();
            currentRoute.update();
            currentRoute.$element.find('[autofocus]:first').trigger('focus');

            _.markActive(uri.path);
            _.unloading();

            async.waterfall(currentRoute.afterFilters || []);
        });
    },

    loading: function loading() {},
    unloading: function unloading() {},

    markActive: function markActive(path) {
        if (!path) return;

        var _ = this,
            splath = path.split('/');

        _.$element.find('[href], [data-go]')
            .removeClass('active')
            .removeClass('parent-of-active');

        _.$element.find('[href="#!' + path + '"], [data-go="' + path + '"]')
            .addClass('active');

        var ancestorPath = '';
        for (var i = 1; i < splath.length; i++) {
            ancestorPath += '/' + splath[i];

            _.$element.find('[href="#!' + ancestorPath + '"], [data-go="' + ancestorPath + '"]')
                .addClass('parent-of-active');
        }
    }
});

module.exports = window.FWP = Router;
