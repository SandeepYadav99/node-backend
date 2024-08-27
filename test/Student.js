var chai = require("chai");
var chaiHttp = require("chai-http");


chai.use(chaiHttp);


describe("Verify all the student endpoints", () => {
    var server = "http://localhost:5000";
    var path = "/student";
    var id = "";
    it("Verify get request", (done) => {
        chai.request(server)
            .get(path)
            .end((err, response) => {
                chai.expect(response.statusCode).equal(200);
                chai.expect(response.body.result).to.be.a("array");
                done();

            })
    })

    it("Verify post request", (done) => {
        var postData = {
            name: "Test Student",
            roll: 12345,
            phone: 1234567890
        }
        chai.request(server)
            .post(path)
            .send(postData)
            .end((err, response) => {
                id = response.body.result._id;
                chai.expect(id).to.be.a("string");
                chai.expect(id).not.to.be.empty;
                chai.expect(response.body.result).to.have.property("roll");
                chai.expect(response.body.result.roll).equal(postData.roll);
                chai.expect(response.body.result.name).equal(postData.name);
                chai.expect(response.body.result.phone).equal(postData.phone);
                chai.expect(response.statusCode).equal(200);
                done();

            })
    })

    it("Verify put request", (done) => {
        var postData = {
            phone: 1233434343434
        }
        var putPath = path + "/" + id;
        chai.request(server)
            .put(putPath)
            .send(postData)
            .end((err, response) => {
                chai.expect(id).to.be.a("string");
                chai.expect(response.body.result).to.have.property("phone");
                chai.expect(response.statusCode).equal(200);
                done();

            })
    })
    it("Verify delete request", (done) => {
        var deletePath = path + "/" + id;
        chai.request(server)
            .delete(deletePath)
            .end((err, response) => {
                chai.expect(response.body.result).to.have.property("roll");
                chai.expect(response.body.result).to.have.property("name");
                chai.expect(response.body.result).to.have.property("phone");
                chai.expect(response.statusCode).equal(200);
                done();
            })
    })
})
