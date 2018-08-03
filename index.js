function split(arr, index = -1) {

  // Allocate empty arrays for array halves
  var first_half = [], second_half = [];
  
  // If index was not provided, split the array in half.
  // If index was specified, split at that point.
  let mid = index === -1
      ? Math.round( (arr.length - 1) / 2 )
      : index;

  // Populate first half
  for (let i = 0; i < mid; i++) {
    first_half.push(arr[i]);
  }

  // Populate seconf half
  for (let j = mid; j < arr.length; j++) {
    second_half.push(arr[j]);
  }
  
  // Return split array
  return { first_half, second_half };
}

module.exports  = split;