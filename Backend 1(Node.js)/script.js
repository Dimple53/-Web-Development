//  for (let i = 1; i <= 5; i++){
//   console.log(i);
// }

// console.log(process.argv);

let args = process.argv;
 for (let i = 2; i <= args.length; i++){
  console.log("hello to ",  args[i]);
}
