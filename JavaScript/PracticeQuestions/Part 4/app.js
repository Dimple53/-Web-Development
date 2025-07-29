//delete all occurrences of element ‘num’ in a given array.
let arr = [1, 2, 3, 4, 5, 6, 2, 3]
let num = 2;

for (let i = 0; i < arr.length; i++){
  if (arr[i] == num) {
    arr.splice(i, 1);
  }
  console.log(arr);
}

//find the no of digits in a number.
let number = 287152;
let count = 0;
let copy = number;
while (copy > 0) {
  count++;
  copy = Math.floor(copy / 10);
}
console.log(`count is ${count}`);

//find the sum of digits in a number.
let number1 = 287152;
let sum = 0;
let copy1 = number1;
while (copy1 > 0) {
  digit = copy1 % 10;
  sum+=digit;
  copy1 = Math.floor(copy1 / 10);
}
console.log(`sum is ${sum}`);

//print factorial of a number n
let n = 5;
let fact = 1;
for (let i = 1; i<=n; i++){
  fact = fact * i;
}
console.log(`factorial of ${n} is ${fact}`);

//largest number in an array
let arr1 = [23, 45, 12, 34, 44];
let largest = 0;
for (let i = 1; i<=arr1.length; i++){
  if (largest < arr1[i]){
    largest = arr[i];
  }
}
console.log(`largest number is ${largest}`);
