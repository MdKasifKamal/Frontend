let prompt = require("prompt-sync")();

let year = Number(prompt("Enter First Number:"));
if(year%4 === 0 && year%100 !==0 || year%400 === 0 ) {
  console.log("The year is a leap year");
}
else{
  console.log("The year is not a leap year");
}5