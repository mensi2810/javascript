function countVowels(str) {
     let count = 0;
    for (const char of str) {
       
       

        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {

            count++;
        }
    }
    return count;
};


const countVow=(str) =>{
    let count = 0;
    for (const char of str) {
       
       

        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {

            count++;
        }
    }
    return count;

};


//-----------foreach loop------

let arr =["pune","delhi","mumbai"];

// arr.forEach(function printVal(val){

//     console.log(val);
// });

arr.forEach((val,idx,arr) => {
    console.log(val.toUpperCase(),idx,arr);
});


//-------practice --------
let nums=[2,3,4,5,6];

nums.forEach((num)=>{

        console.log(num* num);//square of number
})