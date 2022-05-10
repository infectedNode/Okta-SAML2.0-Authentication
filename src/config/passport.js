const passport = require('passport');
const { Strategy } = require('passport-saml');

const config = require('./index');

const savedUsers = [];

passport.use(new Strategy(
  {
    issuer: config.saml.issuer,
    protocol: config.saml.protocol,
    path: config.saml.path,
    entryPoint: config.saml.entryPoint,
    cert: config.saml.cert
  },
  (user, done) => {
    if (!savedUsers.includes(user)) {
      savedUsers.push(user);
    }

    return done(null, user);
  }
));

passport.serializeUser((user, done) => {
  done(null, user);
})

passport.deserializeUser((user, done) => {
  done(null, user);
})