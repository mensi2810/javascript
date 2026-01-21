function myfunction(msg, n) {//parameter
    console.log(msg * n);
}
myfunction("javascript", 100);//argument

//function->2 numbers ,sum

function sum(x, y) {
    //local variables->scope
    s = x + y;
    console.log(x);
    return s;

}
let val = sum(3, 4);
console.log(val);
//multiplication function

function mul(a, b) {
    return a * b;
}

let  arrowMul = (a,b) =>{
    console.log(a * b);
};