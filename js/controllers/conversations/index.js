var Route = require('/Users/dread/Apps/bars-app').Route,
    config = {
        templates: {
            index: require('../../views/conversations/index.bars')
        },
        partials: {
            'filters': require('../../views/application/filters.bars')
        }
    };

var ConversationsIndex = Route.createElement(config, function ConversationsIndex(options) {
    var _ = this;
    _.supercreate(options);
});

ConversationsIndex.definePrototype({
});

module.exports = ConversationsIndex;
