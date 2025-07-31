//creating object literals
const student = {
  name: "twinkle",
  age: 21,
  marks: 94.4,
  city: "Chandigarh"
};
console.log(student);

//add/update and delete values
console.log(student.city);
student.city = "Mumbai";//update existing value
console.log(student.city);
console.log(student);
student.gender = "female";//add
console.log(student);
student.marks = "A";
console.log(student);
console.log(delete student.age);
console.log(student);

const item = {
  price: 100.99,
  discount: 50,
  colors: ["red", "pink"]
};
console.log(item);

//creating a post
const post = {
  username: "@abc1234",
  content: "This is my #firstPost",
  likes: 150,
  reposts: 5,
  tags: ["@xyz", "@delta"]
};
console.log(post);

//get values
console.log(post["content"]);
console.log(post["likes"]);
console.log(post.content);
console.log(post.tags[0]);

let prop = "reposts";
console.log(post[prop]);
console.log(post.prop);//undefined becoz we can't access through variables like prop so we need square bracket for this

//conversion in get values
const obj = {
  1: "a",
  2: "b",
  true: "c",
  null: "d",
  undefined: "e",
};
console.log(obj[1]);
// console.log(obj.1);//can't change directly to string use square bracket
console.log(obj.null);
console.log(obj.undefined);
console.log(obj.true);

//object of objects(nested objects)
const classInfo = {
  dimple: {
    grade: "O",
    city: "Chandigarh"
  },
  addy: {
    grade: "A",
    city: "Delhi"
  },
  twinkle: {
    grade: "A+",
    city: "Pune"
  }
};
console.log(classInfo);
console.log(classInfo.dimple);
console.log(classInfo.dimple.city);
classInfo.dimple.city = "Mumbai";
console.log(classInfo.dimple);

//array of objects
const classInfo1 = [
  {
    name: "dimple",
    grade: "O",
    city: "Chandigarh"
  },
  {
    name: "addy",
    grade: "A",
    city: "Delhi"
  },
  {
    name: "twinkle",
    grade: "A+",
    city: "Pune"
  }
];
console.log(classInfo1);
console.log(classInfo1[0]);
console.log(classInfo1[1]);
console.log(classInfo1[1].name);
classInfo1[1].city = "Mumbai";
console.log(classInfo1[1]);
classInfo1[1].gender = "Male";
console.log(classInfo1[1]);

//math object
console.log(Math.abs(-15));
console.log(Math.pow(2, 4));
console.log(Math.floor(5.555559));
console.log(Math.floor(7.999999999));
console.log(Math.floor(-5.5));//nearest smallest round off integer value
console.log(Math.ceil(5.5));
console.log(Math.ceil(5.0000000001));
console.log(Math.ceil(-5.5));//nearest largest value
console.log(Math.random());

//random integers
//from 1 to 10
let random = Math.floor(Math.random() * 10) + 1;
console.log(random);

//guessing game
// const max = prompt("enter the max number");
// console.log(`Your maximum number was : ${ max }`);

// const random = Math.floor(Math.random() * max) + 1;

// let guess = prompt("guess the number");

// while (true) {
//   if (guess == "quit") {
//     console.log("user quit");
//     break;
//   }
//   if (guess == random) {
//     console.log("you are right! congrats!! random number was", random);
//     break;
//   }else if(guess<random){
//     guess = prompt("hnt: your guess was too small. please try again");
//   }
//   else {
//     guess = prompt("your guess was too large. please try again");
//   }
// }