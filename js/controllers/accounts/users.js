var Route = require('../../utils/route'),
    config = {
        templates: {
            index: require('../../views/accounts/users.bars')
        },
        partials: {
            'accounts-bar': require('../../views/accounts/accounts-bar.bars')
        }
    };

var AccountsUsers = Route.createElement(config, function AccountsUsers(options) {
    var _ = this;
    _.supercreate(options);
});

AccountsUsers.definePrototype({
});

module.exports = AccountsUsers;
