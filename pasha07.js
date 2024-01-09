function isPalindrome(n) {
    // Convert the number to a string
    const numString = n.toString();

    // Use two pointers
    let left = 0;
    let right = numString.length - 1;

    // Check palindrome using two pointers
    while (left < right) {
        if (numString[left] !== numString[right]) {
            return false; // Characters at two pointers don't match
        }
        left++;
        right--;
    }

    return true; 
}

// Example usage:
console.log(isPalindrome(12321));  // Output: true
console.log(isPalindrome(1451)); // Output: false
console.log(isPalindrome(12345));   // Output: false
