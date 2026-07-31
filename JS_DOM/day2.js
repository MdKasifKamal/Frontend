var bulb = document.getElementById("bulb");
var btn = document.querySelector("button");

var isOn = 0;

btn.addEventListener('click', function() {
  if (isOn === 0) {
    bulb.style.backgroundColor = 'yellow';
    isOn = 1;
  }
  else {
    bulb.style.backgroundColor = 'black';
    isOn = 0;
  }
})