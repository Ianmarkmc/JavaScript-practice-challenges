// Set 2 - Challenge 1
// Return Fizz, Buzz, or FizzBuzz based on combined string lengths
function fizzBuzz(str1, str2) {
  const totalLength = str1.length + str2.length;

  if (totalLength % 3 === 0 && totalLength % 5 === 0) {
    return "FizzBuzz";
  } else if (totalLength % 3 === 0) {
    return "Fizz";
  } else if (totalLength % 5 === 0) {
    return "Buzz";
  }
  // return nothing if not divisible by 3 or 5
}

console.log(fizzBuzz("abc", "de"));        // Buzz
console.log(fizzBuzz("hello", "world"));   // FizzBuzz
console.log(fizzBuzz("Hi", "There"));      // (no output)