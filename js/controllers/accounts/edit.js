var Route = require('/Users/dread/Apps/bars-app').Route,
    config = {
        templates: {
            index: require('../../views/accounts/edit.bars')
        }
    };

var AccountsEdit = Route.createElement(config, function AccountsEdit(options) {
    var _ = this;
    _.supercreate(options);
});

AccountsEdit.definePrototype({
});

module.exports = AccountsEdit;
