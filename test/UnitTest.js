var generatePasswordHash = require("../utility/utility");
var chai = require("chai");

describe("testing password hashing function", () => {
    it("test hashing function", (done) => {
        var pass = "abc";
        var hash = generatePasswordHash(pass);
        chai.expect(hash).not.to.be.empty;
        chai.expect(hash).to.be.a("string");
        chai.expect(pass).not.equal(hash);
        done();
    })
})
