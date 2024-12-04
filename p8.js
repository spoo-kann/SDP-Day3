function categorizeStudent(grade) {
    let category;

    // Check the grade and assign the corresponding category
    switch (grade) {
        case 'A+':
        case 'A':
            category = "Excellent";
            break;
        case 'B+':
            category = "Very Good";
            break;
        case 'B':
            category = "Good";
            break;
        default:
            category = "Invalid grade"; // Handle unexpected grades
            break;
    }

    return category;
}

// Example student grades
const studentGrades = ['A', 'A+', 'B', 'B+', 'C', 'A'];

// Categorize each student and display the result
studentGrades.forEach((grade, index) => {
    const category = categorizeStudent(grade);
    console.log(`Student ${index + 1} with grade "${grade}" is categorized as: ${category}`);
});
