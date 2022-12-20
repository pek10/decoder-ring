// Write your tests here!
const { expect } = require('chai')
const { polybius } = require('../src/polybius')

describe('polybius()', () => {
  it('is a function', () => {
    expect(polybius).to.be.a('function')
  })

  it('should return a string', () => {
    const message = 'message'
    const actual = typeof polybius(message)
    const expected = 'string'

    expect(actual).to.equal(expected)
  })

  describe('encoding a message', () => {
    it('should encode "Alex Myers" properly', () => {
      const message = 'Alex Myers'
      const actual = polybius(message)
      const expected = '11135135 2345512434'

      expect(actual).to.equal(expected)
    })
  })

  describe('decoding a message', () => {
    it('should decode "11135135 2345512434" properly', () => {
      const message = '11135135 2345512434'
      const actual = polybius(message, false)
      const expected = 'alex myers'

      expect(actual).to.equal(expected)
    })
  })
})
