var Route = require('../../utils/route'),
    config = {
        templates: {
            index: require('../../views/ctas/settings.bars')
        },
        partials: {
            'cta-bar': require('../../views/ctas/cta-bar.bars')
        }
    };

var CTASettings = Route.createElement(config, function CTASettings(options) {
    var _ = this;
    _.supercreate(options);
    _.set('id', '123');
});

CTASettings.definePrototype({
});

module.exports = CTASettings;
