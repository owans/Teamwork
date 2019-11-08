const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');


chai.use(chaiHttp);
chai.should();

// Base Route Test
describe('Base Route Test ', () => {
	it('should return welcome to teamwork API', (done) => {
    chai.request(server);
    done();
	});
});