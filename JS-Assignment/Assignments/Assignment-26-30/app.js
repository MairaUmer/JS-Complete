// ----------- Chapter 26-30 Maths Methods ----------
// Task 1
//1. Write a program that takes a positive integer from user & display the following in your browser a. number b. round off value of the number c. floor value of the number d. ceil value of the number.
var positivIntegers = prompt('Enter positive integers');
document.write('Numbers: ' + positivIntegers + "<br/.>");
document.write('round off values: ' +Math.round(positivIntegers) + "<br/>");
document.write('floor value: ' + Math.floor(positivIntegers)+ "<br/>");
document.write('ciel value: ' + Math.ceil(positivIntegers) + "<br/>" + "<br/>");

//Task 2
//2. Write a program that takes a negative floating point number from user & display the following in your browser. a. number b. round off value of the number c. floor value of the number d. ceil value of the number 
var negativeIntegers = prompt('Enter Negative integers');
document.write('Numbers: ' + negativeIntegers + "<br/.>");
document.write('round off values: ' +Math.round(negativeIntegers) + "<br/>");
document.write('floor value: ' + Math.floor(negativeIntegers)+ "<br/>");
document.write('ciel value: ' + Math.ceil(negativeIntegers) + "<br/>" +"<br/>");

//Task 3
//3. Write a program that displays the absolute value of a number. 
var absoluteValue = prompt('Ente number');
document.write('The absolute value of ' + absoluteValue + " is " + Math.abs(absoluteValue) + "<br/>" + "<br/>");

// Task 4
//4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.
var randomNum = Math.random() * 6;
document.write('Random dice value: ' + Math.floor(randomNum) + "<br/>");
document.write('Random dice value: ' +Math.floor(randomNum)+ "<br/>" + "<br/>");

// Task 5
//5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser 
var coinValue = Math.random() * 2;
coinValue = Math.floor(coinValue);
if(coinValue > 0){
    document.write("Random coin value: Heads" + "<br/>" + "<br/>");
}
else{
    document.write("Random coin value: Tails" + "<br/>" +"<br/>");
}
// Task 6
//6. Write a program that shows a random number between 1 and 100 in your browser. 
var ranNum = Math.random()*100;
document.write('Random number between 1 and 100: ' + Math.ceil(ranNum) + "<br/>" + "<br/>");

// Task 7
//7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser
var weight = prompt('Enter your weight');
var chekWeight = parseInt(weight);
document.write('The weight of user is: ' + chekWeight + "kilograms"+ "<br/>");

// Task 8
//8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user. 
var secretNumber = +prompt('Enter Number between 1 and 10');
randomNum = Math.random() *10;
randomNum = Math.ceil(randomNum);
if(secretNumber===randomNum){
    alert('Congratulations');
}
else{
    alert('Try again');
}