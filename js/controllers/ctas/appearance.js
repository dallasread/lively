var Route = require('../../utils/route'),
    config = {
        templates: {
            index: require('../../views/ctas/appearance.bars')
        },
        partials: {
            'cta-bar': require('../../views/ctas/cta-bar.bars')
        }
    };

var CTAAppearance = Route.createElement(config, function CTAAppearance(options) {
    var _ = this;
    _.supercreate(options);
    _.set('id', '123');
});

CTAAppearance.definePrototype({
});

module.exports = CTAAppearance;
