// const path = require('path');
const fs = require('fs')
require('dotenv').config()
// require('dotenv').config({
//   path: path.join(__dirname, (process.env.NODE_ENV || '.env.local'))
// })
var env = process.env.NODE_ENV
if (env === 'DEV') {
  fs.copyFile('.env.dev', '.env', (err) => {
    if (err) throw err;
    console.log('USING : ENV DEV');
  });
} else if (env === 'PROD') {
  fs.copyFile('.env.prod', '.env', (err) => {
    if (err) throw err;
    console.log('USING : ENV PRODUCTION');
  });
}