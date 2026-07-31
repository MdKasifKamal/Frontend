var img = document.querySelector("img");
var love = document.querySelector("#love");

img.addEventListener("dblclick", function() {

  love.style.opacity = 1;
love.style.transform= "translate(-50%,-50%)  scale(2) rotate(0deg) ";
setTimeout(function() {
 
  love.style.transform= "translate(-50%,-350%) rotate(60deg) scale(2)";
}, 800)

setTimeout(function() {
 
  love.style.opacity = 0;
}, 1000)

setTimeout(function() {
 
  love.style.transform= "translate(-50%,-50%) rotate(60deg) scale(0)";
}, 1200)

})

