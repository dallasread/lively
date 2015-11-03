var Route = require('/Users/dread/Apps/bars-app').Route,
    config = {
        templates: {
            index: require('../../views/ctas/appearance.bars')
        }
    };

var CTAAppearance = Route.createElement(config, function CTAAppearance(options) {
    var _ = this;
    _.supercreate(options);
    
});

CTAAppearance.definePrototype({
});

module.exports = CTAAppearance;
