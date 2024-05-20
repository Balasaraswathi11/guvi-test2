// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  var  a=Number(userInput[0])
  var b= Number(userInput[1])
  var c=Number(userInput[2])
  var d=(a*b*c/100)
  var e=d.toFixed(2)
  console.log(e)


   
});
