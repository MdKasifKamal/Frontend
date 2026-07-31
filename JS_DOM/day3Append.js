var h1 = document.createElement("h1");
h1.innerHTML= 'Hello World!';
var body = document.querySelector("body");
body.appendChild(h1);
var button = document.createElement("button");
button.innerHTML = "download";
body.appendChild(button);
button.style.position = "absolute";
button.style.color = "red";