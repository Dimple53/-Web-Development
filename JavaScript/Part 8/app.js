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

//check if all numbers in our array are  multiples of 10 or not
let num1 = [10, 20, 30, 40];
let ans1 = num1.every((el) => el % 10 == 0);
console.log(ans1);

function getMin(num2) {
  let min = num2.reduce((min, el) => {
    if (min < el) {
      return min;
    } else {
      return el;
    }
  });
  return min;
}
let num2 = [16, 20, 30, 40];
console.log(getMin(num2));

//default  parameters
function sum(a, b=2) {
  return a + b;
}

sum(1, 3);//4
sum(1);//a=1,b=undefined

//spread(array literals)
let arr34 = [1, 2, 3, 4, 5];
let newArr = [...arr34];
console.log(arr34);
console.log(newArr);
newArr.push(6);
console.log(newArr);
console.log(arr34);

let odd = [1, 2, 3, 4, 5];
let even = [2, 4, 6, 8, 10];

let nums1 = [...odd, ...even];//order matters
let nums2 = [...even, ...odd];

//spread(array literals)
const data = {
  email: "ironman@gmail.com",
  password: "abcd",
};

const dataCopy = { ...data, id: 123, country: "India" };

let arr4 = [1, 2, 3, 4, 5];
let obj1 = { ...arr4 };//obj -> key:val
let obj2 = { ..."hello" };

//rest
function sum11(...args) {
  //arguments
  for (let i = 0; i < args.length; i++){
    console.log("you gave us:", args[i]);
  }
}

function min() {
  console.log(arguments);
  console.log(arguments.length);
  arguments.push(1);
}

function min(msg, ...args) {
  console.log(msg);
  return args.reduce((min, el) => {
    if (min > el) {
      return el;
    } else {
      return min;
    }
  });
}

//Destructuring
let names = ["tony", "bruce", "peter", "steve"];
// let winner = names[0];
// let runnerup = names[1];
// let secondRunnerup = names[2];

// let [winner, runnerup, secondRunnerup] = names;
let [winner, runnerup, ...others] = names;

//Destructuring(Objects)
const student = {
  name: "karan",
  age: 14,
  class: 9,
  subjects: ["hindi", "english", "math", "science"],
  username: "karan@123",
  password: "abcde",
  city: "Pune",
};

let { username: user, password: secret, city: place = "Mumbai"} = student;