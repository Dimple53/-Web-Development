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
})

//filter
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 6];
let ans = nums.filter((el) => {
  // return el % 2 == 0;//even -> true, odd-> false
  return el < 5;
})