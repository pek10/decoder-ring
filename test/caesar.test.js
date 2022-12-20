// Write your tests here!
const { expect } = require('chai')
const { caesar } = require('../src/caesar')

describe('caesar()', () => {
  let input = 'Alex Myers'
  let shift = 8

  it('is a function', () => {
    expect(caesar).to.be.a('function')
  })

  it('returns false for all invalid shift values', () => {
    const shiftValues = [0, -26, 26, null, undefined]
    const actual = shiftValues.every((shift) => {
      return !caesar(input, shift)
    })
    expect(actual).to.be.true
  })

  it('returns a result for all valid shift numbers', () => {
    const shiftValues = [-25, -1, 1, 25]
    const actual = shiftValues.every((shift) => {
      return caesar(input, shift)
    })
    expect(actual).to.be.true
  })

  describe('encoding a message', () => {
    it('returns a string', () => {
      const expected = 'string'
      const actual = typeof caesar(input, shift)
      expect(actual).to.equal(expected)
    })

    it('returns correct length', () => {
      const expected = input.length
      const actual = caesar(input, shift).length
      expect(actual).to.equal(expected)
    })

    it("encodes 'Alex Myers' shift + 8 correctly.", () => {
      input = 'Alex Myers'
      shift = 8
      const expected = 'itmf ugmza'
      const actual = caesar(input, shift)
      expect(actual).to.deep.equal(expected)
    })

    it("encodes 'Alex Myers' shift - 8 correctly.", () => {
      input = 'Alex Myers'
      shift = -8
      const expected = 'sdwp eqwjk'
      const actual = caesar(input, shift)
      expect(actual).to.deep.equal(expected)
    })
  })

  describe('decoding a message', () => {
    it("decodes 'sdwp eqwjk' shift - 8 correctly.", () => {
      input = 'sdwp eqwjk'
      shift = 8
      const expected = 'alex myers'
      const actual = caesar(input, shift)
      expect(actual).to.deep.equal(expected)
    })

    it("decodes 'itmf ugmza' shift + 8 correctly.", () => {
      input = 'itmf ugmza'
      shift = -8
      const expected = 'alex myers'
      const actual = caesar(input, shift)
      expect(actual).to.deep.equal(expected)
    })
  })
})
