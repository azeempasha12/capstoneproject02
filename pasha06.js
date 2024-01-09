function isHappy(n) {
    // Helper function to calculate the sum of squares of digits
    function calculateSumOfSquares(num) {
        let sum = 0;
        while (num > 0) {
            const digit = num % 10;
            sum += digit * digit;
            num = Math.floor(num / 10);
        }
        return sum;
    }

    let seenNumbers = new Set();
    let current = n;

    while (current !== 1 && !seenNumbers.has(current)) {
        seenNumbers.add(current);
        current = calculateSumOfSquares(current);
    }

    return current === 1;
}

// Example usage:
console.log(isHappy(19)); // Output: true
