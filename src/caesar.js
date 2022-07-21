
const caesarModule = (function () {

  function caesar(input, shift = 0, encode = true) {
    //we first check if the shift parameter is lower than -25 or larger than 25
    //if the shift is 0 or the shift is not provided and if any of these
    //result true then we return false
    if (shift < -25 || shift > 25 || shift === 0 || shift === undefined)
      return false;
    //initialize the final array which will be used to store the encoded/decoded strings
    let finalArray = [];
    //if we are decoding we want to multiply the shift by negative one so that we
    //are reversing the shift from the original
    if (!encode) {
      shift *= -1;
    }
    //loop through the input string and get each character
    for (let i = 0; i < input.length; i++) {
      //change the input string into lowercase to avoid errors
      let inpt = input.toLowerCase();
      //get the character code at every character of the input
      let char = inpt.charCodeAt(i);
      //make a variable that stores the character code plus the shift
      let shifted = char + shift;
      //check if the shifted character code is within the bounds of 97-122
      if (char >= 97 && char <= 122) {
        //if the shifted character code had gone beyond 122 we push the shifted
        //charcode minus the range of our characters *in this case 26 because
        //there are 26 letters in the alphabet*
        if (shifted > 122) {
          finalArray.push(shifted - 26);
        //if the shifted character code had gone below 97 we push the shifted
        //charcode plus the range of our characters *in this case 26 because
        //there are 26 letters in the alphabet*
        } else if (shifted < 97) {
          finalArray.push(shifted + 26);
          //if the shifted character code is within our bounds 97-122
          //we push the shifted character code into the array
        } else {
          finalArray.push(shifted);
        }
        //if the character in the input string is not within our bounds
        //this means that the character is a special character or space
        //and it just pushes that character or space into the array
      } else {
        finalArray.push(char);
      }
    }
    //finally we return the string using String.fromCharCode() and passing in the
    //array with the rest operator to get every element turned to a string
    return String.fromCharCode(...finalArray);
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
