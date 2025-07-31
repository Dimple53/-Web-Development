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
printInfo(14);//14's age is undefined.

//function that give us the average of 3 numbers
function calcAvg(a, b, c){
  let avg = (a + b + c) / 3;
  console.log("Average: ",avg);
}
calcAvg(2, 4, 6);

//function that prints the multiplication table of a number.
function printTable(n) {
  for (let i = n; i <= n * 10; i += n){
    console.log(i);
  }
}
printTable(5)