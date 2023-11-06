function isPowerOfTwo(n) {
    return n > 0 &&  (n & (n - 1)) === 0;
}

const input = 5;
const result = isPowerOfTwo(input);

console.log(result);