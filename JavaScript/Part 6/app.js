//functions
function hello() {
  console.log("hello");
}
hello();

function printName() {
  console.log("dimple gautam");
}
printName()

//create a func to roll a dice(1 to 6)
function rollDice(){
  let rand = Math.floor(Math.random() * 6) + 1;
  console.log(rand);
}
rollDice();

//functions with arguments
function printInfo(name, age) {
  console.log(`${name}'s age is ${age}.`);
}
printInfo("rajat", 19);
printInfo("aman", 29);
printInfo("karan");
printInfo(14);