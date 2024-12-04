function printAlphabets() {
    let lowercaseAlphabet = "";
    let uppercaseAlphabet = "";

    // Loop for lowercase letters (a to z)
    for (let i = 97; i <= 122; i++) {
        lowercaseAlphabet += String.fromCharCode(i);
    }

    // Loop for uppercase letters (A to Z)
    for (let i = 65; i <= 90; i++) {
        uppercaseAlphabet += String.fromCharCode(i);
    }

    console.log("Lowercase Alphabet:", lowercaseAlphabet);
    console.log("Uppercase Alphabet:", uppercaseAlphabet);
}

printAlphabets();
