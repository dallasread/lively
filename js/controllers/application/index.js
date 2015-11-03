var Router = require('/Users/dread/Apps/bars-app').Route,
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
        }
    };

var App = Router.createElement(config, function App(options) {
    var _ = this;

    _.supercreate(options);
    _.set('cta', {
        name: 'Lively Chat',
        id: 123,
        active: false
    });
});

App.definePrototype({
    beforeLoad: function beforeLoad(done) {
        var _ = this;

        if (_.app.currentRoute === _) {
            return done( _.path + 'conversations' );
        }

        // _.$element.addClass('loading');
        done();
    },

    afterLoad: function afterLoad(done) {
        var _ = this;
        // _.$element.removeClass('loading');
        done();
    }
});

module.exports = App;
