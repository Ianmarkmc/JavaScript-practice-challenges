// ✅ Set 3 - Challenge 3
// Find the single number in an array where all other numbers appear twice
function findSingleNumber(nums) {
  let result = 0;

  for (let num of nums) {
    result ^= num;
  }

  return result;
}

console.log(findSingleNumber([4, 1, 2, 1, 2])); // Output: 4
