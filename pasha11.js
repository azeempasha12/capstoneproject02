var findPeakElement = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[mid + 1]) {
            // The peak must be on the left side
            right = mid;
        } else {
            // The peak must be on the right side
            left = mid + 1;
        }
    }

    // At the end of the loop, left and right will point to the peak element
    return left;
};

// Example usage:
console.log(findPeakElement([1, 2, 3, 1]));       // Output: 2
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4])); // Output: 5
