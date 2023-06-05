// CHAPTER 12-13 IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITION //

// Write a program that takes a character (number or string)  in a variable & checks whether the given input is
//  a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).
var character = prompt('Please enter your character to check weather the given input is a number, uppercse letter or lowercase letter')

var value = character.charAt(0);

// checking for number
if(value >= 48 && value <= 57){
    alert(character + " is number ");
}

// checking for uppercase letter
else if(value >= 65 && value <=90){
    alert(character + " is uppercase letter")
}

// checking for lowercase letter
 else if(value >= 97 && value <=122){
    alert(character + " is lowercase letter")
}

else{
    alert("Given input is not a number or letter")
}

// 2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.

var firstNum = prompt('Enter first number')
var secondNum = prompt('Enter second number')

if (firstNum > secondNum)
{
    alert(firstNum + " is larger than " + secondNum)
}
else if( secondNum > firstNum){
    alert(secondNum + " is larger than " + firstNum)
}
else{
    alert(firstNum  + secondNum + " both are equal")
}

// Write a program that takes input a number from user &  state whether the number is positive, negative or zero.

 var num = +prompt("Ente a num to check it state")

  if(num  > 0)
  {
    alert(num + " is positve")
  }

  else if (num < 0){
    alert(num + " is negative")
  }

  else{
    alert(num + " is  equal to zero")
  }

//   4. Write a program that takes a character (i.e. string of  length 1) and returns true if it is a vowel, false otherwise

var character = prompt("Enter character to check vowel or not");

if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u"){
    alert(character + " is vowel");
}

else if (character === "A" || character === "E" || character === "I" || character === "O" || character === "U"){
    alert(character + " is vowel");
}

else{
    alert(character + " is not vowel");
}

// write a program that 

// a. Store correct password in a JS variable.
var correctPassword = 'myra123';

// b. Asks user to enter his/her password
var check = prompt('Enter your password');

// c. Validate the two passwords:
if(check=== ""){
    check =prompt('Please enter your password')
}

// i. Check if user has entered password. If not, then give message “ Please enter your password”
if(check === correctPassword)
{
//  ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show 
    alert('Correct! The password you entered matches the original password');
}
else{
    alert('Inccrect Password');
}

// This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }
// else{
// greeting = "Good evening";
// }

var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
alert(greeting);
}
else{
greeting = "Good evening";
alert(greeting);
}

//  7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm.
// Implement the following case using if, else & else if statements
var time = +prompt("Please enter 24 hours clock format time \nlike: 1900 = 7pm.");

if (time >= 0000 && time < 1200){
    alert("Good Morning");
}

else if (time >= 1200 && time < 1700){
    alert("Good Afternoon");
}

else if (time >= 1700 && time < 2100){
    alert("Good Evening");
}

else if (time >= 2100 && time <= 2359){
    alert("Good Night");
}

else{
    alert("Invalid Input");
}

// ----------- End of Chapter 12-13 -------
