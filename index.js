function isPalindrome(word) {
  // Reverse the word
  const reversedWord = word.split('').reverse().join('');
  // Compare reversed to original
  return word === reversedWord;
}

/* 
  Pseudocode:
  1. Take the input string 'word'.
  2. Split it into an array of characters.
  3. Reverse the array.
  4. Join the array back into a string.
  5. Compare the reversed string to the original string.
  6. Return true if they match, else return false.
*/

/*
  Explanation:
  The function checks if a string is the same when reversed.
  If it is, it's a palindrome and we return true. Otherwise, false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));
}

module.exports = isPalindrome;
