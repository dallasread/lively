var Route = require('../../utils/route'),
    config = {
        templates: {
            index: require('../../views/accounts/billing.bars')
        },
        partials: {
            'accounts-bar': require('../../views/accounts/accounts-bar.bars')
        }
    };

var AccountsBilling = Route.createElement(config, function AccountsBilling(options) {
    var _ = this;
    _.supercreate(options);
});

AccountsBilling.definePrototype({
});

module.exports = AccountsBilling;
