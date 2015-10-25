window.$ = require('jquery');
window.$.browser = require('./utils/browser');

window.LCS = require('./controllers/application').create({
    $element: $('#lcs')
});
