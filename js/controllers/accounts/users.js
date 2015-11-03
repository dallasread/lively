var Route = require('/Users/dread/Apps/bars-app').Route,
    config = {
        templates: {
            index: require('../../views/accounts/users.bars')
        }
    };

var AccountsUsers = Route.createElement(config, function AccountsUsers(options) {
    var _ = this;
    _.supercreate(options);
});

AccountsUsers.definePrototype({
});

module.exports = AccountsUsers;
