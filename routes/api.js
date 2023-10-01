'use strict'

const ConvertHandler = require('../controllers/convertHandler.js')

module.exports = function (app) {
  const convertHandler = new ConvertHandler()

  app.route('/api/convert?').get((req, res) => {
    const input = req.query.input || req.body.input
    const initNum = convertHandler.getNum(input)
    const initUnit = convertHandler.getUnit(input)
    if (!initNum && !initUnit) {
      return res.send('invalid number and unit')
    } else if (!initNum) {
      return res.send('invalid number')
    } else if (!initUnit) {
      return res.send('invalid unit')
    }
    const returnNum = convertHandler.convert(initNum, initUnit)
    const returnUnit = convertHandler.getReturnUnit(initUnit)
    const spelledString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit)
    return res.json(
      {
        initNum,
        initUnit,
        returnNum,
        returnUnit,
        string: spelledString
      }
    )
  })
}
