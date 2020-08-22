class Materializer {
  constructor(targetName) {
    this.target = targetName,
    this.activated = false
  }
  activate() {
    return this.activated = true
  }

  materialize() {
    if (this.activated === true) {
      return this.target
    } else {return undefined}
  }
}
  // your code here


// The following lines of code are not required for the solution, but can be
// used by you to test your solution.
const m = new Materializer('Gene');
console.log(m.activated); // would print "false"

m.activate();
console.log(m.activated); // would print "true"

console.log(m.materialize()); // would print "Kevin"
