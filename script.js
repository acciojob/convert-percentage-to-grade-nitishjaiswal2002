function calculateGrade(percentage) {
  //your code here
	 // Check if input is numeric and within the valid range
    if (typeof percentage !== 'number' || isNaN(percentage) || percentage < -100 || percentage > 100) {
        return 'F';  // Non-numeric input or out of range percentage
    }
    
    // Round the percentage to the nearest integer
    percentage = Math.round(percentage);
    
    // Determine the grade based on the percentage
    if (percentage >= 90) {
        return 'A';
    } else if (percentage >= 80) {
        return 'B';
    } else if (percentage >= 70) {
        return 'C';
    } else if (percentage >= 60) {
        return 'D';
    } else {
        return 'F';
    }
	
}
const percentage = parseInt(prompt("Enter Percentage."));
alert(calculateGrade(percentage));


