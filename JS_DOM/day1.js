 var h1 = document.querySelector("h1");
//h1.style.color = 'red';
h1.addEventListener('click', function() {
  console.log('h1 was clicked!');
})

var inc = document.getElementById('inc');
var a = 0;
inc.addEventListener('click', function() {
  a++
  h1.innerHTML=a;
})
var dec = document.getElementById('dec');
var a = 0;
dec.addEventListener('click', function() {
  a--
  h1.innerHTML=a;
})