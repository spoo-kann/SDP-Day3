// Function to process numbers and apply conditions
function processNumbers() {
    const results = []; // Array to store final results

    for (let i = 1; i <= 100; i++) {
        let number = i;

        // If the number is a multiple of 2, multiply by 5
        if (number % 2 === 0) {
            number *= 5;
        }

        // If the number is a multiple of 3, divide by 3
        if (i % 3 === 0) {
            number /= 3;
        }

        // Store the final result
        results.push(number);
    }

    return results;
}

// Call the function and print results
const finalResults = processNumbers();
console.log(finalResults);
