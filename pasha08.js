var fairCandySwap = function(aliceSizes, bobSizes) {
    let sumAlice = 0, sumBob = 0;
    let bobSet = new Set();

    // Calculate the sum for Alice and create a set for Bob's candy sizes
    for (let i = 0; i < aliceSizes.length; i++) {
        sumAlice += aliceSizes[i];
    }

    for (let i = 0; i < bobSizes.length; i++) {
        sumBob += bobSizes[i];
        bobSet.add(bobSizes[i]);
    }

    let target = (sumAlice + sumBob) / 2;

    // Find the matching candy sizes using the hashmap
    for (let i = 0; i < aliceSizes.length; i++) {
        let a = aliceSizes[i];
        let b = target - (sumAlice - a);

        if (bobSet.has(b)) {
            return [a, b];
        }
    }
};

// Example usage:
console.log(fairCandySwap([1,1], [2,2]));  // Output: [1, 2]
console.log(fairCandySwap([1,2], [2,3]));  // Output: [1, 2]
