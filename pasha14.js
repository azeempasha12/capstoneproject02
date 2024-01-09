var minimumSum = function(num) {
    // Convert the number to an array of digits
    const digits = Array.from(String(num), Number);

    // Sort the digits in ascending order
    const sortedDigits = digits.sort((a, b) => a - b);

    // Create new1 and new2 by splitting the sorted digits
    const new1 = parseInt(sortedDigits.slice(0, 2).join(''), 10);
    const new2 = parseInt(sortedDigits.slice(2).join(''), 10);

    // Return the minimum possible sum of new1 and new2
    return new1 + new2;
};

// Example usage:
console.log(minimumSum(2932)); // Output: 52
console.log(minimumSum(4009)); // Output: 13
