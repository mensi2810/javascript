//---------practice task-1--------
//print even number-----------------------

// let n = prompt("enter number");
// for(let i=0;i<=n;i++)
// {
//     if(i%2==0)
//     {
//         console.log(i);
//     }
// }

//-----------practice task  que 2-----------------
//-----create game start with random number and check this value are equal or not--------

  let gameNum = 25;

  let userNum =prompt("guess the game number");
  console.log("user number is",userNum);

  while(userNum != gameNum){
       userNum = prompt("enter second time please");  

  }
  console.log("congratulation");



