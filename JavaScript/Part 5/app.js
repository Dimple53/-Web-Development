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
