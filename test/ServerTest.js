var chai = require("chai");
var chaiHttp = require("chai-http");


chai.use(chaiHttp);

describe("Verify not found api endpoint", () => {
    it("checking 404 status", (done) => {
        chai.request("http://localhost:5000")
            .get("/dkhaskjdh/dasda")
            .end((err, response) => {
                chai.expect(response.statusCode).equal(404);
                done();
            })
    })
})
