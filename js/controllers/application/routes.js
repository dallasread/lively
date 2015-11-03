module.exports = {
    '/ctas/:cta_id': require('../ctas'),
    '/ctas/:cta_id/dashboard': require('../ctas/show'),
    // '/ctas/:cta_id/appearance': require('../ctas/appearance'),
    '/ctas/:cta_id/schedule': require('../ctas/schedule'),
    '/ctas/:cta_id/triggers': require('../ctas/triggers'),
    '/ctas/:cta_id/triggers/:trigger_id': require('../ctas/triggers'),
    '/ctas/:cta_id/settings': require('../ctas/settings'),

    '/conversations': require('../conversations'),
    '/people': require('../people'),
    '/help': require('../help'),

    '/accounts': require('../accounts'),
    '/accounts/edit': require('../accounts/edit'),
    '/accounts/users': require('../accounts/users'),
    '/accounts/billing': require('../accounts/billing'),
    '/accounts/sign-in': require('../accounts/sign-in'),
    '/accounts/sign-up': require('../accounts/sign-up'),

    '/': require('../application')
};
