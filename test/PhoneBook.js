var chai = require("chai");
var chaiHttp = require("chai-http");

chai.use(chaiHttp);

describe("Phone book test cases", () => {
    var payload = {
        name: "testing",
        phone: 1234567880
    }
    var server = "http://localhost:5000"
    var endpoint = "/phonebook"

    it("Get Endpoint tes", (done) => {
        chai
            .request(server)
            .get(endpoint)
            .end((err, res) => {
                chai.expect(res.statusCode).equal(200);
                chai.expect(res.body.result).to.be.a("array");
                done();
            })
    })

    it("Post Endpoint tes", (done) => {
        chai
            .request(server)
            .post(endpoint)
            .send(payload)
            .end((err, res) => {
                payload = res.body.result;
                chai.expect(res.statusCode).equal(200);
                chai.expect(res.body.result).to.be.a("object");
                done();
            })
    })

    it("Put Endpoint tes", (done) => {
        payload.name = "testing put method";
        chai
            .request(server)
            .put(`${endpoint}/${payload._id}`)
            .send(payload)
            .end((err, res) => {
                chai.expect(res.statusCode).equal(200);
                chai.expect(res.body.result).to.be.a("object");
                done();
            })
    })

    it("Delete Endpoint tes", (done) => {
        chai
            .request(server)
            .delete(`${endpoint}/${payload._id}`)
            .end((err, res) => {
                chai.expect(res.statusCode).equal(200);
                chai.expect(res.body.result).to.be.a("object");
                done();
            })
    })
})
