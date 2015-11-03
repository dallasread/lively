var Route = require('/Users/dread/Apps/bars-app').Route,
    config = {
        templates: {
            index: require('../../views/ctas/schedule.bars')
        }
    };

var CTASchedule = Route.createElement(config, function CTASchedule(options) {
    var _ = this;
    _.supercreate(options);
    
});

CTASchedule.definePrototype({
});

module.exports = CTASchedule;
