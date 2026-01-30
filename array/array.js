let mark =[97,82,75,54,46];
console.log(mark);


let heroes =["thor","hulk","ironman","spiderman"];
console.log(heroes);

//----for loop------------
for (let i = 0; i< heroes.length;i++)
{
    console.log(heroes[i]);
}

//------for of loop----
console.log("\n");

for (let el of heroes){
  
    console.log(el.toUpperCase());
}


//---------------practice task-1 --
// --------------
//enter marks with array and find average marks of the entire class.

let marks = [ 85,97,44,37,76,60];
let sum =0;
console.log("\n");

for (let i = 0 ;i < marks.length ; i++)
{
    console.log(marks[i]);
    sum = sum  + marks[i];
}
let avg = sum / marks.length;
console.log(`the marks of a sum is ${sum} \n average is ${avg}`);



//---------------------practicetask-2------------------------------
//enter prices of 5 item using array and all items have offer of 10 % off on them .change the array to store final price after applying offer.

let price=[250,645,300,900,50];

for (let j =0 ; j< price.length;j++){

        let offer= price[j] /10;

        price[j] -= offer;
        console.log(price[j]);
}

