// **Question 57:** Find the Average Grade: 
// Given a list of grades, calculate the average grade.
var grades = [55, 99, 77, 88];
var gradeAverage = grades.reduce(function (total, grades) { return total + grades; }, 0);
console.log(gradeAverage);
