// ----------- Chapter 9-10 USER INPUT & CONDITIONAL STATEMENT ----------

//1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: 
// “Welcome to city of lights”
var cityName = prompt('Enter your city');
if (cityName === "karachi"){
    alert("Welcome to the city of lights");
}

// 2.Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the 
// user is female, give the message: Good Morning Ma’am.
var gender = prompt("Enter Your Gender");
if (gender === "male"){
    alert("Good Morning Sir");
}
if (gender === "female"){
    alert("Good Morning Ma'am");
}

// 3. Write a program to take input color of road traffic signal from the user & show the message according to this table:
var colors = prompt('Enter the road traffic signal: \n red, yellow, green');
if (colors ==='Red'){
    alert('Must Stop')
}
if (colors === 'Yellow'){
    alert('Move Now')
}
if(colors === 'Green'){
    alert('Ready to move')
}
// 4.Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, 
// show the message “Please refill the fuel in your car”

var fuel = +prompt('Enter the remaining fuel of the car in the liters:');
if (fuel < 0.25){
    alert('Please refill the fuel in car');
}

// 5.Run this script, & check whether alert message would be displayed or not. Record the outputs.

// part A
 var a = 4;
 if (++a === 5){
 alert("given condition for variable a is true");
 }
//  Part B
var b = 82;
 if (b++ === 83){
 alert("given condition for variable b is true");
}

// Part C
 var c = 12;
 if (c++ === 13){
alert("condition 1 is true");
}

// Part D
if (c === 13){
alert("condition 2 is true");
 }
if (++c < 14){
 alert("condition 3 is true");
 }

//  Part E
 if(c === 14){
 alert("condition 4 is true");
 }
// Part D
var materialCost = 20000;
 var laborCost = 2000;
 var totalCost = materialCost + laborCost
 if (totalCost === laborCost + materialCost){
 alert("The cost equals");
 }

//  Part E
 if (true){
 alert("True");
 }
 if (false){
 alert("False");
}
// Part F
if("car" < "cat") {
    alert("car is smaller than cat");
}

// 6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute 
// grade as per following table:

var obtainedmarks = +prompt('Enter Obtained Marks in three subject: ');
var totalMarks = +prompt('Enter total Marks: ');
var percentage = (obtainedMarks/totalMarks)*100;

document.write("<h3/>" + "Marks Sheet" + "<h3/>");
document.write("Total marks : " + obtainedMarks);
document.write("Marks obtained : " + marksObtained);
document.write("Percentage: " + percentage);

if(percentage >= 80 && percentage < 100){
    document.write("Grade: A-one" + "<br>");
    document.write("Remarks: Excellent" + "<br>");
}
else if(percentage >= 70 && percentage < 80){
    document.write("Grade: A"+ "<br>");
    document.write("Remarks: Good" + "<br>");
}
else if (percentage >= 60 && percentage < 70){
    document.write("Grade: C" + "<br>");
    document.write("Remarks: You need to improve" + "<br>");
}
else if (percentage < 60){
    document.write("Grade: Fail" + "<br>");
    document.write("Remarks: Sorry" + "<br>");
}

else{
    document.write("Invalid Input" + "<br>");
}

// 7.Guess game: Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number.
//  a. If user guesses the same number, show “Bingo! Correct answer”.
// b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.

var secret = 7;
 var guess = +prompt('Guess the secret number: \nBetween 1-10')

 // a. If user guesses the same number, show “Bingo! Correct answer”.
 if (secret === guess){
    alert("Bingo! Correct Answer: ");
}

// b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.
else if (++secret === guess){
    alert("Close enough to the correct answer");
}

else{
    alert("Sorry Wrong Guess");

}
//  8. Write a program to check whether the given number is divisible by 3. Show the message to the  user if the number is divisible by 3.
var num = +prompt("Enter number to check number is divisible by 3 or not: ");
if (num % 3 === 0){
    alert(num + " is divisble by 3");
}
else{
    alert(num + " is not divisible by 3");
}

// Write a program that checks whether the given input is an even number or an odd number.
var nums = +prompt('Enter number to check wether the given num is even or odd')
if(nums % 2 ===0)
{
    alert(nums + 'is even number' );
}
else{
    alert(nums + 'is odd number');
}

// 10. Write a program that takes temperature as input and  shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

var temp = +prompt('Enter your city temperature');
if (temp >40){
    alert('It is too hot outside.')
}
else if(temp >30){
    alert('The Weather today is Normal.')
}
else if( temp > 20){
alert('Today’s Weather is cool.')
} 
else {
    alert('OMG! Today’s weather is so Cool.')
}

// 11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.
var firstNumber = +prompt("Enter First Number: ");
var secondNumber = +prompt("Enter Second Number: ");
var operator = prompt("Choose your operator: \n( + , - , * , / , % )");
document.write("<h3>" + "Calculator" + "</h3>");
document.write("First Number: " + firstNumber + "</br>");
document.write("Second Number: " + secondNumber + "</br>");
if (operator === "+"){
    document.write("Result: " + firstNumber + " + " + secondNumber + " = " + (firstNumber + secondNumber));
}

else if (operator === "-"){
    document.write("Result: " + firstNumber + " - " + secondNumber + " = " + (firstNumber - secondNumber));
}

else if (operator === "*"){
    document.write("Result: " + firstNumber + " x " + secondNumber + " = " + (firstNumber * secondNumber));
}

else if (operator === "/"){
    document.write("Result: " + firstNumber + " / " + secondNumber + " = " + (firstNumber / secondNumber));
}

else if (operator === "%"){
    document.write("Result: " + firstNumber + " % " + secondNumber + " remainder is: " + (firstNumber % secondNumber));
}

else{
    document.write("Wrong Input");
}

// ----------- End of Chapter 9-11 ----------