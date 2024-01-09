var searchRange = function(nums, target) {
    // Binary search approach

    const findFirstOccurrence = (nums, target) => {
        let low = 0;
        let high = nums.length - 1;
        let result = -1;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);

            if (nums[mid] >= target) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }

            if (nums[mid] === target) {
                result = mid;
            }
        }

        return result;
    };

    const findLastOccurrence = (nums, target) => {
        let low = 0;
        let high = nums.length - 1;
        let result = -1;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);

            if (nums[mid] <= target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }

            if (nums[mid] === target) {
                result = mid;
            }
        }

        return result;
    };

    const firstOccurrence = findFirstOccurrence(nums, target);
    const lastOccurrence = findLastOccurrence(nums, target);

    return [firstOccurrence, lastOccurrence];
};

// Example usage:
const nums = [5, 7, 7, 8, 8, 10];
const target = 8;
console.log(searchRange(nums, target));  // Output: [3, 4]
