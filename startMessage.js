const chalk = require('chalk');
const config = require("./config")();

console.log(chalk.green(`Starting server in ${config.NODE_ENV}...`));