var Route = require('../../utils/route'),
    config = {
        templates: {
            index: require('../../views/ctas/show.bars')
        },
        partials: {
            'cta-bar': require('../../views/ctas/cta-bar.bars')
        }
    };

var CTAShow = Route.createElement(config, function CTAShow(options) {
    var _ = this;
    _.supercreate(options);
});

CTAShow.definePrototype({
});

module.exports = CTAShow;
