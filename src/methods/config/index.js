require('dotenv').config({ path: `${__dirname}/.env` });

const config = Object.freeze({
  API_KEY: process.env.CODER_SECRET_KEY,
  API_SECRET: process.env.JWT_TOKEN_SECRET,
  LINK: process.env.LINK
});
const requiredFields = [ 'API_SECRET', 'API_KEY', 'LINK' ];

requiredFields.forEach((field) => {
  if (!config.hasOwnProperty(field)) {
    throw new Error('Wrong configuration');
  }
});
module.exports = config;
