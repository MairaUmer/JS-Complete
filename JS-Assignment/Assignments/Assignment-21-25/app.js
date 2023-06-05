// ----------- Chapter 21-25 String Methods ----------

// Task 1
// 1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name
var firstName = prompt('Enter First Name');
var lastName = prompt('Enter Last Name');
var fullName = firstName + " " + lastName;
 alert('Hello ' +  fullName);

//  Task 2
//  2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user 
// input in your browser
var userInput = prompt('Enter your favourite mobile phone model');
document.write("My favourite phone is: " + userInput + "<br/>");
document.write('lenght of string is: ' + userInput.length + "<br/>" + "<br/>");

// Task 3
//Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser.
var str = 'Pakistani';
var nIndex = str.indexOf('n');
document.write("String: " + str + "<br/>");
document.write("Index of 'n': " + nIndex + "<br/>" + "<br/>");

//Task 4
// 4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser
var str2 = 'Hello World';
var lastIndex = str2.lastIndexOf('l');
document.write("String: " + str2 + "<br/>");
document.write("Index of 'n': " + lastIndex + "<br/>" + "<br/>");

// Task 5
// 5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser
var char = 'Pakistani';
var result = char.charAt(3);
document.write("String: " + char + "<br/>");
document.write(" Character at index 3 : " + result + "<br/>" + "<br/>");

// Task 6
// 6.Repeat Q1 using string concat() method.
var firstName = prompt('Enter First Name');
var lastName = prompt('Enter Last Name');
var fullName = firstName.concat(lastName);
 alert('Hello ' +  fullName);

//  Task 7
//  7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.
var newText = 'Hyderabad';
var textToReplace = newText.replace("Hyder", "Islam");
document.write('City: ' + newText + "<br/>");
document.write('After Replacement: ' + textToReplace + "<br/>" +"<br/>");

// Task 8
// 8. Write a program to replace all occurrences of “and” in thestring with “&” and display the result in your browser
// var message = “Ali and Sami are best friends. They play cricket and football together.”;

var message = 'Ali and Sami are best friends. They play cricket and football together';
var replaceMeassage = message.replace(/and/g, "&");
document.write("Message: " + message + "<br/>");
document.write('After Replacement: ' + replaceMeassage + "<br/>" + "<br/>");

// Task 9
// 9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser
var string = "472";
var num = Number(string);
document.write("Value: " + string + "<br/>");
document.write('Type: ' + typeof(string) + "<br/>");
document.write("Value: " + num + "<br/>");
document.write('Type: ' + typeof(num) + "<br/>" +"<br/>");

//Task 10
//10. Write a program that takes user input. Convert and show the input in capital letters.
var str = prompt("Enter Input: ");
document.write("User input: " + str + "<br>");
document.write("Upper case: " + str.toUpperCase())

// Task 11
// 11. Write a program that takes user input. Convert and show the input in title case.

var str = prompt("Enter Input: ");
var firstChar = str.slice(0,1);
var otherChar = str.slice(1);
var title = firstChar.toUpperCase() + otherChar.toLowerCase();
document.write("User input: " + str + "<br>");
document.write("Title case: " + title);

// Task 12
// 12. Write a program that converts the variable num to string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser

var num = 35.36;
var str = num.toString();
var dotIndex = str.indexOf(".");
str = str.slice(0,dotIndex) + str.slice(dotIndex + 1);
document.write("Number: " + num + "<br>");
document.write("Result: " + str);
