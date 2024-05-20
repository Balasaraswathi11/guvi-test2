/* Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
   let a = (userInput[0].split(" ").join(''));
   
   
   let s="";
   let t="";
   for(let i=0 ; i<a.length ; i++){
       if(a[i] % 2 === 0){
           s=s+a[i]+ " "
        //   console.log(s)
       }else{
           t=t+a[i]+ " "
        //   console.log(t)
       }
   }
  console.log(s)
  console.log(t)
});*/



// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});



inp.on("line", (data) => {
  userInput.push(data);
});



inp.on("close", () => {
  
//   for (i = 1; i <= a; i++) {
//     var row = [];
//     for (col = 1; col <= i; col++) {
//       row.push(' * ');
//     }
//     console.log(row.join('')); // Join the array elements to form a string
//   }
// });


// for (i = 1; i<=a; i++)
//   {var row =[]
//     for(col=1; col<=i; col++)
//     {row.push('*')}
    
  
//   console.log(row.join(''))}
// });
// inp.on("close", () => {
//   var a = userInput[0];
//   for (i = 1; i <= a; i++) {
//     var row = '';
//     for (col = 1; col <= i; col++) {
//       row += '  *  ';
//     }
//     console.log(row);
//   }
// });
// for(i=9; i<=a;i=i++){console.log(9*i)}
// });
// for (let i = 1; i <= a; i++) {
//   let result = 9 * i;
//   console.log(result);
// }


// var b = a.split(' ').map(Number)
// for(i=1;i<=b[1];i++)
//   console.log(b[0])

// var a= (userInput[0])
// var b=a.split(' ').map(Number)
//  for (i=0;i<b[2];i++)
//    {console.log(a)}
// var a = userInput[0]
// var b= a.split('').map(Number)
// var c=[]
// var d=[]
// for(i=0;i<=b.length;i++)
//   {
// if(b[i]%2==0){c.push(b[i])}
// else{d.push(b[i])}}
// console.log(c.sort().join(' '))
// console.log(d.sort().join(' ').trim())
  
 









});































