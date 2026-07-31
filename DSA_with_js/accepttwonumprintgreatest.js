let prompt = require("prompt-sync")();

let num1 = Number(prompt("Enter First Number:"));
let num2 = Number(prompt("Enter Second Number:"));

if(num1 > num2){
  console.log("greater number is num1:"+num1)
}
else if(num2 > num1){
  console.log("greater number is num2:"+num2)
}

else{
  console.log("both numbers are equal")
}
