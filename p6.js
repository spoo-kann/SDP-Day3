function findLengthOfString(str) {
    let length = 0;
    while (str[length] !== undefined) {
        length++;
    }
    return length;
}

// Test the function with the given string "spoorthy"
const string = "spoorthy";
console.log(`The length of the string "${string}" is: ${findLengthOfString(string)}`);
