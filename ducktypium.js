class Ducktypium {
  constructor(color) {
    this.calibrationSequence = [],
    this.color = color;
    if (this.color != "red" && this.color != "blue" && this.color != "yellow") {
      throw new Error("Color must be red, yellow, or blue!")
    };

    // your code here
  }
  refract(color) {
      if (this.color === color) {
        return this.color
      } else if ((this.color === "blue" && color === "red") || (this.color === "red" && color === "blue")) {
        return "purple"
      } else if ((this.color === "blue" && color === "yellow") || (this.color === "yellow" && color === "blue")) {
        return "green"
      } else if ((this.color === "red" && color === "yellow") || (this.color === "yellow" && color === "red")) {
        return "orange"
      }
  }

  calibrate(array) {
    var a = array.sort();
    for(var i=0; i<a.length; i++) {
      a[i] *= 3;
    }
    this.calibrationSequence = a;
    return this.calibrationSequence;
  }
  // your code here
}

// The following lines of code are not required for the solution, but can be
// used by you to test your solution.
const dt = new Ducktypium('red');

console.log(dt.color); // prints 'red'

console.log(dt.refract('blue')); // prints 'purple'
console.log(dt.refract('red')); // prints 'red'

dt.calibrate([3, 5, 1]);

console.log(dt.calibrationSequence); // prints [3, 9, 15]
