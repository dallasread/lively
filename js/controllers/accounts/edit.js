var Route = require('../../utils/route'),
    config = {
        templates: {
            index: require('../../views/accounts/edit.bars')
        },
        partials: {
            'accounts-bar': require('../../views/accounts/accounts-bar.bars')
        }
    };

var AccountsEdit = Route.createElement(config, function AccountsEdit(options) {
    var _ = this;
    _.supercreate(options);
});

AccountsEdit.definePrototype({
});

module.exports = AccountsEdit;
