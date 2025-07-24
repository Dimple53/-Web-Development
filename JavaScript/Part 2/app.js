// console.log("Hello world!")
// console.log("Dimple")
// let a = 10;
// let b = 5;
// console.log("sum is :", a+b)

let pencilPrice = 10;
let eraserPrice = 5;
// let output = "The total price is: " + (pencilPrice + eraserPrice) + " Rupees."
let output = `The total price is : ${pencilPrice + eraserPrice} Rupees. `//back ticks
console.log(output)
// console.log("The total price is:", pencilPrice + eraserPrice, "Rupees.")

//Unary operators
let a = 10;
let b = 5;
console.log(a++);//10
console.log(++a);//12

//comaparison operators
let age = 18;
console.log(age > 18);//false

let n = 5;
let str = '5';
console.log(typeof str);
console.log(n==str);//true becoz it ignores the type in equal to operator.
console.log(n === str);//false becoz it compares the type also along with the value in triple equal to operator.

//comaparison for non numbers
let str1 = 'a';
let str2 = 'A';
console.log(str1 > str2);//true here comaparing their unicodes

//if statement
let lightColor = "green";
//Traffic light system
if (lightColor === "red") {
  console.log("Stop! light color is "+ lightColor);
}
if (lightColor === "yellow") {
  console.log("Slow down light color is "+ lightColor);
}
if (lightColor === "green") {
  // console.log("Go light color is " + lightColor);
  console.log(`Go light color is ${lightColor}`);
}
