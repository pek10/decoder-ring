// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  // 'qnpyhbluemiosdjwctfgazxrkv'

  function substitution(input, alphabet, encode = true) {
    // check for errors
    const hasRepeats = (alphabet) => {
      return /(.).*\1/.test(alphabet)
    }

    if (
      !alphabet ||
      alphabet.length !== 26 ||
      typeof alphabet !== 'string' ||
      hasRepeats(alphabet)
    ) {
      return false
    }

    const alphaArr = 'abcdefghijklmnopqrstuvwxyz'.split('')
    const cipherArr = alphabet.split('')
    const inputArr = input.toLowerCase().split('')
    let messageResult = ''

    // Helper func to test if char is a letter or not
    const charIsLetter = (char) => {
      if (typeof char !== 'string') {
        return false
      }

      return char.toLowerCase() !== char.toUpperCase()
    }

    // ENCODE
    if (encode) {
      for (let i = 0; i < inputArr.length; i++) {
        if (!charIsLetter(inputArr[i])) {
          messageResult += inputArr[i]
        } else {
          let index = alphaArr.indexOf(inputArr[i])
          messageResult += `${cipherArr[index]}`
        }
      }
    }

    // DECODE
    if (!encode) {
      for (let i = 0; i < inputArr.length; i++) {
        if (inputArr[i] === ' ') {
          messageResult += inputArr[i]
        } else {
          let index = cipherArr.indexOf(inputArr[i])
          messageResult += `${alphaArr[index]}`
        }
      }
    }

    return messageResult
  }

  return {
    substitution,
  }
})()

module.exports = { substitution: substitutionModule.substitution }
