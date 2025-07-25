let number = 8;
if (number % 10 == 0) {
  console.log("good");
} else {
  console.log("bad");
}

//prompts
// let fname = prompt("enter your name: ");
// let age = prompt("enter your age");
// alert(`${fname} is ${age} years old.`);

let str = "apples";
if ((str[0] == 'A' || str[0] == 'a') && (str.length > 5)) {
  console.log("golden string");
} else {
  console.log("not a golden string");
}

//largest of 3 numbers
let a = 4;
let b = 5;
let c = 2;
if (a > b) {
  if (a > c) {
    console.log("a is greater");
  }
  else {
    console.log("c is greater");
  }
}
else {
  if (b > c) {
    console.log("b is greater");
  }
  else {
    console.log("c is greater");
  }
}


//Write a program to check if 2 numbers have the same last digit. Eg: 32 and 47852 have the same last digit i.e. 2
let num1 = 32;
let num2 = 47852;

if ((num1 % 10) == (num2 % 10)) {
  console.log("numbers have the same last digit which is", num1 % 10);
} else {
    console.log("numbers don't have the same last digit");

}
