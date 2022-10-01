// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {

    if (weight / height ** 2 <= 18.5) {
      return "Underweight";
    } else if (weight / height ** 2 <= 25) {
      return "Normal";
    } else if (weight / height ** 2 <= 30) {
      return "Overweight";
    } else if (weight / height ** 2 > 30) {
      return "Obese";
    }
  
  }

  function bmi(weight, height) {
    let bmi = weight / (height ** 2)

    return bmi < 18.5 ? "Underweight" : bmi <= 25 ? "Normal" : bmi < 30 ? "Overweight" : "Obese"
  }