// **Question 55:** Double Numbers in an Array:
//  Make a list of numbers. Then, use a trick to make a new list 
// where each number is twice its original value.
var originalNumber = [2, 4, 6, 8, 10];
var doubleNumber = originalNumber.map(function (num) { return num * 2; });
console.log(doubleNumber);
