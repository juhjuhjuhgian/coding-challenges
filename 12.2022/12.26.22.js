// Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails. To help her, you must correct the broken function to make sure that the second argument (tail), is the same as the last letter of the first argument (body) - otherwise the tail wouldn't fit!

// If the tail is right return true, else return false.

// The arguments will always be non empty strings, and normal letters.

//before
// function correctTail(bod, tail ;
  
//     sub = body.substr(bodylength-(tail.length)
    
//     if sub = tail) ;
//       return true
//     }
//     else 
//       return false
      
//fixed
function correctTail(bod, tail){
  
    let sub = bod.substr(bod.length-(tail.length))
     
     if (sub === tail) {
       return true
    } else {
       return false
    }
   }

//    Debug celsius converter
// Your friend is traveling abroad to the United States so he wrote a program to convert fahrenheit to celsius. Unfortunately his code has some bugs.

// Find the errors in the code to get the celsius converter working properly.

// To convert fahrenheit to celsius:

// celsius = (fahrenheit - 32) * (5/9)
// Remember that typically temperatures in the current weather conditions are given in whole numbers. It is possible for temperature sensors to report temperatures with a higher accuracy such as to the nearest tenth. Instrument error though makes this sort of accuracy unreliable for many types of temperature measuring sensors.

//before

// function weatherInfo (temp) {
//    var c : convert(temp)
//    if (c > 0)
//      return (c + " is freezing temperature")
//    else
//      return (c + " is above freezing temperature")
//  }
 
//  function convertToCelsius (temperature) {
//    var celsius = (tempertur) - 32 + (5/9)
//    return temperature
//  }

//after
function weatherInfo (temp) {
   var c = convertToCelsius(temp);
   if (c <= 0)
     return (c + " is freezing temperature");
   else
     return (c + " is above freezing temperature");
 }
 
 function convertToCelsius (temperature) {
   var celsius = (temperature - 32) * (5/9);
   return celsius;
 }
