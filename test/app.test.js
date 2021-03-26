process.env.NODE_ENV = "test";
var chai = require("chai");
var chaiHttp = require("chai-http");
var app = require("../server/index");
const should = chai.should();
chai.use(chaiHttp);
// //Login TDD
describe("/POST user", () => {
  it("it should post the Login info", (done) => {
    const user = {
      phone: " 9860088217",
      password: "rohit@1996",
    };
    chai
      .request(app)
      .post("/api/v1/users/signin")
      .send(user)
      .end((err, res) => {
        res.body.should.be.a("object");
        //res.body.should.have.property('message');
        done();
      });
  });
});
