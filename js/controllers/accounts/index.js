var Route = require('/Users/dread/Apps/bars-app').Route,
    config = {
        templates: {
            index: require('../../views/accounts/index.bars')
        },
        partials: {
            'accounts-bar': require('../../views/accounts/accounts-bar.bars')
        }
    };

var AccountsIndex = Route.createElement(config, function AccountsIndex(options) {
    var _ = this;
    _.supercreate(options);
});

AccountsIndex.definePrototype({
    beforeLoad: function beforeLoad(done) {
        var _ = this;

        if (_.app.currentRoute === _) {
            return done( _.path + '/edit' );
        }

        done();
    }
});

module.exports = AccountsIndex;
