interface ICalculator {
    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
    multiply(a: number, b: number): number;
    divide(a: number, b: number): number | string;
}

class Calculator implements ICalculator {
    add(a: number, b: number): number {
        return a + b;
    }

    subtract(a: number, b: number): number {
        return a - b;
    }

    multiply(a: number, b: number): number {
        return a * b;
    }

    divide(a: number, b: number): number | string {
        if (b === 0) {
            return "Error: Division by zero";
        }
        return a / b;
    }
}

// Test cases
const calculator = new Calculator();
console.log(calculator.add(5, 10));      // Output: 15
console.log(calculator.subtract(5, 1)); // Output: 4
console.log(calculator.multiply(5, 4)); // Output: 20
console.log(calculator.divide(5, 0));   // Output: "Error: Division by zero"
console.log(calculator.divide(10, 5));  // Output: 2
