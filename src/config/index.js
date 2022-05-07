process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if(process.env.NODE_ENV == 'development') {
  const dotenv = require('dotenv');

  const envFound = dotenv.config();
  if(envFound.error) {
    console.log("🥺 Couldn't find .env file | Terminating process");
    process.exit(1);
  }
}

module.exports = {
  port: parseInt(process.env.PORT, 10) || 2000
};