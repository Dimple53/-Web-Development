//selecting element by id
console.log(document.getElementById("mainImg"));

//selecting element by class name
let smallImages = document.getElementsByClassName("oldImg");

for (let i = 0; i < smallImages.length; i++){
  console.dir(smallImages[i]);
}

//selecting elements by tag name
// document.getElementsByTagName("P");//on console

//query selectors
console.dir(document.querySelector("h1"));
console.dir(document.querySelectorAll("p"));
console.dir(document.querySelector("div a"));

//selecting content in objects
//innerText, textContent, innerHtml