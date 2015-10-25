module.exports = {
    '/ctas/:id': require('../ctas/show'),
    '/ctas/:id/appearance': require('../ctas/appearance'),
    '/ctas/:id/schedule': require('../ctas/schedule'),
    '/ctas/:id/triggers': require('../ctas/triggers'),
    '/ctas/:id/settings': require('../ctas/settings'),

    '/conversations': require('../conversations'),
    '/people': require('../people'),
    '/help': require('../help'),

    '/accounts/edit': require('../accounts/edit'),
    '/accounts/users': require('../accounts/users'),
    '/accounts/billing': require('../accounts/billing'),
    '/accounts/sign-in': require('../accounts/sign-in'),
    '/accounts/sign-up': require('../accounts/sign-up'),

    '/': require('../conversations')
};
