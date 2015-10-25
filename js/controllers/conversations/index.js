var Route = require('../../utils/route'),
    config = {
        templates: {
            index: require('../../views/conversations/index.bars')
        },
        partials: {
            'top-bar': require('../../views/application/top-bar.bars'),
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
