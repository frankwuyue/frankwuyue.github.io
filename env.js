const dotenv = require('dotenv');
dotenv.config();
const TOKEN_DROPBOX = process.env.TOKEN_DROPBOX;
module.exports = TOKEN_DROPBOX;
