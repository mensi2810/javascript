//----practice task 1-----------

let h2= document.querySelector("h2");
console.dir(h2.innerText);

h2.innerText= h2.innerText + " from Apna college Student";//concate string


//----practice task 2-----------

let divs= document.querySelectorAll(".box");
console.log(divs);
let idx=1;
for (div of divs)
{
   div.innerText=`new unique value ${idx}`;
   idx++;
}
// divs[0].innerText="new unique value 1";
// divs[1].innerText="new unique value 2";


//-----------------Attributes-----------
//1.getattributes

let mydiv=document.querySelector("div");
console.log(mydiv);


let val=div.getAttribute("id");
console.log(val);

let parah =document.querySelector("p");
console.log(parah.getAttribute("class"));

//2.set attributes

let para =document.querySelector("p");
console.log(para.setAttribute("class","new class")); 

let div2 = document.querySelector("div");

div2.style.backgroundColor ="green";
div2.style.fontSize="20px";


//------insert element----

let newbtn = document.createElement("button");
console.log(newbtn);

newbtn.innerText = "click me";

//1.node.append method
//add at the end of node

let div1= document.querySelector("div");
//div.append(newbtn);

//2.  node.prepend method
//add at the start of node(inside)

//div.prepend(newbtn);

//3. node.before method
//add before the node (outside)

div.before(newbtn);

//4. node.after method
//add after the node (outside)

//para.after(newbtn);


//----------delete element---------

//1. node.remove method
//remove the node itself

let par1= document.querySelector("p");
//par1.remove();

//------------practice task 3-------------

let button = document.createElement("button");
button.innerText="Click me";

button.style.backgroundColor="red";
button.style.color="white";

document.querySelector("body").prepend(button);


//------------practice task 4-------------
//let para=document.createElement("p");
para.classList.add("newclass");
