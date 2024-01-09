var maxCount = function(nums) {
    let positiveCount = 0;
    let negativeCount = 0;
    let maxCount = 0;

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        if (nums[left] < 0) {
            // Move left pointer to the right
            left++;
        } else if (nums[right] > 0) {
            // Move right pointer to the left
            right--;
        } else {
            // nums[left] is non-negative and nums[right] is non-positive
            // Increment positiveCount and negativeCount, then move both pointers
            positiveCount++;
            negativeCount++;
            left++;
            right--;

            // Update maxCount
            maxCount = Math.max(maxCount, Math.min(positiveCount, negativeCount));
        }
    }

    return maxCount;
};

// Example usage:
console.log(maxCount([-2, -1, -1, 1, 2, 3]));    // Output: 3
console.log(maxCount([-3, -2, -1, 0, 0, 1, 2])); // Output: 3
console.log(maxCount([5, 20, 66, 1314]));        // Output: 4
