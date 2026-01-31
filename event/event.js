let btn1= document.querySelector("#btn1");


// btn1.onclick = (e) => {
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX , e.clientY);
//     console.log("button clicked");
//     let a=25;
//     a++;
//     console.log(a);
// };
let div = document.querySelector("div");
div.onmouseover = () => {
    console.log("mouse over the box");
};

//---event listener method----------
//1.addeventlistener

btn1.addEventListener("click" , () => {
    console.log("button clicked "); 
});

btn1.addEventListener("dblclick" , () => {
    console.log("button double clicked "); 
});
const handler3=() => {
    console.log("button 1 was click handler 3 "); 
};
btn1.addEventListener("click" , handler3 );
//2.removeeventlistener

 btn1.removeEventListener("click" , () => {
     console.log("button clicked --handler ",handler3); 
 });

 //------------practice task---------------

 //create a toggle button that changes the screen to dark mode and light mode on when click again.

 let mode =document.querySelector("#mode");
 let body =document.querySelector("body");

 let currmode ="light";//light hoi to dark



 mode .addEventListener("click" , () => {
       if(currmode === "light"){
        currmode ="dark";
       body.classList.add("dark");
       body.classList.remove("light");
       }
       else{
        currmode ="light";
       body.classList.add("light");
         body.classList.remove("dark");
       }
       console.log("current mode is " , currmode);  
 });