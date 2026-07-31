var btn = document.querySelector("button");
var box = document.getElementById("box");
btn.addEventListener('click', function(){
var arr = ['Kasif', 'Sami', 'Shahzaib', 'shayan',  'Ahsan', 'Fahad', 'Zain'];
var a = Math.floor(Math.random()*arr.length);
box.innerHTML = arr[a];})
