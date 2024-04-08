function isPalindrome(word) {
  for (let i = 0; i < word.length / 2; i++) {
    const j = word.length - 1 - i;
    const startChar = word[i];
    const endChar = word[j];

    if (startChar !== endChar) return false;
  }
  return true;
}

/* 
  Add your pseudocode here
iterate from the beginnning of the string to the middle of the string
compare the letter we're iterating over to the corresponding letter at the end of the string
if the letters don't match, return false. If we reach the middle, and all the letters match, return true.
*/

/*
  Add written explanation of your solution here

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));
  
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));
  
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));


  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
