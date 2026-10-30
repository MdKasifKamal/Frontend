var chutki = document.querySelector('img');
var msg = document.querySelector('h2 span');
var body = document.body;

chutki.addEventListener('mouseenter', function() {
  msg.innerHTML = "chutki se dur jao";
  body.style.backgroundColor = "red";
})
chutki.addEventListener('mouseleave', function() {
  msg.innerHTML = "chutki ke pass jao";
  body.style.backgroundColor = "white";
})