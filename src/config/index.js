process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV == 'development') {
  const dotenv = require('dotenv');

  const envFound = dotenv.config();
  if (envFound.error) {
    console.log("🥺 Couldn't find .env file | Terminating process");
    process.exit(1);
  }
}

const {
  PORT,
  CERT,
  ENTRYPOINT,
  BACKEND_URL,
  PATH,
  PROTOCOL,
  FAILURE_REDIRECT,
  FRONTEND_URL,
  SECRET,
  SESSION_NAME
} = process.env;

module.exports = {
  port: parseInt(PORT, 10) || 2000,
  saml: {
    cert: CERT,
    entryPoint: ENTRYPOINT,
    issuer: BACKEND_URL,
    path: PATH,
    protocol: PROTOCOL,
    options: {
      failureRedirect: FAILURE_REDIRECT,
      failureFlash: true,
      successRedirect: FRONTEND_URL
    }
  },
  session: {
    secret: SECRET,
    name: SESSION_NAME,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 30 }
  }
};
