// These lines of code take in the argument from the command line
const argumentValue = process.argv[2];
const treeLifeStatus = Number(argumentValue);

if (argumentValue === "0") {
  console.log("alive")
} else {
  console.log("other")
}
