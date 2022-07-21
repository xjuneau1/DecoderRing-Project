
const substitutionModule = (function () {

  function substitution(input, alphabet, encode = true) {
    //check if alphabet param is given or if the length of the param is not 26 characters
    //return false if resolved to true for either
    if (!alphabet || alphabet.length != 26 ) return false
    //loop through the user alphabet and get each character
    for (let j = 0; j < alphabet.length; j++){
      //check if there are any duplicate characters in the user alphabet
      //loops through the string and sets up a conditional that results true
      //when duplicates exist and returns false
      if (alphabet.lastIndexOf(alphabet[j]) !== j){
        return false
      }
    }
    input = input.toLowerCase()
    //initialize a string as the standard alphabet
    const standard = 'abcdefghijklmnopqrstuvwxyz'
    //initialize a final output string
    let finalString =''
    //if we are encoding execute code
    if(encode){
      //loop through the input string and get each character
      for (let letter of input){
        //if the character is a space
        if (letter === " ") {
          //add the space to the output string
          finalString += letter;
          //if it is not a space
        } else {
          //we get the index of letter and return the same index value in the 
          //standard alphabet string
          let index = standard.indexOf(letter)
          //we then use that index to get the encode character for that index and
          //add it to the final string
          finalString += alphabet[index]
        }
      }
      //if we are decoding
    } else {
      //loop through the characters in the input
      for (let letter of input){
        //if the character is a space
        if (letter === " ") {
          //add the space to the final string
          finalString += letter;
          //if the character is not a space
        } else {
          //we get the index of letter and return the same indexed value in the 
          //user alphabet
          let index = alphabet.indexOf(letter)
          //we then use that index to get the decode character for that index using
          //the standard alphabet string and add it to the final string
          finalString += standard[index]
        }
      }
    }
    //finally we return the final string either encoded or decoded
    return finalString
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
