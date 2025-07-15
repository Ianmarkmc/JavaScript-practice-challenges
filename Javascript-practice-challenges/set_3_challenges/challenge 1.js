// ✅ Set 3 - Challenge 1
// Classify array elements into evens, odds, and single-character strings
function classifyArray(arr) {
  const result = {
    evens: [],
    odds: [],
    chars: []
  };

  for (let item of arr) {
    if (typeof item === 'number' && Number.isInteger(item)) {
      if (item % 2 === 0) {
        result.evens.push(item);
      } else {
        result.odds.push(item);
      }
    } else if (typeof item === 'string' && item.length === 1) {
      result.chars.push(item);
    }
  }

  result.evens.sort((a, b) => a - b);
  result.odds.sort((a, b) => a - b);
  result.chars.sort();

  return result;
}

const input1 = ["a", 3, 4, "z", 2.5, 6, "b", 1];
console.log(classifyArray(input1));
