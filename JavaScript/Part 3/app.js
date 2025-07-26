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

//replace and repeat method
let msg2 = "IloveCoding";
console.log(msg2.replace("love", "do"));// only first occurence is replaced
console.log(msg2.repeat(3));