// let arr = [1, 2, 3, 4, 5, 6, 2, 3]
// let num = 2;

// for (let i = 0; i < arr.length; i++){
//   if (arr[i] == num) {
//     arr.splice(i, 1);
//   }
//   console.log(arr);
// }

// let number = 287152;
// let count = 0;
// let copy = number;
// while (copy > 0) {
//   count++;
//   copy = Math
// }
// console.log(number.length());
// for (let i = 0; i < number.length; i++){
  
// }

//print factorial of a number n
let n = 5;
let fact = 1;
for (let i = 1; i<=n; i++){
  fact = fact * i;
}
console.log(`factorial of ${n} is ${fact}`);

//largest number in an array
let arr = [23, 45, 12, 34, 44];
let largest = 0;
for (let i = 1; i<=arr.length; i++){
  if (largest < arr[i]){
    largest = arr[i];
  }
}
console.log(`largest number is ${largest}`);
