//creating object literals
const student = {
  name: "twinkle",
  age: 21,
  marks: 94.4
};
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