window.$ = require('jquery');
window.$.browser = require('./utils/browser');

window.LCS = require('/Users/dread/Apps/bars-app').Router.create({
    $element: $('#lcs'),
    routes: require('./controllers/application/routes'),
    urlType: 'hash',
    debug: true
});

window.LCS.cta = {
    name: 'Lively Chat',
    id: 123,
    active: false
};
