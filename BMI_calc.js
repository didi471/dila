// Function to calculate BMI
function calculateBMI(weight, height) {
    // Convert height from meters to square meters
    const heightSquared = height * height;
  
    // Calculate BMI
    const bmi = weight / heightSquared;
  
    // Return BMI
    return bmi;
  }
  
  // Example usage:
  const weight = 70; // in kg
  const height = 1.75; // in meters
  
  const bmi = calculateBMI(weight, height);
  
  console.log(`Your BMI is: ${bmi.toFixed(2)}`);