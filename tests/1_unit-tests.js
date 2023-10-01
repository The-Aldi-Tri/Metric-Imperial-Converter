const chai = require('chai')
const assert = chai.assert
const mocha = require('mocha')
const { suite, test } = mocha
const ConvertHandler = require('../controllers/convertHandler.js')

const convertHandler = new ConvertHandler()

suite('convertHandler.js Unit Tests', function () {
  suite('getNum() unit tests', function () {
    test('correctly read a whole number input', function () {
      const input = '12L'
      assert.equal(convertHandler.getNum(input), 12)
    })
    test('correctly read a decimal number input', function () {
      const input = '1.2L'
      assert.equal(convertHandler.getNum(input), 1.2)
    })
    test('correctly read a fractional input', function () {
      const input = '1/2L'
      assert.equal(convertHandler.getNum(input), 0.5)
    })
    test('correctly read a fractional input with a decimal', function () {
      const input = '6.6/2L'
      assert.equal(convertHandler.getNum(input), 3.3)
    })
    test('correctly return an error on a double-fraction (i.e. 3/2/3)', function () {
      const input = '2/3/2L'
      assert.equal(convertHandler.getNum(input), undefined)
    })
    test('correctly default to a numerical input of 1 when no numerical input is provided', function () {
      const input = 'L'
      assert.equal(convertHandler.getNum(input), 1)
    })
  })

  suite('getUnit() unit tests', function () {
    test('correctly read each valid input unit', function () {
      const input = ['gal', 'l', 'mi', 'km', 'lbs', 'kg', 'GAL', 'L', 'MI', 'KM', 'LBS', 'KG']
      const expect = ['gal', 'L', 'mi', 'km', 'lbs', 'kg']
      input.forEach((item, index) => {
        assert.equal(convertHandler.getUnit(item), expect[index % expect.length])
      })
    })
    test('correctly return an error for an invalid input unit', function () {
      const input = '1.2ll'
      assert.equal(convertHandler.getUnit(input), undefined)
    })
  })

  suite('getReturnUnit() unit tests', function () {
    test('return the correct return unit for each valid input unit', function () {
      const initUnit = ['gal', 'l', 'mi', 'km', 'lbs', 'kg', 'GAL', 'L', 'MI', 'KM', 'LBS', 'KG']
      const returnUnit = ['L', 'gal', 'km', 'mi', 'kg', 'lbs']
      initUnit.forEach((item, index) => {
        assert.equal(convertHandler.getReturnUnit(item), returnUnit[index % returnUnit.length])
      })
    })
  })

  suite('spellOutUnit() unit tests', function () {
    test('correctly return the spelled-out string unit for each valid input', function () {
      const unit = ['gal', 'l', 'mi', 'km', 'lbs', 'kg']
      const spelled = ['gallons', 'liters', 'miles', 'kilometers', 'pounds', 'kilograms']
      unit.forEach((item, index) => {
        assert.equal(convertHandler.spellOutUnit(item), spelled[index])
      })
    })
  })

  suite('convert() unit tests', function () {
    const galToL = 3.78541
    const lbsToKg = 0.453592
    const miToKm = 1.60934

    test('correctly convert gal to L', function () {
      const input = [1, 'gal']
      const expect = parseFloat((input[0] * galToL).toFixed(5))
      assert.equal(convertHandler.convert(input[0], input[1]), expect)
    })

    test('correctly convert L to gal', function () {
      const input = [2, 'L']
      const expect = parseFloat((input[0] / galToL).toFixed(5))
      assert.equal(convertHandler.convert(input[0], input[1]), expect)
    })

    test('correctly convert mi to km', function () {
      const input = [3, 'mi']
      const expect = parseFloat((input[0] * miToKm).toFixed(5))
      assert.equal(convertHandler.convert(input[0], input[1]), expect)
    })

    test('correctly convert km to mi', function () {
      const input = [4, 'km']
      const expect = parseFloat((input[0] / miToKm).toFixed(5))
      assert.equal(convertHandler.convert(input[0], input[1]), expect)
    })

    test('correctly convert lbs to kg', function () {
      const input = [5, 'lbs']
      const expect = parseFloat((input[0] * lbsToKg).toFixed(5))
      assert.equal(convertHandler.convert(input[0], input[1]), expect)
    })

    test('correctly convert kg to lbs', function () {
      const input = [6, 'kg']
      const expect = parseFloat((input[0] / lbsToKg).toFixed(5))
      assert.equal(convertHandler.convert(input[0], input[1]), expect)
    })
  })
})
