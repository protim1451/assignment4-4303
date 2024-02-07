function filterNumbers(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'number') {
        result.push(arr[i]);
      }
    }
    return result;
  }
  
  // Example usage:
  const mixedArray = [ 1 , 2 , -3 ];
  const numbersOnly = filterNumbers(mixedArray);
  console.log(numbersOnly); // Output: [1, 42, 3.14]
  