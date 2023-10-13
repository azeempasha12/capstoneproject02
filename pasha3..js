function calculateTip(billAmount, tipPercentage) {
    const tipAmount = billAmount * tipPercentage;
    const totalAmount = billAmount + tipAmount;
    return Number(totalAmount.toFixed(2));
}

// Example1
const billAmount = 60.75; // Replace with your bill amount
const tipPercentage = 0.25; // 25% tip as 0.25
const total = calculateTip(billAmount, tipPercentage);
console.log(`Total amount to be paid: $${total}`); //$75.94
// exaple2
const billAmount2 = 90.00; // Replace with your bill amount
const tipPercentage2 = 0.10; // 25% tip as 0.25
const total2 = calculateTip(billAmount2 tipPercentage2);
console.log(`Total amount to be paid: $${total}`); //$99.00