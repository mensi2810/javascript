/*let nums=[67,53,39];

let newArr=nums.map((val)=>{
  
    return val*2;
});

console.log(newArr);

let calcSquare=(num)=>{
    console.log(num*num);
};*/

//---------filter array-------

let arr=[1,2,3,4,5];

let evenArr=arr.filter((val)=>{
    return val > 3;
});
console.log(evenArr);

//----reduce method--
let array=[1,2,3,4,5];


const output=array.reduce((res,curr)=>{
    return res+ curr;
});
console.log(output);//15

//-----------largest value print--------

let array1=[1,2,3,4,5];


const result =array1.reduce((res,curr)=>{
    return res >curr ? res :curr;
});
console.log(result);

//------practice task-1----------------
let marks=[97,64,32,73,82,99,96];
       
const res=marks.filter((val)=>{
     return val > 90;
});
console.log(res);

//-----------practice task 2-----------
let n= prompt("enter number");
let a=[];

for (let i=1; i<=n ;i++)
{
    a[i-1]=i;//1,2,3 print value
}
console.log(a);
//--sum of array--------
const sum= a.reduce((prev,curr)=>{
    return prev+ curr;
});

console.log("sum is",sum);
//-----------factorail ----------
const fact= a.reduce((prev,curr)=>{
    return prev *  curr;
});

console.log("factorail is:",fact);
