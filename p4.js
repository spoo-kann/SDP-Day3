// Simple Calculator Program

// Perform basic calculations based on the operator
function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : "Error: Division by zero";
        default:
            return "Invalid operator";
    }
}

// Prompt the user for input and perform the calculation
function runCalculator() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    readline.question("Enter the first number: ", (input1) => {
        const num1 = parseFloat(input1);

        readline.question("Enter the second number: ", (input2) => {
            const num2 = parseFloat(input2);

            readline.question("Enter the operator (+, -, *, /): ", (operator) => {
                const result = calculate(num1, num2, operator);
                console.log(`Result: ${result}`);
                readline.close();
            });
        });
    });
}

// Run the calculator
runCalculator();
