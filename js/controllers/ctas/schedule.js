var Route = require('../../utils/route'),
    config = {
        templates: {
            index: require('../../views/ctas/schedule.bars')
        },
        partials: {
            'cta-bar': require('../../views/ctas/cta-bar.bars')
        }
    };

var CTASchedule = Route.createElement(config, function CTASchedule(options) {
    var _ = this;
    _.supercreate(options);
    _.set('id', '123');
});

CTASchedule.definePrototype({
});

module.exports = CTASchedule;
