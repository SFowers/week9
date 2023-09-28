var assert = require('assert');
var server = require('../server.js');
var app = server.app;
var db = server.db;
var http = require('http');

describe('Server test', function() {
    // The function passed to before() is called before running the test cases.
    before(function() {
        console.log("before test");
    });

    // The function passed to after() is called after running the test cases.
    after(function() {
        console.log("after test");
    });


    describe('get/read test 1', function() {
        it('should return all products', function(done) {
            http.get('http://localhost:3000/api/read', function(response) {
                // Assert the status code.
                assert.equal(response.statusCode, 200);

                var body = '';
                response.on('data', function(d) {
                    body += d;
                });
                response.on('end', function() {
                    //console.log(body)
                    assert.equal(JSON.parse(body)[0]["name"], 'switch');
                    done();
                });
            });
        });
    });
    describe('get/read test 2', function() {
        it('should return all products', function(done) {
            http.get('http://localhost:3000/api/read', function(response) {
                // Assert the status code.
                assert.equal(response.statusCode, 200);

                var body = '';
                response.on('data', function(d) {
                    body += d;
                });
                response.on('end', function() {
                    //console.log(body)
                    assert.equal(JSON.parse(body)[1]["price"], '12');
                    done();
                });
            });
        });
    });
    describe('post/add test 1', function() {
        it('should add a product', function(done) {
            const importData = {'id': 4, 'name': 'chai', 'description': 'latte', 'price': 5, 'units': '5'}
            http.post('http://localhost:3000/api/add', importData, function(response) {
                // Assert the status code.
                assert.equal(response.statusCode, 200);

                var body = '';
                response.on('data', function(d) {
                    body += d;
                });
                response.on('end', function() {
                    //console.log(body)
                    assert.equal(JSON.parse(body)["num"], '4');
                    done();
                });
            });
        });
    });
});