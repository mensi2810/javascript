//-------string-----------

let str="mensi lapani";

console.log(str[2]);//output: n

//-------template literals----------

let sentence =  `this is a template  ${1+2+3}`;
console.log (sentence);

//-----------string method--------------


//1.str.touppercase()
//2. str.toLowerCase()
//3. str.trim() //remove white space

 let news= str.toUpperCase();
 console.log(news);

    console.log(str.trim());

//-----------------------4.str.slice()
 console.log(str.slice(0,5));//output: mensi

 //----------------5. str.concat()
  let str1="hello ";

//  let res= str1 + str;
  let res1= str1.concat(str);
  console.log(res1);//output: hello mensi lapani


  //------------------6. str.replace()

  console.log(str.replace("lapani",'hello'));


  //-----------------7/str.chartAt()

  console.log(str.charAt(4));//output: i


  //-------------practice task------------

    //enter prompt fullname .start with @ and end with length of string.

  let fullname=prompt("enter your full name:");

  let username="@" + fullname + fullname.length;

  console.log(username);