let arr = [7, 9, 0, -2];
let n = 3;
console.log(arr.slice(0, n));
console.log(arr.slice(1));
console.log(arr.slice(arr.length-n));

// let str = prompt("please enter a string");
// if (str.length == 0) {
//   console.log("string is empty");
// } else {
//   console.log("string is not empty");
// }

let str1 = "CoLlEgE";
let idx = 0;
if (str1[idx] == str1[idx].toLowerCase()) {
  console.log("character is lowercase");
} else {
  console.log("character is not lowercase");
}

// let str3 = prompt("please enter a string");
// console.log(`original string=${str3}`);
// console.log(`string without spaces=${str3.trim()}`);
let arr1 = ["hello", 'a', 23, 64, 99, -6];
let item = 64;
if (arr1.indexOf(item) != -1) {
  console.log("element  exists in array");
} else {
  console.log("element doesn't exist in array");
}