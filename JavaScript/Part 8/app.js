//forEach method
// let arr = [1, 2, 3, 4, 5];
// arr.forEach((el) => {
//   console.log(el);
// });

// arr.forEach(function (el) {
//   console.log(el);
// });

// let print = function (el) {
//   console.log(el);
// }
// arr.forEach(print);

//forEach for objects
let array = [
  {
  name: "aman",
  marks: 95,
  },
  {
  name: "anjali",
  marks: 85.9,
  },
  {
  name: "shikha",
  marks: 93,
  },
];

array.forEach((student) => {
  console.log(student.marks);
});

//map and filter
let num = [1, 2, 3, 4, 5];

let double = num.map((el) => {
  return el * 2;
});
console.log(double);//new array


let students = [
  {
  name: "aman",
  marks: 95,
  },
  {
  name: "anjali",
  marks: 85.9,
  },
  {
  name: "shikha",
  marks: 93,
  },
];

let gpa = students.map((el) => {
  return el.marks / 10;
});

//filter
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 6];
let ans = nums.filter((el) => {
  // return el % 2 == 0;//even -> true, odd-> false
  return el < 5;
});

//every and some method
[2, 2, 4, 6].every((el) => el % 2 == 0);//true
[2, 2, 4, 9].every((el) => el % 2 == 0);//false directly copy paste in the console

[1, 2, 3, 4].some((el) => el % 2 == 0);//true
[1, 3].some((el) => el % 2 == 0);//false

//reduce method
let number = [1, 2, 3, 4];
let finalVal = number.reduce((res, el) => {
  console.log("res: ", res);
  return res + el;
});
console.log(finalVal);

//maximum in array
let arr = [1, 2, 3, 4, 5, 6, 7, 15, 6];
let max = arr.reduce((max, el) => {
  if (max < el) {
    return el;
  } else {
    return max;
  }
});
console.log(max);