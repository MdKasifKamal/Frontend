var btn = document.querySelector("button");
var body = document.querySelector("body");

var arr = ["Hello World!", "Welcome to JavaScript!", "DOM manipulation is fun!", "Have a great day!", "Keep learn ing!", "Coding is awesome!", "You can do it!", "Never give up!", "Believe in yourself!", "The sky's the limit!"];
btn.addEventListener('click', function() {
    var h1 = document.createElement("h1");
    
    var x = Math.random() * 100;
    var y = Math.random() * 100;
    var rot = Math.random() * 360;
    var scl = Math.random() * 3;
    var a = Math.floor(Math.random() * arr.length);
    h1.innerHTML = arr[a];
    h1.style.left = x + '%';
    h1.style.top = y + '%';
    h1.style.rotation = rot + 'deg';
    h1.style.scale = scl;
    h1.style.position = "absolute";
    body.appendChild(h1);
})