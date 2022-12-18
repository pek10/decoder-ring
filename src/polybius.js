// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // polybius("thinkful"); //> "4432423352125413"
    // polybius("Hello world"); //> '3251131343 2543241341'

    // polybius("3251131343 2543241341", false); //> "hello world"
    // polybius("4432423352125413", false); //> "th(i/j)nkful
    // polybius("44324233521254134", false); //> false
    // ================================================================

    const polybiusObj = {
      a: 11,
      b: 21,
      c: 31,
      d: 41,
      e: 51,
      f: 12,
      g: 22,
      h: 32,
      i: 42,
      j: 42,
      k: 52,
      l: 13,
      m: 23,
      n: 33,
      o: 43,
      p: 53,
      q: 14,
      r: 24,
      s: 34,
      t: 44,
      u: 54,
      v: 15,
      w: 25,
      x: 35,
      y: 45,
      z: 55,
    }

    const polybiusDecodeObj = {
      11: 'a',
      21: 'b',
      31: 'c',
      41: 'd',
      51: 'e',
      12: 'f',
      22: 'g',
      32: 'h',
      42: '(i/j)',
      52: 'k',
      13: 'l',
      23: 'm',
      33: 'n',
      43: 'o',
      53: 'p',
      14: 'q',
      24: 'r',
      34: 's',
      44: 't',
      54: 'u',
      15: 'v',
      25: 'w',
      35: 'x',
      45: 'y',
      55: 'z',
    }

    // Prepare the input for ENCODE
    const inputArr = input.toLowerCase().split('')

    // Declare a result var as an array
    let result = []

    // Helper func to test if char is a letter or not
    const charIsLetter = (char) => {
      if (typeof char !== 'string') {
        return false
      }

      return char.toLowerCase() !== char.toUpperCase()
    }

    // When decoding, the number of characters in the string
    // excluding spaces should be even. Otherwise, return false.
    if (!encode && inputArr.length % 2 === 0) {
      return false
    }

    // ENCODE
    if (encode) {
      for (let i = 0; i < inputArr.length; i++) {
        if (!charIsLetter(inputArr[i])) {
          result.push(inputArr[i])
        } else {
          result.push(polybiusObj[inputArr[i]])
        }
      }
    }
    // DECODE
    else {
      for (let i = 0; i < inputArr.length; i++) {
        if (input[i] === ' ') {
          result.push(' ')
        } else {
          let letterPair = ''
          letterPair += inputArr[i]
          letterPair += inputArr[i + 1]
          console.log(letterPair)

          result.push(polybiusDecodeObj[`letterPair`])
          i++
        }
      }
    }

    // Return the final result
    return result.join('')
  }

  return {
    polybius,
  }
})()

// console.log(polybiusModule.polybius('3251131343 2543241341', false))

module.exports = { polybius: polybiusModule.polybius }
