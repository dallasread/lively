var Router = require('../../utils/router'),
    Bindable = require('generate-js-bindings'),
    config = {
        templates: {
            index: require('../../views/application/index.bars')
        },
        partials: {
            'top-bar': require('../../views/application/top-bar.bars')
        },
        helpers: {
            outlet: function(a) {
                return a;
            }
        },
        interactions: {
            activeToggle: {
                event: window.$.browser.event('click'),
                target: '.toggler',
                listener: function listener(e, $el) {
                    var _ = this,
                        splat = $el.attr('data-attr').split('/'),
                        obj = _.currentRoute,
                        lastIndex = splat.length - 1;

                    for (var i = 0; i < splat.length; i++) {
                        if (typeof obj[splat[i]] === 'undefined') return;

                        if (i === lastIndex) {
                            obj[splat[i]] = !obj[splat[i]];
                        } else {
                            obj = obj[splat[i]];
                        }
                    }

                    _.currentRoute.update();
                }
            }
        }
    };

var App = Router.createElement(config, function App(options) {
    var _ = this;

    _.defineProperties({
        routes: require('./routes')
    });


    _.supercreate(options);
    _.set('cta', {
        id: '123',
        active: false,
        name: 'Lively Chat'
    });
    _.update();
    _.currentRoute.update();
});

Bindable.generateGettersSetters(App, ['cta']);

App.definePrototype({
    loading: function loading() {
        var _ = this;
        _.$element.addClass('loading');
    },

    unloading: function unloading() {
        var _ = this;
        // _.$element.removeClass('loading');
    }
});

module.exports = App;
