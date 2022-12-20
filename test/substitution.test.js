const { expect } = require('chai')
const { substitution } = require('../src/substitution')

// Write your tests here!
describe('substitution()', () => {
  it('is a function', () => {
    expect(substitution).to.be.a('function')
  })

  it('should return a string', () => {
    const message = 'message'
    const alphabet = 'qnpyhbluemiosdjwctfgazxrkv'
    const actual = typeof substitution(message, alphabet)
    const expected = 'string'

    expect(actual).to.equal(expected)
  })

  describe('encoding a message', () => {
    it('should encode "Alex Myers" properly', () => {
      const message = 'Alex Myers'
      const alphabet = 'qnpyhbluemiosdjwctfgazxrkv'
      const actual = substitution(message, alphabet)
      const expected = 'qohr skhtf'

      expect(actual).to.equal(expected)
    })
  })

  describe('decoding a message', () => {
    it('should decode "Alex Myers" properly', () => {
      const message = 'qohr skhtf'
      const alphabet = 'qnpyhbluemiosdjwctfgazxrkv'
      const actual = substitution(message, alphabet, false)
      const expected = 'alex myers'

      expect(actual).to.equal(expected)
    })
  })
})
