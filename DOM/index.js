console.log("hello");

//console.dir(document.body);
//console.log(document.head);

let heading=document.getElementById("heading");//id na base pr
console.dir(heading);



let button=document.getElementById("myid");
console.dir(button);

//-----class name access-----------

let headings=document.getElementsByClassName("heading");

console.dir(headings);
console.log(headings);

//-------tag access --------------

let parah= document.getElementsByTagName("p");
console.dir(parah);



//------------query selector--------

let ele = document.querySelector("p");
console.dir(ele);    //1 element return tag mate


let all = document.querySelectorAll("p");
console.dir(all);// all element 


let elem = document.querySelector(".heading");
console.dir(elem);    //1 element return class mate


//--all id mate query selector not allowed

let buttn = document.querySelector("#myid");
console.dir(buttn);    //1 element return

//---------property---

//1.tagName:
buttn.tagName //output:BUTTON

//2.innerText:

let div = document.querySelector("div");
console.dir(div);//div.innerText


//3.div.innerHTML

//4.textContent

//div.innerText="hello world";

//heading.textContent



