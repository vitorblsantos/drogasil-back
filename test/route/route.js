const App = require("../../server");
const chai = require("chai");
const expect = chai.expect;
const chaiHttp = require("chai-http");

const { routeVerified, routeDuplicate, routeError } = require("./route.json");

chai.use(chaiHttp);

describe("Route - Endpoint", () => {
  it("Check complete data - POST /route", (done) => {
    chai
      .request(App)
      .post("/route")
      .send(routeVerified)
      .end((err, res) => {
        if (err) return err;
        expect(res).to.have.status(200);
        expect(res.body).to.be.a("object");
        expect(res.body.status).to.be.an("string");
        expect(res.body.status).to.be.equal("route saved");
        done();
      });
  });

  it("Check wrong data - POST /route", (done) => {
    chai
      .request(App)
      .post("/route")
      .send(routeError)
      .end((err, res) => {
        if (err) return err;
        expect(res).to.have.status(200);
        expect(res.body).to.be.a("object");
        expect(res.body.status).to.be.an("string");
        expect(res.body.status).to.be.equal("some params could not be read");
        done();
      });
  });

  it("Check duplicate data - POST /route", (done) => {
    chai
      .request(App)
      .post("/route")
      .send(routeDuplicate)
      .end((err, res) => {
        if (err) return err;
        expect(res).to.have.status(200);
        expect(res.body).to.be.a("object");
        expect(res.body.status).to.be.an("string");
        expect(res.body.status).to.be.equal("value duplicated");
        done();
      });
  });
});
