// It's a well known fact that anything Chuck Norris wants, he gets. As a result Chuck very rarely has to use the word false.

// It is a less well known fact that if something is true, and Chuck doesn't want it to be, Chuck can scare the truth with his massive biceps, and it automatically becomes false.

// Your task is to be more like Chuck (ha! good luck!). You must return false without ever actually using the word false...

function ifChuckSaysSo(){
    return !true
    }

//     Teach snoopy and scooby doo how to bark using object methods. Currently only snoopy can bark and not scooby doo.

// snoopy.bark(); // return "Woof"
// scoobydoo.bark(); // undefined
// Use method prototypes to enable all Dogs to bark.

function Dog (breed) {
    this.breed = breed;
  }
  let snoopy = new Dog("Beagle");
  snoopy.bark = function() {
    return "Woof";
  };
  let scoobydoo = new Dog("Great Dane");
  scoobydoo.bark = function() {
    return "Woof";
  };