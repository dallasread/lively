var Route = require('/Users/dread/Apps/bars-app').Route,
    config = {
        templates: {
            index: require('../../views/ctas/triggers.bars')
        }
    };

var CTATriggers = Route.createElement(config, function CTATriggers(options) {
    var _ = this;
    _.supercreate(options);
    
});

CTATriggers.definePrototype({
});

module.exports = CTATriggers;
