var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../server");

chai.use(chaiHttp);

describe("Operation Test cases", () => {
    var path = "/operation";
    describe("Test cases for addition endpoint", () => {
        var addPath = path + "/add";
        it("Api Success scenario ", (done) => {
            //test case for addition
            var addPostData = {
                num1: 12,
                num2: 23
            };
            chai.request(server)
                .post(addPath)
                .send(addPostData)
                .end((err, response) => {
                    chai.expect(response.statusCode).equal(200);
                    chai.expect(response.body.result).to.be.a("number");
                    chai.expect(response.body.result).equal(35);
                    done();
                });
        });
        it("Api Error scenario ", (done) => {
            //test case for addition
            var addPostData = {
                num1: 12
            };
            chai.request(server)
                .post(addPath)
                .send(addPostData)
                .end((err, response) => {
                    // console.log(response);
                    chai.expect(response.error.status).equal(400);
                    chai.expect(response.error.text).to.be.a("string");
                    done();
                });
        });


    });

    describe("Test cases for subtraction endpoint", () => {
        var subPath = path + "/sub";
        it("Api Success scenario ", (done) => {
            //test case for subtraction
            var subPostData = {
                num1: 25,
                num2: 23
            };
            chai.request(server)
                .post(subPath)
                .send(subPostData)
                .end((err, response) => {
                    chai.expect(response.statusCode).equal(200);
                    chai.expect(response.body.result).to.be.a("number");
                    chai.expect(response.body.result).equal(2);
                    done();
                });
        });
        it("Api Error scenario ", (done) => {
            //test case for subtraction
            var subPostData = {
                num1: 12
            };
            chai.request(server)
                .post(subPath)
                .send(subPostData)
                .end((err, response) => {
                    chai.expect(response.error.status).equal(400);
                    chai.expect(response.error.text).to.be.a("string");
                    done();
                });

        });
    });

    describe("Test cases for multiplication endpoint", () => {
        var subPath = path + "/multiply";
        it("Api Success scenario ", (done) => {
            //test case for subtraction
            var subPostData = {
                num1: 10,
                num2: 12
            };
            chai.request(server)
                .post(subPath)
                .send(subPostData)
                .end((err, response) => {
                    chai.expect(response.statusCode).equal(200);
                    chai.expect(response.body.result).to.be.a("number");
                    chai.expect(response.body.result).equal(120);
                    done();
                });
        });
        it("Api Error scenario ", (done) => {
            //test case for subtraction
            var subPostData = {
                num1: 12
            };
            chai.request(server)
                .post(subPath)
                .send(subPostData)
                .end((err, response) => {
                    chai.expect(response.error.status).equal(400);
                    chai.expect(response.error.text).to.be.a("string");
                    done();
                });

        });
    });


});
