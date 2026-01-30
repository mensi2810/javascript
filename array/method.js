//----------array method----------------

//------------push method-------
//1. push(): add to end
//----pop method---------------
 //2.  pop()
 // delete from end & return

//-------------push---------
 let food =["litchi","apple","tomato","potato"];

food.push("chips","pizza");//push
console.log(food);
food.pop();

console.log(food);
console.log(food.toString());//convert to array to string

//------concat method-------

let marvel = ["thor","spiderman","hulk","ironman"];
let dc =["superman","batman","robbin"];

let hero =marvel.concat(dc);
console.log(hero);

//-------unshift method ---
//same as push method add at start

marvel.unshift("antman");

//---shift method---
//delete at start & return

marvel.shift();


//-----slice-----
//return piece of array

console.log(marvel.slice(0,3));


//------splice()-------
//change original array(add,remove,replace)

marvel.splice(0,1,"shaktiman");
//splice(indexno,delete count ,repalce name)




//------------------------practice task -1------
//create array companies and remove first company from array,
//2.remove uber & add ola in its place,add amazon at the end


let company =["bloomberg","microsoft","uber","google","ibm","netflix"];

console.log(company);

company.shift();

company.splice(1,1,"ola");

company.push("amazon");