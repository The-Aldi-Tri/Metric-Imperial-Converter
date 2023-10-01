function ConvertHandler () {
  // let stringNoSpace = input.replace(/\s/g, '');

  this.getNum = function (input) {
    const result = input.match(/[\d./]+/g)
    if (result) {
      if (result.length === 1) {
        const nums = result[0].split('/')
        if (nums.length > 2) {
          return undefined
        } else if (nums.length === 2) {
          return parseFloat(nums[0] / nums[1])
        } else {
          return parseFloat(nums[0])
        }
      } else {
        return undefined
      }
    } else {
      return 1
    }
  }

  this.getUnit = function (input) {
    const result = input.toLowerCase().match(/[a-z]+/g) || []
    if (result.length === 1) {
      switch (result[0]) {
        case 'km':
          return 'km'
        case 'gal':
          return 'gal'
        case 'lbs':
          return 'lbs'
        case 'mi':
          return 'mi'
        case 'l':
          return 'L'
        case 'kg':
          return 'kg'
        default:
          return undefined
      }
    } else {
      return undefined
    }
  }

  this.getReturnUnit = function (initUnit) {
    switch (initUnit.toLowerCase()) {
      case 'km':
        return 'mi'
      case 'gal':
        return 'L'
      case 'lbs':
        return 'kg'
      case 'mi':
        return 'km'
      case 'l':
        return 'gal'
      case 'kg':
        return 'lbs'
      default:
        return undefined
    }
  }

  this.spellOutUnit = function (unit) {
    switch (unit.toLowerCase()) {
      case 'km':
        return 'kilometers'
      case 'gal':
        return 'gallons'
      case 'lbs':
        return 'pounds'
      case 'mi':
        return 'miles'
      case 'l':
        return 'liters'
      case 'kg':
        return 'kilograms'
      default:
        return 'bananas :)'
    }
  }

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541
    const lbsToKg = 0.453592
    const miToKm = 1.60934
    let result
    switch (initUnit.toLowerCase()) {
      case 'gal':
        result = initNum * galToL
        break
      case 'lbs':
        result = initNum * lbsToKg
        break
      case 'mi':
        result = initNum * miToKm
        break
      case 'l':
        result = initNum / galToL
        break
      case 'kg':
        result = initNum / lbsToKg
        break
      case 'km':
        result = initNum / miToKm
        break
      default:
        return undefined
    }
    return parseFloat(result.toFixed(5))
  }

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    const initUnitString = this.spellOutUnit(initUnit)
    const returnUnitString = this.spellOutUnit(returnUnit)
    return `${initNum} ${initUnitString} converts to ${returnNum} ${returnUnitString}`
  }
}

module.exports = ConvertHandler
