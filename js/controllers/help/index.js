var Route = require('/Users/dread/Apps/bars-app').Route,
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
