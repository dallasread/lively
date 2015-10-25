var Route = require('../../utils/route'),
    config = {
        templates: {
            index: require('../../views/ctas/triggers.bars')
        },
        partials: {
            'cta-bar': require('../../views/ctas/cta-bar.bars')
        }
    };

var CTATriggers = Route.createElement(config, function CTATriggers(options) {
    var _ = this;
    _.supercreate(options);
    _.set('id', '123');
});

CTATriggers.definePrototype({
});

module.exports = CTATriggers;
