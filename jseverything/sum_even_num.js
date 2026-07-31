let sum=0;
let i;
for(i=1; i<=10; i++){
  if(i%2===0){
    sum+=i;
    console.log(i)
  }
}
console.log("Total sum of even numbers is " + sum)