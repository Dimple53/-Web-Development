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