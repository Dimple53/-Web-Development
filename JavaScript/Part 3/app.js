let msg = "    hello    ";
// let newMsg = msg.trim();
// console.log("after trim: ", newMsg);
// newMsg = newMsg.toUpperCase();
// console.log("after uppercase: ", newMsg);

//Method chaining
let newMsg = msg.trim().toUpperCase();
console.log(newMsg);

//slice method
let msg1 = "college";
// console.log(msg1.slice(3))//lege
console.log(msg1.slice(-2))//7-2=5