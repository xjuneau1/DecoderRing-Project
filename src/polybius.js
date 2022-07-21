
const polybiusModule = (function () {
  //initialize an object with letters for keys and their corresponding polybius square
  //number-pairs as values
  const encoded = {
    a: "11", b: "21", c: "31", d: "41", e: "51",
    f: "12", g: "22", h: "32", i: "42", j: "42",
    k: "52", l: "13", m: "23", n: "33", o: "43",
    p: "53", q: "14", r: "24", s: "34", t: "44",
    u: "54", v: "15", w: "25", x: "35", y: "45",
    z: "55", " ": " ",
  };
  //initialize an object with polybius square number-pairs and letters as values
  const decoder = {
    11: "a", 21: "b", 31: "c", 41: "d", 51: "e", 12: "f",
    22: "g", 32: "h", 42: "i/j", 52: "k", 13: "l", 23: "m",
    33: "n", 43: "o", 53: "p", 14: "q", 24: "r", 34: "s",
    44: "t", 54: "u", 15: "v", 25: "w", 35: "x", 45: "y",
    55: "z",
  };
  function polybius(input, encode = true) {
    if(!input) return false
    //if we are not encoding execute code
    if (!encode) {
      //split the input string at the space and join each character *removes spaces*
      let oddOrEven = input.split(" ").join("");
      //checks if the length of the input string is even or odd, if it is odd
      //i.e. a remainder of 1, then return false
      if (oddOrEven.length % 2 === 1) {
        return false;
      }
    }
    //set input string to lowercase in order to avoid errors
    input = input.toLowerCase();
    //initialize a final output string
    let output = "";
    //if we are encoding execute code
    if (encode) {
      //loop through the input string and get each character
      for (let letter of input) {
        //use the character as a reference/index in the encoded object above to
        //get the value where the character matches the key, add it to the output
        output += encoded[letter];
      }
      //otherwise if we are decoding execute code
    } else if (!encode) {
      //loop through the encoded input string and get each character
      for (let i = 0; i < input.length; i++) {
        //check if the current character is a space
        if (input[i] === " ") {
          //if it is a space add it to the output string
          output += " ";
          //if it is not a space execute code
        } else {
          //initialize a template that takes in the current character and the next
          //and creates a string with both characters representing the number-pair
          let pair = `${input[i]}${input[i + 1]}`;
          //use the number pair as a reference/index for the decoder object above
          //add the value where the key is the number-pair to the output string
          output += decoder[pair];
          //increment the iterator so that when we call the for loop again
          //we will have incremented two characters and are ready to create a
          //string for the next pair of numbers
          i++;
        }
      }
    }
    //finally we return the output string
    return output
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
