const chalk = require('chalk');
const dotenv = require('dotenv');
dotenv.config();

console.log(chalk.green('Starting server in ' + process.env.NODE_ENV));