function ab() {
  let a = 10;
  return function() {
    console.log(a);
  };
}
let x = ab();
x(); // Output: 10, because the inner function retains access to the variable 'a' defined in the outer function 'ab' even after 'ab' has finished executing, demonstrating a closure in JavaScript. 