function printReverseAlphabet() {
    let reverseAlphabet = "";

    // Loop from 'Z' to 'A' using char codes
    for (let i = 90; i >= 65; i--) {
        reverseAlphabet += String.fromCharCode(i); // Convert char code to letter
    }

    console.log(reverseAlphabet);
}

printReverseAlphabet();
