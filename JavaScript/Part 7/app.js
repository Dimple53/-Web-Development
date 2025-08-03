//this keyword
const student = {
  name: "Twinkle",
  age: 22,
  eng: 95,
  math: 93,
  phy: 97,
  getAvg() {
    console.log(this);//here this means the student object
    let avg = (this.eng + this.math + this.phy) / 3;
    console.log(`${this.name} got avg marks= ${avg}`);
  }
}
console.log(student.getAvg());

function getAvg() {
  console.log(this);//by default value of this keyword is window oject when we defining function in general cases
}

//try & catch
// let a = 5;
try {
  console.log(a);
} catch {
  console.log("caught an error... a is not defined");
}