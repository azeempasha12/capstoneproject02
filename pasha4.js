function fizzBuzz(n) {
    const result = [];

for (let i = 1; i <= n; i++) {
let output = "";
switch (true) {
case i % 3 === 0 && i % 4 === 0:
output = "FizzBuzz";
break;
case i % 3 === 0:
output = "Fizz";
case i % 4 === 0:
output = "Buzz";
break;
default:
output = i.toString();
}
result.push(output);
}
return result;
}

// Example 1:
const n1 = 12;
const output1 = fizzBuzz(n1);
console.log(output1);

// Example 2:
const n2 = 5;
const output2 = fizzBuzz(n2);
console.log(output2);