const App = require('../../server')
const chai = require('chai')
const expect = chai.expect
const chaiHttp = require('chai-http')

const { quoteVerified } = require('./quote.json')

chai.use(chaiHttp)

describe('Quote - Endpoint', () => {
  it('Check verified route - GET /quote', (done) => {
    const { from, to } = quoteVerified
    chai
      .request(App)
      .get(`/quote/${from}/${to}`)
      .end((err, res) => {
        if (err) return
        expect(res).to.have.status(200)
        expect(res.body).to.be.a('object')
        expect(res.body.route).to.be.an('string')
        expect(res.body.price).to.be.an('number')
        done()
      })
  })
})
