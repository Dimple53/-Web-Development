//this keyword
const student = {
  name: "Twinkle",
  age: 22,
  eng: 95,
  math: 93,
  phy: 97,
  getAvg() {
    console.log(this);//here this means the student object
    let avg = (this.eng + this.math + this.phy) / 3;
    console.log(`${this.name} got avg marks= ${avg}`);
  }
}
console.log(student.getAvg());

function getAvg() {
  console.log(this);//by default value of this keyword is window oject when we defining function in general cases
}

//try & catch
// let a = 5;
try {
  console.log(a);
} catch {
  console.log("caught an error... a is not defined");
}

//arrow functions
const sum = (a, b) => {
  console.log(a + b);
}

const cube = (n) => {
  return n * n * n;
}

const pow = (a,b) => {
  return a ** b;
}

//implicit return in arrow funcions
const mul = (a,b) =>  a * b;

//set timeout
// console.log("Hi there!");

// setTimeout(() => {
//   console.log("JavaScript");
// }, 4000);//javascript will print after 4s
// console.log("Welcome to");

//set interval
// let id = setInterval(() => {
//   console.log("JS");
// }, 2000);//javascript will print after 4s
// console.log(id);

// let id2 = setInterval(() => {
//   console.log("Hello world");
// }, 2000);//javascript will print after 4s
// console.log(id2);

//this with arrow functions
const students = {
  name: "aman",
  marks: 95,
  prop: this,//global scope
  getName: function () {
    console.log(this);
    return this.name;
  },
  getMarks: () => {
    console.log(this);//parent's scope ->  window
    return this.marks;
  },
  getInfo1: function () {
    setTimeout(() => {
      console.log(this);//student
    }, 2000);
  },
  getInfo2: function () {
    setTimeout(function () {
      console.log(this);//window
    }, 2000);
  },
};

//prints "Hello World" 5 times at intervals of 2s each
let id = setInterval(() => {
  console.log("Hello World");
}, 2000);

setTimeout(() => {
  clearInterval(id);
  console.log("clear interval ran");
}, 10000);