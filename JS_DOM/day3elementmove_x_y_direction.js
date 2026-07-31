var btn = document.querySelector("button");
var body = document.querySelector("body");
btn.addEventListener('click', function() {
  var div = document.createElement("div");

  var x = Math.random() * 100;
  var y = Math.random() * 100;
  var c1 = Math.floor(Math.random() * 256);
  var c2 = Math.floor(Math.random() * 256);
  var c3 = Math.floor(Math.random() * 256);
  div.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`;

  div.style.top = y + '%';

  div.style.left = x + '%';
  div.style.width = "100px";
  div.style.height = "100px";
  div.style.position = "absolute";
  body.appendChild(div);
})