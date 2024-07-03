"use strict";
var TrafficLight;
(function (TrafficLight) {
    TrafficLight["Red"] = "Red";
    TrafficLight["Yellow"] = "Yellow";
    TrafficLight["Green"] = "Green";
})(TrafficLight || (TrafficLight = {}));
console.log(TrafficLight.Red); // Output: Red
console.log(TrafficLight.Yellow); // Output: Yellow
console.log(TrafficLight.Green); // Output: Green
class Robot {
    currentLight;
    lightOrder;
    constructor() {
        this.currentLight = TrafficLight.Red;
        this.lightOrder = [TrafficLight.Red, TrafficLight.Yellow, TrafficLight.Green];
    }
    start() {
        console.log(`Starting with: ${this.currentLight}`);
        setInterval(() => this.changeLight(), 10000);
    }
    changeLight() {
        const currentIndex = this.lightOrder.indexOf(this.currentLight);
        const nextIndex = (currentIndex + 1) % this.lightOrder.length;
        this.currentLight = this.lightOrder[nextIndex];
        console.log(`Changed to: ${this.currentLight}`);
    }
}
const robot = new Robot();
robot.start();
