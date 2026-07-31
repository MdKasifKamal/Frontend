function abcd(a,b,...val){
  console.log(a,b, val);
}
abcd(1,2,3,3,4,5,6,7,8,9);  // rest operator is used to collect the remaining arguments into an array called 'val'