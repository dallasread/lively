var Route = require('../../utils/route'),
    config = {
        templates: {
            index: require('../../views/accounts/sign-in.bars')
        }
    };

var AccountsSignIn = Route.createElement(config, function AccountsSignIn(options) {
    var _ = this;
    _.supercreate(options);
});

AccountsSignIn.definePrototype({
});

module.exports = AccountsSignIn;
