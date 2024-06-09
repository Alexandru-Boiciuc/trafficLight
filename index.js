let array = ["red", "yellow", "green"];
let currentColor = 0;
function trafficLight() {
      currentColor = (currentColor + 1) % array.length;
      document.getElementById("colorButton").style.backgroundColor = array[currentColor];
}
setInterval(trafficLight, 10000);

