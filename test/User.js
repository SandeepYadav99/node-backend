const chai = require("chai");
var chaiHttp = require("chai-http");
chai.use(chaiHttp)


describe("Check api authentication flow", () => {
    var payloadObj = {
        name: "Test User",
        email: "test1@gmail.com",
        password: "test"
    }
    describe("Check signup flow", () => {
        it("Signup method", (done) => {

            var path = "/user/signup";
            chai.request("http://localhost:5000")
                .post(path)
                .send(payloadObj)
                .end((err, response) => {
                    chai.expect(response.statusCode).equal(200);
                    done();
                })
        })
    });

    describe("Check login flow", () => {
        var path = "/user/login";
        it("Error login", (done) => {
            var errLoginObj = { email: payloadObj.email, password: "wrong" };
            chai.request("http://localhost:5000")
                .post(path)
                .send(errLoginObj)
                .end((err, response) => {
                    chai.expect(response.statusCode).equal(401);
                    done();
                })
        })

        it("Success login", (done) => {
            var successLoginObj = { email: payloadObj.email, password: payloadObj.password };
            chai.request("http://localhost:5000")
                .post(path)
                .send(successLoginObj)
                .end((err, response) => {
                    chai.expect(response.body).to.have.property("token");
                    chai.expect(response.body.token).to.be.a("string");
                    chai.expect(response.body.token).not.to.be.empty;
                    chai.expect(response.statusCode).equal(200);
                    done();
                })
        })
    });

})
