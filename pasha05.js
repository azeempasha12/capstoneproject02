var findErrorNums = function(nums) {
    const hashmap = new Map();
    const output = [];
    let maxValue = 0;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (hashmap.has(num)) output.push(num);
        hashmap.set(num, (hashmap.get(num) || 0) + 1); // Update the count in the map
        maxValue = Math.max(maxValue, num);
    }

    for (let i = 1; i <= maxValue; i++) {
        const count = hashmap.get(i) || 0; // Get the count from the map
        if (count === 0) output.push(i);
    } 

    return output;
};
