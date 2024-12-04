// Function to print odd digit alphabets
function printOddDigitAlphabets() {
    const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // All uppercase alphabets
    for (let i = 0; i < alphabets.length; i++) {
        // Alphabet numbering starts from 1
        const alphabetNumber = i + 1;

        // Check if the alphabet number is odd
        if (alphabetNumber % 2 !== 0) {
            console.log(alphabets[i]);
        }
    }
}

// Call the function
printOddDigitAlphabets();
