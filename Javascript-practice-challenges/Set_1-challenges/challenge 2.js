// Set 1 - Challenge 2
// Count how many times 'a' appears in a string
function countLetterA(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a') {
      count++;
    }
  }
  return count;
}

const input = "JavaScript is amazing!";
console.log(countLetterA(input)); // Output: 4
