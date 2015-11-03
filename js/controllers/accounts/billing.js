var Route = require('/Users/dread/Apps/bars-app').Route,
    config = {
        templates: {
            index: require('../../views/accounts/billing.bars')
        }
    };

var AccountsBilling = Route.createElement(config, function AccountsBilling(options) {
    var _ = this;
    _.supercreate(options);
});

AccountsBilling.definePrototype({
});

module.exports = AccountsBilling;
