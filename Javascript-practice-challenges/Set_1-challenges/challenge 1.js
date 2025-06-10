// Set 1 - Challenge 1
// Capitalize the first letter of each word
function capitalizeWords(input) {
  const words = input.split(" ");
  const capitalized = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return capitalized.join(" ");
}

console.log(capitalizeWords("hello world")); // Output: "Hello World"
