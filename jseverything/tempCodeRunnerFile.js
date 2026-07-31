function ab() {
  let a = 10;
  return function() {
    console.log(a);
  }
}
let x = ab();
x(); // Output: 10