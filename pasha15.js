var transitionPoint = function(arr) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === 1 && (mid === 0 || arr[mid - 1] === 0)) {
            // Found the transition point
            return mid;
        } else if (arr[mid] === 1) {
            // Move left to find the first occurrence of 1
            high = mid - 1;
        } else {
            // Move right to find the first occurrence of 1
            low = mid + 1;
        }
    }

    // No transition point found
    return -1;
};

// Example usage:
console.log(transitionPoint([0, 0, 0, 1, 1])); // Output: 3
console.log(transitionPoint([0, 0, 0, 0]));      // Output: -1
