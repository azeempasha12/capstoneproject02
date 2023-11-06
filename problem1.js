const num = 123321;
function isPalindrome(num) {
    const str = num.toString();
    let i = 0, j = str.length - 1;
    while (i < j && str[i] === str[j]) {
        i++;
        j--;
    }

    if (i >= j) {
        return true;
    } else {
        return false;
    }
}


console.log(isPalindrome(num));