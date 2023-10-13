function convertTemperature(temperature, unit) {
    if (unit === "C") {
        // Convert Celsius to Fahrenheit
        const fahrenheit = (temperature * 9/5) + 32;
        return fahrenheit.toFixed(2) + " F";
    } else if (unit === "F") {
        // Convert Fahrenheit to Celsius
        const celsius = (temperature - 32) * 5/9;
        return celsius.toFixed(2) + " C";
    } else {
        return "Invalid unit. Use 'C' for Celsius or 'F' for Fahrenheit.";
    }
}

// Example usage:
console.log(convertTemperature(25, "C")); // Output: "77.00 F"
console.log(convertTemperature(-40, "F")); // Output: "-40.00 C"
console.log(convertTemperature(0, "k")); // Output: "Invalid unit. Use 'C' for Celsius or 'F' for Fahrenheit."
