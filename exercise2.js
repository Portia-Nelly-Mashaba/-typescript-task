var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        return a + b;
    };
    Calculator.prototype.subtract = function (a, b) {
        return a - b;
    };
    Calculator.prototype.multiply = function (a, b) {
        return a * b;
    };
    Calculator.prototype.divide = function (a, b) {
        if (b === 0) {
            return "Error: Division by zero";
        }
        return a / b;
    };
    return Calculator;
}());
// Test cases
var calculator = new Calculator();
console.log(calculator.add(5, 10)); // Output: 15
console.log(calculator.subtract(5, 1)); // Output: 4
console.log(calculator.multiply(5, 4)); // Output: 20
console.log(calculator.divide(5, 0)); // Output: "Error: Division by zero"
console.log(calculator.divide(10, 5)); // Output: 2
