//forloop
// for (let i = 1; i <= 5; i++){
//   console.log(i);
// }

// for (let i = 10; i >= 1; i--){
//   console.log(i);
// }
// let i = 5;
// console.log(i);

//print odd numbers
// for (let i = 1; i <= 15; i =  i + 2){
//   console.log(i);
// }
// console.log("backwards");

// for (let i = 15; i >= 1; i =  i - 2){
//   console.log(i);
// }

//print all even numbers(2 to 10)
// for (let i = 2; i <= 10; i =  i + 2){
//   console.log(i);
// }

// print the multiplication table for 5
// for (let i = 5; i <= 50; i = i + 5){
//   console.log(i);
// }
// let n = prompt("write your number")
// n = parseInt(n);
// for (let i = n; i <= n*10; i = i + n){
//   console.log(i);
// }


//nested for loop
// for (let i = 1; i <= 4; i++){//outer loop
//   console.log(`outer loop ${i}`);
//   for (let j = 1; j <= 3; j++){//inner loop
//     console.log(j);
//   }
// }

//while loop
// let i = 0;

// while (i <= 20) {
//   console.log(i);
//   i++;
// }


//Favorite Movie
const favMovie = "avatar";
let guess = prompt("guess my favorite movie");
while ((guess != favMovie) && (guess != "quit")) {
  guess = prompt("wrong guess. please try again");
}

if (guess == favMovie) {
  console.log("congrats!!");
} else {
  console.log("you quit")
}