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

//return keyword
function sum(a, b) {
  console.log("hello world");
  console.log("hello world");
  return a + b;
  console.log(sum(1, 2));//it never be executed becoz after return the exectuion stops
}
console.log(sum(1, 2));

//return the sum of numbers from 1 to n
function getSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++){
    sum += i;
  }
  return sum;
}
console.log(getSum(5));

//returns the concatenation of all strings in an array