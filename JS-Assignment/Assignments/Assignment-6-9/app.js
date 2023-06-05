// ----------- Chapter 6-9 MATH EXPRESSIONS ----------

//1. Write a program to take a number in a variable, do required arithmetic to display the following result in your
// browser:

var a = +prompt("Input a number: ");

document.write("<h3>" + "Pre and Post Increment/ Decrement Operation" + "</h3>");
document.write("Result" + "<br/>");
document.write("The value of a is: " + a + "<br/>");
document.write("..............................................." + "<br/>");
document.write("<br/>");

// Pre-Increment
document.write("The value of ++a is: " + ++a + "<br/>");
document.write("Now the value of a is: " + a + "<br/>");
document.write("<br/>");

// Post- Increment
document.write("The value of a++ is: " + a++ + "<br/>");
document.write("Now the value of a is: " + a + "<br/>")
document.write("<br/>");

// Pre-Decrement
document.write("The value of --a is: " + --a + "<br/>");
document.write("Now the value of a is: " + a + "<br/>");
document.write("<br/>");

// Post-Decrement
document.write("The value of a-- is: " + a-- + "<br/>");
document.write("Now the value of a is: " + a + "<br/>");

// What will be the output in variables a, b & result after execution of the following script:
//  var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--

var a = 2, b = 1;
document.write("<h3>" + "Solving Complex Equation" + "</h3>");
document.write("The value of a: is" + a + "<br/>");
document.write("The value of b: is" + b + "<br/>");
var result = --a - --b + ++b + b--;
document.write("The result is: " + result + "<br/>");

document.write("<b>" + "Explainatory Solution" + "</b>" + "<br/>");
document.write("a = 2, b = 1" + "<br/>");
document.write("--a  -  --b  +  ++b  +  b--" + "<br/>");
document.write("--2  -  --1  +  ++1  +  1--" + "<br/>");
document.write("1  -  0  +  1  +  1" + "<br/>");
document.write(" 1 + 1 + 1 " + "<br/>");
document.write("3" + "<br/>" + "<br/>");

// 3.Wrie a program that takes input a name from user &  greet the user

var userName = prompt('Enter your name');
document.write('Hello ' + userName + "<br/>" + "<br/>");

// 5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 
// should be displayed by default.
var num = 5, count = 0;
num = +prompt("Enter Number for Table Multiplication: ");
document.write(num + " x " + ++count + " = " + (num * count) + "<br/>");
document.write(num + " x " + ++count + " = " + (num * count) + "<br/>");
document.write(num + " x " + ++count + " = " + (num * count) + "<br/>");
document.write(num + " x " + ++count + " = " + (num * count) + "<br/>");
document.write(num + " x " + ++count + " = " + (num * count) + "<br/>");
document.write(num + " x " + ++count + " = " + (num * count) + "<br/>");
document.write(num + " x " + ++count + " = " + (num * count) + "<br/>");
document.write(num + " x " + ++count + " = " + (num * count) + "<br/>");
document.write(num + " x " + ++count + " = " + (num * count) + "<br/>");
document.write(num + " x " + ++count + " = " + (num * count) + "<br/>");

// 6. Take
document.write("<h3>" + "Marksheet" + "</h3>");
// a) Take three subjects name from user and store them in 3 different variables.
subjectName1 = prompt("Enter Name of Subject 1: ");
subjectName2 = prompt("Enter Name of Subject 2: ");
subjectName3 = prompt("Enter Name of Subject 3: ");
// b) Total marks for each subject is 100, store it in another variable.
var totalMarks = 300;
// c) Take obtained marks for first subject from user and stored it in different variable.
subjectMarks1 = +prompt("Enter Marks of " + subjectName1);
// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
subjectMarks2 = +prompt("Enter Marks of " + subjectName2);
subjectMarks3 = +prompt("Enter Marks of " + subjectName3);
// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table
var obtainedMarks = (subjectMarks1 + subjectMarks2 + subjectMarks3);
var percentage = (obtainedMarks / totalMarks) * 100;
percentage = percentage.toFixed(2);
var percentage1 = (subjectMarks1 / 100) * 100;
var percentage2 = (subjectMarks2 / 100) * 100;
var percentage3 = (subjectMarks3 / 100) * 100;

document.write("<Table>");

document.write("<tr>");
document.write("<th>" + "Subject" + "</th>");
document.write("<th>" + "Total Marks" + "</th>");
document.write("<th>" + "Obtained Marks" + "</th>");
document.write("<th>" + "Percentage" + "</th>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + subjectName1 + "</td>");
document.write("<td>" + 100 + "</td>");
document.write("<td>" + subjectMarks1 + "</td>");
document.write("<td>" + percentage1 + "%" + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + subjectName2 + "</td>");
document.write("<td>" + 100 + "</td>");
document.write("<td>" + subjectMarks2 + "</td>");
document.write("<td>" + percentage2 + "%" + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + subjectName3 + "</td>");
document.write("<td>" + 100 + "</td>");
document.write("<td>" + subjectMarks3 + "</td>");
document.write("<td>" + percentage3 + "%" + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<th>" + "</th>");
document.write("<th>" + 300 + "</th>");
document.write("<th>" + obtainedMarks + "</th>");
document.write("<th>" + percentage + "%" + "</th>");
document.write("</tr>");

document.write("</Table>");

// ----------- End of Chapter 6-9 ----------