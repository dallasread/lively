var Route = require('/Users/dread/Apps/bars-app').Route,
    config = {
        templates: {
            index: require('../../views/ctas/show.bars')
        }
    };

var CTAShow = Route.createElement(config, function CTAShow(options) {
    var _ = this;
    _.supercreate(options);
});

CTAShow.definePrototype({
});

module.exports = CTAShow;
