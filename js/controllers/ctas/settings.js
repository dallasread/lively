var Route = require('/Users/dread/Apps/bars-app').Route,
    config = {
        templates: {
            index: require('../../views/ctas/settings.bars')
        }
    };

var CTASettings = Route.createElement(config, function CTASettings(options) {
    var _ = this;
    _.supercreate(options);
    
});

CTASettings.definePrototype({
});

module.exports = CTASettings;
