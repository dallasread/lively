var Route = require('../../utils/route'),
    config = {
        templates: {
            index: require('../../views/help/index.bars')
        },
        partials: {
            'top-bar': require('../../views/application/top-bar.bars')
        }
    };

var HelpIndex = Route.createElement(config, function HelpIndex(options) {
    var _ = this;
    _.supercreate(options);
});

HelpIndex.definePrototype({
});

module.exports = HelpIndex;
