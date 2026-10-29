let count = 1;
const id = setInterval(() => {
  console.log("Count:", count);
  count++;
}, 1000);

setTimeout(() => {
  clearInterval(id);
  console.log("Interval stopped!");
}, 5000);