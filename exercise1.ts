enum TrafficLight {
    Red,
    Yellow,
    Green
}

let currentColor: TrafficLight = TrafficLight.Red;

function changeColor(): void {
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

function updateLabel(): void {
    const label = document.getElementById('traffic-light-label')!;
    label.innerText = TrafficLight[currentColor];
}

// Start changing colors every 10 seconds
setInterval(() => {
    changeColor();
}, 10000); // 10000 milliseconds = 10 seconds
