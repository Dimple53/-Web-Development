let arr = [1, 2, 3];
let total = 0;
const arrayAverage = (arr) => {
  for(let number of arr){
    total += number;
  }
  return total/arr.length;
}
console.log(arrayAverage(arr));


let num = 4;
const isEven = (num) => num%2==0;
console.log(isEven(num));