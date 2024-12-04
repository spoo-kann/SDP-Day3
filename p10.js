function printMultiples() {
    let count = 0;
    let num = 1;

    // Function to print multiples
    function printMultiplesOf(multiple, countRequired) {
        let results = [];
        let found = 0;
        while (found < countRequired) {
            if (num % multiple === 0) {
                results.push(num);
                found++;
            }
            num++;
        }
        return results;
    }

    let multiplesOf2 = printMultiplesOf(2, 5);
    count += multiplesOf2.length;
    
    let multiplesOf5 = printMultiplesOf(5, 5);
    count += multiplesOf5.length;

    let multiplesOf7 = printMultiplesOf(7, 5);
    count += multiplesOf7.length;

    let multiplesOf9 = printMultiplesOf(9, 5);
    count += multiplesOf9.length;

    let allMultiples = [...multiplesOf2, ...multiplesOf5, ...multiplesOf7, ...multiplesOf9];
    
    console.log(`The first 20 numbers are: ${allMultiples.join(', ')}`);
}

// Call the function
printMultiples();
