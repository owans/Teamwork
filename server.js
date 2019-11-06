const { createServer } = require('http');
const config = require('./config')();
const app = require('./app')();

const port = config.PORT || 3330;

const server = createServer(app);

server.listen(port, () => console.log(`Server is listening on ${port}`));
