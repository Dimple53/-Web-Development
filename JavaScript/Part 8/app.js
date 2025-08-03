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
