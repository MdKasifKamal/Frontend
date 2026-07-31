let t = 0;
function add(num) {
  let nt = t;
  nt += num;
}
add(5);
console.log(t); // Output: 0, because the variable 't' is not modified inside the function 'add' due to the use of a local variable 'nt' which does not affect the global variable 't'.