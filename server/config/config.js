require('dotenv').config();

const env = process.env.NODE_ENV || 'development';
const dialect = 'postgres';
const url = `postgresql://postgres:andela@127.0.0.1/more-recipes-test`;
const devMode = env === ('development' || 'test');
const config = {
  url,
  dialect,
  logging: devMode ? log => log : false,
  dialectOptions: {
    multipleStatements: true
  }
};

// if (!devMode) {
//   config.ssl = true;
//   config.dialectOptions.ssl = {
//     require: !devMode
//   };
// }
module.exports = config;