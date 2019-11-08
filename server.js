const { createServer } = require('http');
const dotenv = require('dotenv');
dotenv.config();
const app = require('./app')();

const port = process.env.PORT || 3330;

const server = createServer(app);

server.listen(port, () => console.log(`Server is listening on ${port}`));
