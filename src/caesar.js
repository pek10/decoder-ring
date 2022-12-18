// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope.

  function caesar(input, shift, encode = true) {
    // Return false early for incorrect args.
    if (!shift || shift === 0 || shift > 25 || shift < -25) return false

    // Account for negative shift values
    if (shift < 0) {
      shift = 26 + (shift % 26)
    }

    // Normal Alphabet
    const normalAlphaArr = 'abcdefghijklmnopqrstuvwxyz'.split('')

    // Generate a shifted alphabet
    const shiftedAlphaArr = []

    for (let i = 0; i < normalAlphaArr.length; i++) {
      let newIndex = (i + shift) % normalAlphaArr.length
      shiftedAlphaArr.push(normalAlphaArr[newIndex])
    }

    // Prepare the input for encode/decode
    const inputArr = input.toLowerCase().split('')

    // Declare a result var as an array
    let result = []

    // Helper func to test if char is a letter or other symbol
    const charIsLetter = (char) => {
      if (typeof char !== 'string') {
        return false
      }

      return char.toLowerCase() !== char.toUpperCase()
    }

    // Loop through the message, get the index from normalAlpha and use the same index in shiftedAlpha
    // Push that letter from the shiftedAlpha into the result arr.
    if (encode) {
      for (let i = 0; i < inputArr.length; i++) {
        if (!charIsLetter(inputArr[i])) {
          result.push(inputArr[i])
        } else {
          for (let j = 0; j < normalAlphaArr.length; j++) {
            if (inputArr[i] === normalAlphaArr[j]) {
              result.push(shiftedAlphaArr[j])
            }
          }
        }
      }
    } else {
      for (let i = 0; i < inputArr.length; i++) {
        if (!charIsLetter(inputArr[i])) {
          result.push(inputArr[i])
        } else {
          for (let j = 0; j < shiftedAlphaArr.length; j++) {
            if (inputArr[i] === shiftedAlphaArr[j]) {
              result.push(normalAlphaArr[j])
            }
          }
        }
      }
    }

    return result.join('')
  }

  return {
    caesar,
  }
})()

module.exports = { caesar: caesarModule.caesar }
