function maxcount(nums) {
    let pos = 0; // Initialize the count of positive integers to 0
    let neg = 0; // Initialize the count of negative integers to 0
  
    for (let num of nums) {
      if (num > 0) {
        pos++; // Increment the positive count for positive numbers
      } else if (num < 0) {
        neg++; // Increment the negative count for negative numbers
      }
      // Note: Numbers equal to 0 are ignored as per the problem description
    }
  
    // Calculate the maximum count between positive and negative integers
    return Math.max(pos, neg);
  }
  
  // Example 1:
  const nums = [5,20,66,1314];
  const result = maxcount(nums);
  console.log(result); // Output: 3