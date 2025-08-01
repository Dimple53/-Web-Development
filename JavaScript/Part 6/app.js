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
let str = ["hi", "hello", "bye", "!"];
function concat(str) {
  let result = "";
  for (let i = 0; i < str.length; i++){
    result += str[i];
  }
  return result;
}
console.log(concat(str));//hihellobye!

//function scope
let sum1 = 45;//Global Scope

function calSum(a, b) {
  // let sum1 = a + b;//Functions Scope not accessible outside the function so it is more specific 
  console.log(sum1);//if it has no fxn scope variable then it uses global scope variable becoz this variable use anywhere
}

calSum(1, 3);
console.log(sum1);//here it prints the global scope variable

//block scope
let age1 = 24;
if (age1 >= 18) {
  let strs = "adult";
  console.log(strs);
}
// console.log(strs);//can't access outside the block

//lexical scope
function outerFunc() {
  let x = 5;
  let y = 8;
  function innerFunc() {//fxn scope so this can use only inside the outer fxn not outside
    let a = 10;//not accessible outside this inner fxn
    console.log(x);//outer fxn variable can accessible inside the fxns
    console.log(y);
  }
  // let x = 5;you can define as well called hoisting concept
  // let y = 8;
  // console.log(a);//not accessible outside this inner fxn
  innerFunc();//
}

//practice question
let greet = "hello";//global scope

function changeGreet() {//fxn scope
  let greet = "namaste";
  console.log("changeGreet: ",greet);
  function innerGreet() {//lexical scope
    console.log("innerGreet: ", greet);
  }
  innerGreet();
}
console.log(greet);//here global printed
changeGreet();