function checkEligibility(attendedClasses, totalClasses) {
    if (totalClasses === 0) {
        console.log("Total classes cannot be zero.");
        return;
    }

    // Calculate attendance percentage
    const attendancePercentage = (attendedClasses / totalClasses) * 100;

    // Check eligibility
    if (attendancePercentage >= 75) {
        console.log(`You are eligible for the exam. Your attendance is ${attendancePercentage.toFixed(2)}%.`);
    } else {
        console.log(`You are not eligible for the exam. Your attendance is ${attendancePercentage.toFixed(2)}%.`);
    }
}

// Example usage
const attendedClasses = 30; // Number of classes attended
const totalClasses = 40;    // Total number of classes

checkEligibility(attendedClasses, totalClasses);