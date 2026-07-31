let prompt = require("prompt-sync")();

let a = Number(prompt("Enter First Number:"));
let b = Number(prompt("Enter Second Number:"));
let c = Number(prompt("Enter Third Number:"));
if(a > b && a>c){
  console.log("greater number is a:"+a)
}
else if(b > a && b>c){
  console.log("greater number is b:"+b)
}
else if(c > a && c>b){
  console.log("greater number is c:"+c)
}

else{
  console.log("all numbers are equal")
}
