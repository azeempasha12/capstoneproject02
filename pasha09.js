function nextGreatestLetter(letters, target) {
    // Create a set from the array of letters
    const lettersSet = new Set(letters);

    let ans;
    let check = false;

    for (let letter of lettersSet) {
        if (letter > target) {
            ans = letter;
            check = true;
            break;
        }
    }

    if (!check) {
        return letters[0];
    }

    return ans;
}

// Example usage:
const letters = ['c', 'f', 'j'];
const target = 'a';
console.log(nextGreatestLetter(letters, target));  // Output: 'c'
