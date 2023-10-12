function calculateBMI(weight, height) {
    // Calculate BMI
    const bmi = weight / (height * height);
  
    // Determine health classification
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
      return "Overweight";
    } else {
      return "Obese";
    }
  }
  
  // Example 1:
  const weightInKg1 = 65;
  const heightInM1 = 1.75;
  const bmiClassification1 = calculateBMI(weightInKg1, heightInM1);
  console.log(bmiClassification1);
  
  // Example 2:
  const weightInKg2= 45;
  const heightInM2 = 1.60;
  const bmiClassification2 = calculateBMI(weightInKg2, heightInM2);
  console.log(bmiClassification2);