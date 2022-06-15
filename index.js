function isPalindrome(word) {
  // Write your algorithm here
  let splitWord = word.split("");
  let reversedWord = splitWord.reverse();
  let joinedWord = reversedWord.join("");
  return word === joinedWord ? true : false;
}

/* 
  Add your pseudocode here
  =========================
  1. Split the word.
  2. Reverse the order of letters in (1).
  3. Join the letters from (2) to form a reversed word.
  4. Compare original and reversed. Return true if equal, false otherwise. 
  
*/

/*
  Add written explanation of your solution here
  ==============================================
  1. Split the word argument into individual letters. Using <split("")> will return an array.
  2. Reverse the array using the reverse bult-in function. <reverse()>
  3. Join the letters in the array into a string using the bult-in join function. <join("")>
  4. Using strict equality, compare original and reversed words. If equal, return true; else return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
