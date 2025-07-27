//trim and toUpperCase, toLowerCase Methods
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

let name = "IloveCodingsoomuch";
console.log(name.slice(4, 9));//eCodi -- index 9 excluded
//Methods with Arguments  - indexOf
console.log(name.indexOf("odi"));//6
console.log(name.replace("love", "do"));

//Array 
let students = ["dimple", "addy", "twinkle"];
console.log(students);
console.log(typeof (students));

//how to create arrays
let marks = [33, 445, 55, 566];
let names = ["dimple", "addy", "twinkle"];
let info = ["dimple", 23, 5.6];//mixed array

//empty array
let newArr = [];
console.log(newArr.length);
console.log(info);
console.log(info[0][2]);//m--- [0]-index, [2]- you want to access 3rd character
console.log([].length);

//arrays are mutable
let fruits = ["apple", "mango", "litchi"];
fruits[0] = "banana";
console.log(fruits);
fruits[10] = "papaya";
console.log(fruits);

//array methods
let cars = ["audi", "bmw", "xuv", "maruti"];
//push - add to end
cars.push("toyato");
console.log(cars);
cars.push("ferrari");
console.log(cars);
//pop - delete element from end and returns it
cars.pop();
console.log(cars);
//unshift - add to start
cars.unshift("ferrari");
console.log(cars);
//shift - delete from start and returns it
de = cars.shift();
console.log(cars);
console.log(de);
//real example that you want your followers and blocked user
let followers = ["a", "b", "c"];
let blocked = followers.shift();
console.log(followers);
console.log(blocked);

//Practice question - start:["jan", "jul", "mar", "aug"]--->final:["jul", "jun", "mar", "aug"]
let months = ["jan", "jul", "mar", "aug"];
console.log(months );
months.shift();//delete -jan
months .shift();//delete -jul
months.unshift("jun");//add - jun
months .unshift("jul");//add - jul
console.log(months);

//indexOf and includes method
let months1 = ["jan", "jul", "mar", "aug", "apr"];
console.log(months1.indexOf("apr"));//4
console.log(months1.indexOf("sep"));//-1 becoz not exist
console.log(months1.includes("apr"));//true becoz it exists
console.log(months1.includes("sep"));//false becoz not exist

//concatenation and reverse
let primary = ["red", "yellow", "blue"];
let secondary = ["orange", "green", "violet", "black", "pink"];
console.log(primary.concat(secondary));//this is simply new array
console.log(primary);//it is same as before
console.log(secondary.concat(primary));//firstly secondary elements comes and then primary
//reverse
console.log(primary.reverse());
console.log(primary);//so it changes in the original

//slice in arrays - copies a portion of an array
console.log(secondary.slice());
console.log(secondary.slice(1));
console.log(secondary.slice(1,3));
console.log(secondary.slice(0, 4));//4 excluded
console.log(secondary.slice(5));
console.log(secondary.slice(4));
console.log(secondary.slice(-1));
console.log(secondary.slice(-2));

//splice in arrays - splice(start, deleteCount, item0...itemN)
const myFish = ["parrot", "anemone", "blue", "trumpet", "sturgeon"];
console.log(myFish);
console.log(myFish.splice(2));
console.log(myFish);
console.log(myFish.splice(0, 1, "lily", "cosmo"));
console.log(myFish);

//sort in arrays
console.log(myFish.sort());

//Practice question
let months2 = ["jan", "jul", "mar", "aug"];
console.log(months2.splice(0, 2, "jul", "jun"))
console.log(months2);

let arr = ["C", "C++", "html", "JavaScript", "Python", "Java", "C#", "sql"]
console.log(arr.reverse().indexOf("JavaScript"));//4
