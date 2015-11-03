var Route = require('/Users/dread/Apps/bars-app').Route,
    config = {
        templates: {
            index: require('../../views/ctas/index.bars')
        },
        partials: {
            'cta-bar': require('../../views/ctas/cta-bar.bars')
        },
        interactions: {
            activeToggle: {
                event: window.$.browser.event('click'),
                target: '.toggler',
                listener: function listener(e, $el) {
                    var _ = this,
                        splat = $el.attr('data-attr').split('/'),
                        obj = _,
                        lastIndex = splat.length - 1;

                    for (var i = 0; i < splat.length; i++) {
                        if (i === lastIndex) {
                            obj[splat[i]] = !obj[splat[i]];
                        } else if (typeof obj[splat[i]] === 'undefined') {
                            return;
                        } else {
                            obj = obj[splat[i]];
                        }
                    }

                    _.update();
                }
            }
        }
    };

var CTAIndex = Route.createElement(config, function CTAIndex(options) {
    var _ = this;

    _.supercreate(options);
});

CTAIndex.definePrototype({
    beforeLoad: function beforeLoad(done) {
        var _ = this;

        if (_.app.currentRoute === _) {
            return done( _.path + '/dashboard' );
        }

        done();
    }
});

module.exports = CTAIndex;
