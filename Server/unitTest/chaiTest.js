var assert = require('assert');
const server = require('../server.js');
const app = server.app;
const http = server.http;

let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
chai.use(chaiHttp);

/*
    PRODUCT
    id:number;
    name:string;
    description:string;
    price:number;
    units:number;
*/

describe('Server test', function() {
    // The function passed to before() is called before running the test cases.
    before(function() {
        console.log("before test");
    });

    // The function passed to after() is called after running the test cases.
    after(function() {
        console.log("after test");
    });

    describe('get/read test 1', () => {
        it('it should GET all the products', (done) => {
            chai.request(app)
                .get('/api/read')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                });
        });
    });
    describe('get/read test 2', () => {
        it('it should contain item [0] with name value switch', (done) => {
            chai.request(app)
                .get('/api/read')
                .end((err, res) => {
                    res.body[0].name.should.be.eql('switch');
                    done();
                });
        });
    });

    describe('post/add test 1', () => {
        it('it should insert a new product', (done) => {
            chai.request(app) // Use http instead of app
                .post('/api/add')
                .set('Content-Type', 'application/json')
                .send({'id': 4, 'name': 'chai', 'description': 'latte', 'price': 5, 'units': '5'})
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('num');
                    res.body.num.should.be.eql(1);
                    done();
                });
        });
    });
    describe('post/add test 2', () => {
        it('it try to insert duplicate and fail', (done) => {
            chai.request(app) // Use http instead of app
                .post('/api/add')
                .set('Content-Type', 'application/json')
                .send({'id': 4, 'name': 'chai', 'description': 'latte', 'price': 5, 'units': '5'})
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('num');
                    res.body.err.should.be.eql('duplicate item');
                    done();
                });
        });
    });

    describe('post/update test 1', () => {
        it('it should update the chai products price', (done) => {
            chai.request(app) // Use http instead of app
                .post('/api/update')
                .set('Content-Type', 'application/json')
                .send({'id': 4, 'name': 'chai', 'description': 'latte', 'price': 10, 'units': '2'})
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('message');
                    res.body.message.should.be.eql('updated');
                    res.body.should.have.property('product');
                    res.body.product.price.should.be.eql(10);
                    //console.log(res.body.message);
                    done();
                });
        });
    });
    describe('post/update test 2', () => {
        it('it should try to update a non existing item and fail', (done) => {
            chai.request(app) // Use http instead of app
                .post('/api/update')
                .set('Content-Type', 'application/json')
                .send({'id': 6, 'name': 'fake', 'description': 'fakedesc', 'price': 100, 'units': '100'})
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('err');
                    res.body.err.should.be.eql('no item found');
                    //console.log(res.body.err);
                    done();
                });
        });
    });

    describe('post/remove test 1', () => {
        it('it should remove the char product', (done) => {
            chai.request(app) // Use http instead of app
                .post('/api/remove')
                .set('Content-Type', 'application/json')
                .send({'id': 4, 'name': 'chai', 'description': 'latte', 'price': 10, 'units': '2'})
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                });
        });
    });
    describe('post/remove test 2', () => {
        it('it should try to remove a product that doesnt exist and fail', (done) => {
            chai.request(app) // Use http instead of app
                .post('/api/remove')
                .set('Content-Type', 'application/json')
                .send({'id': 4, 'name': 'chai', 'description': 'latte', 'price': 10, 'units': '2'})
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('err');
                    res.body.err.should.be.eql('no item found')
                    done();
                });
        });
    });

});