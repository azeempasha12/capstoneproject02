function isPalindrome(str) {
    // Step 1: Convert the input string to lowercase
    const lowerCaseStr = str.toLowerCase();
    
    // Step 2: Remove non-alphanumeric characters (including spaces and punctuation)
    const cleanStr = lowerCaseStr.replace(/[^a-z0-9]/g, "");

    // Step 3: Compare the modified string with its reverse
    const reversedStr = cleit("").reverse().join("");anStr.spl

    return cleanStr === reversedStr;
}

// Example  usage:
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false