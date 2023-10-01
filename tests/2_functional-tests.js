const chaiHttp = require('chai-http')
const chai = require('chai')
const assert = chai.assert
const mocha = require('mocha')
const { suite, test } = mocha
const server = require('../server')

chai.use(chaiHttp)

suite('Functional Tests', function () {
  test('Convert a valid input such as 10L', function (done) {
    chai
      .request(server)
      .keepOpen()
      .get('/api/convert')
      .query({ input: '10L' })
      .end((err, res) => {
        if (err) assert.fail()
        assert.equal(res.status, 200)
        assert.equal(res.body.initNum, 10)
        assert.equal(res.body.initUnit, 'L')
        assert.approximately(res.body.returnNum, 2.64172, 0.1)
        assert.equal(res.body.returnUnit, 'gal')
        assert.equal(res.body.string, '10 liters converts to 2.64172 gallons')
        done()
      })
  })

  test('Convert an invalid input such as 32g', function (done) {
    chai
      .request(server)
      .keepOpen()
      .get('/api/convert')
      .query({ input: '32g' })
      .end((err, res) => {
        if (err) assert.fail()
        assert.equal(res.status, 200)
        assert.equal(res.body.initUnit, undefined)
        done()
      })
  })

  test('Convert an invalid number such as 3/7.2/4kg', function (done) {
    chai
      .request(server)
      .keepOpen()
      .get('/api/convert')
      .query({ input: '3/7.2/4kg' })
      .end((err, res) => {
        if (err) assert.fail()
        assert.equal(res.status, 200)
        assert.equal(res.body.initNum, undefined)
        done()
      })
  })

  test('Convert an invalid number AND unit such as 3/7.2/4kilomegagram', function (done) {
    chai
      .request(server)
      .keepOpen()
      .get('/api/convert')
      .query({ input: '3/7.2/4kilomegagram' })
      .end((err, res) => {
        if (err) assert.fail()
        assert.equal(res.status, 200)
        assert.equal(res.body.initNum, undefined)
        assert.equal(res.body.initUnit, undefined)
        done()
      })
  })

  test('Convert with no number such as kg', function (done) {
    chai
      .request(server)
      .keepOpen()
      .get('/api/convert')
      .query({ input: 'kg' })
      .end((err, res) => {
        if (err) assert.fail()
        assert.equal(res.status, 200)
        assert.equal(res.body.initNum, 1)
        assert.equal(res.body.initUnit, 'kg')
        assert.approximately(res.body.returnNum, 2.20462, 0.1)
        assert.equal(res.body.returnUnit, 'lbs')
        assert.equal(res.body.string, '1 kilograms converts to 2.20462 pounds')
        done()
      })
  })
})
