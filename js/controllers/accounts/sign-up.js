var Route = require('/Users/dread/Apps/bars-app').Route,
    config = {
        templates: {
            index: require('../../views/accounts/sign-up.bars')
        }
    };

var AccountsSignUp = Route.createElement(config, function AccountsSignUp(options) {
    var _ = this;
    _.supercreate(options);
});

AccountsSignUp.definePrototype({
});

module.exports = AccountsSignUp;
