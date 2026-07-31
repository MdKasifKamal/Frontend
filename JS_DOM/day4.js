var btn = document.querySelector("button");
var h1 = document.querySelector("h1");

btn.addEventListener('click', function() {
  h1.innerHTML= 'changinging User ...';
  setTimeout(function() {
    console.log("Hello World!");
    h1.innerHTML= 'Hello Kasif';
  },2000)})