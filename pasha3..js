function calculateTip(billAmount, tipPercentage) {
    const tipAmount = billAmount * tipPercentage;
    const totalAmount = billAmount + tipAmount;
    return Number(totalAmount.toFixed(2));
}

// Example1
const billAmount = 60.75; // Replace with your bill 
const tipPercentage = 0.25; // 25% tip as 0.25
const total = calculateTip(billAmount, tipPercentage);
console.log(`Total amount to be paid: $${total}`); //$75.94