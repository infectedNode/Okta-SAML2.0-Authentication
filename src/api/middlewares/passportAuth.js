const passport = require('passport');
const config = require('../../config/index');

module.exports = passport.authenticate('saml', config.saml.options);