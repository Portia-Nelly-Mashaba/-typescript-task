"use strict";
var TrafficLight;
(function (TrafficLight) {
    TrafficLight[TrafficLight["Red"] = 0] = "Red";
    TrafficLight[TrafficLight["Yellow"] = 1] = "Yellow";
    TrafficLight[TrafficLight["Green"] = 2] = "Green";
})(TrafficLight || (TrafficLight = {}));
let currentColor = TrafficLight.Red;
function changeColor() {
    switch (currentColor) {
        case TrafficLight.Red:
            currentColor = TrafficLight.Yellow;
            break;
        case TrafficLight.Yellow:
            currentColor = TrafficLight.Green;
            break;
        case TrafficLight.Green:
            currentColor = TrafficLight.Red;
            break;
    }
    updateLabel();
}
function updateLabel() {
    const label = document.getElementById('traffic-light-label');
    label.innerText = TrafficLight[currentColor];
}
// Start changing colors every 10 seconds
setInterval(() => {
    changeColor();
}, 10000); // 10000 milliseconds = 10 seconds
