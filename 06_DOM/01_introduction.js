// DOM Introduction

console.log(window); // expand to view document

console.log(window.document); // direct expand document

console.log(document); // it also expand document directly

console.dir(document); // detailed document

console.log(document.baseURI); // prints the document URL

console.log(document.links); // print all the links present on the document

console.log(document.links[2]); // print second link

console.log(document.getElementById("title"));

document.getElementById("title").innerHTML = "DOM Manipulation";