// NodeList and HTMLCollection

let heading = document.getElementById("title");

heading.style.backgroundColor = "purple";
heading.style.color = "white";
heading.style.padding = "15px";
heading.style.borderRadius = "10px";
heading.style.textAlign = "center";

let para = document.getElementById("firstPara");

document.write("<br>");
document.write(para.innerText); // just prints the content of the parent element
document.write("<br>");
document.write(para.textContent); // also prints elements that has display none
document.write("<br>");
console.log(para.innerHTML); // prints the content of the parent element along with the child elements including the tags in the cosole but...
document.write(para.innerHTML); // prints the content of the parent element in the browser but not the child elements and tags
document.write("<br>");
document.write("<br>");

document.write(document.getElementById("title").id);
document.write("<br>");
document.write(document.getElementById("title").class); // wrong syntax
document.write("<br>");
document.write(document.getElementById("title").className);
document.write("<br>");
document.write("<br>");

document.write(document.getElementById("title").getAttribute("class"));
document.write("<br>");
document.write("<br>");

document.getElementById("firstPara").setAttribute("class", "1stPara");

document.write(document.querySelector("#title"));
console.log(document.querySelector("#title"));
document.write("<br>");
document.write(document.querySelector(".heading"));
console.log(document.querySelector(".heading"));
document.write("<br>");
document.write(document.querySelector("#firstPara"));
console.log(document.querySelector("#firstPara"));
document.write("<br>");

document.write(document.querySelector("input[type='text']"));
console.log(document.querySelector("input[type='text']"));
document.write("<br>");
document.write("<br>");

let li = document.querySelector("li"); // returns the first li element

li.style.backgroundColor = "skyblue";
li.style.color = "white";
li.style.padding = "10px 50px";
li.style.borderRadius = "10px";
li.style.textAlign = "center";
li.style.display = "inline-block";
li.style.margin = "5px";
li.innerText = "Five";

document.querySelector("li:nth-child(n)"); // returns the nth list item

let tempListLi = document.querySelectorAll("li"); // returns a NodeList that allow foreach loop
tempListLi[1].style.color = "purple";

let tempH1 = document.querySelectorAll("h1"); // returns a NodeList that allow foreach loop
tempH1[0].style.backgroundColor = "skyblue";

tempListLi.forEach((li) => {
  li.style.color = "white";
});

tempH1.forEach((h) => {
  //   h.style.color = "red";
  h.style.color = "white";
});

let tempListClass = document.getElementsByClassName("list-item"); // returns a HTMLCollection that does not allow foreach loop

// tempListClass.forEach((li) => {
//   li.style.color = "green";
// }); // will not work because its a HTMLCollection

let myConvertedArray = Array.from(tempListClass);
myConvertedArray.forEach((li) => {
  li.style.color = "brown";
}); // now its working because it is HTMLCollection no more instead it is array that allows foreach loop
