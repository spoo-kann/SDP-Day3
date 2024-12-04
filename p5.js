function getMiddleLetter(string) {
    const length = string.length;
    const middleIndex = Math.floor(length / 2);

    // If the string has an odd length, return the middle character.
    // If the string has an even length, return the two middle characters.
    if (length % 2 === 1) {
        return string[middleIndex];
    } else {
        return string[middleIndex - 1] + string[middleIndex];
    }
}

const inputString = "bosco";
const middleLetter = getMiddleLetter(inputString);
console.log(`The middle letter(s) of "${inputString}" is/are: ${middleLetter}`);
