var callPoints = function (operations) {
    let stack = [];

    for (let i = 0; i < operations.length; i++) {
        if (operations[i] === "+") {
            let sum = stack[stack.length - 2] + stack[stack.length - 1];
            stack.push(sum);
        } else if (operations[i] === "D") {
            let newD = stack[stack.length - 1] * 2;
            stack.push(newD);
        } else if (operations[i] === "C") {
            stack.pop();
        } else {
            let integer = parseInt(operations[i]);
            stack.push(integer);
        }
    }

    // Calculate the totalSum
    let totalSum = 0;
    for (let i = 0; i < stack.length; i++) {
        totalSum += stack[i];
    }

    return totalSum;
};

// Example usage:
let operations = [["5","2","C","D","+"];
console.log(callPoints(operations)); // Output: 30
