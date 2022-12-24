// The function is not returning the correct values. Can you figure out why?

// Example (Input --> Output ):

// 3 --> "Earth"


//was missing all breaks
function getPlanetName(id){
    var name;
    switch(id){
      case 1:
        name = 'Mercury'
        break;
      case 2:
        name = 'Venus'
        break;
      case 3:
        name = 'Earth'
        break;
      case 4:
        name = 'Mars'
        break;
      case 5:
        name = 'Jupiter'
        break;
      case 6:
        name = 'Saturn'
        break;
      case 7:
        name = 'Uranus'
        break;
      case 8:
        name = 'Neptune'
    }
    
    return name;
  }
  // Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

  // You need to consider the following ratings:
  
  // Terrible: tip 0%
  // Poor: tip 5%
  // Good: tip 10%
  // Great: tip 15%
  // Excellent: tip 20%
  // The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:
  
  // "Rating not recognised" in Javascript, Python and Ruby...
  // ...or null in Java
  // ...or -1 in C#

  // Because you're a nice person, you always round up the tip, regardless of the service.
  
  function calculateTip(amount, rating) {
    switch (rating.toLowerCase()){
        case 'terrible':
            return Math.round(amount * (0 / 100))
        case 'poor':
            return Math.ceil(amount * (5 / 100))
        case 'good':
            return Math.ceil(amount * (10 / 100))
        case 'great':
            return Math.ceil(amount * (15 / 100))
        case 'excellent':
            return Math.ceil(amount * (20 / 100))
        default:
            return 'Rating not recognised'
    }
  }