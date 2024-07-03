enum TrafficLight {
    Red = "Red",
    Yellow = "Yellow",
    Green = "Green"
}

console.log(TrafficLight.Red);    // Output: Red
console.log(TrafficLight.Yellow); // Output: Yellow
console.log(TrafficLight.Green);  // Output: Green

class Robot {
    private currentLight: TrafficLight;
    private lightOrder: TrafficLight[];

    constructor() {
        this.currentLight = TrafficLight.Red;
        this.lightOrder = [TrafficLight.Red, TrafficLight.Yellow, TrafficLight.Green];
    }

    public start() {
        console.log(`Starting with: ${this.currentLight}`);
        setInterval(() => this.changeLight(), 10000);
    }

    private changeLight() {
        const currentIndex = this.lightOrder.indexOf(this.currentLight);
        const nextIndex = (currentIndex + 1) % this.lightOrder.length;
        this.currentLight = this.lightOrder[nextIndex];
        console.log(`Changed to: ${this.currentLight}`);
    }
}

const robot = new Robot();
robot.start();
