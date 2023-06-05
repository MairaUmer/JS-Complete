// ----------- Chapter 39-42 FUNCTIONS, SWITCH STATEMENTS, WHILE… DOWHILE LOOPS  ----------

// Task 1
//Write a custom function power ( a, b ), to calculate the value of a raised to b.

function power(a,b){
    var number = a;
    var power = b;
    var calc = a**b;
    alert("Result: " + calc )
}

var num = +prompt("Enter Number: ");
var p = +prompt("Enter Power: ");
power(num,p);

// Task 2
//Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not.

function leapYear(year){
    var year = year;
    if( (year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0) ){
        alert(year + " is a leap year")
    }
    else{
        alert(year + " is not a leap year")
    }
}

var year = +prompt("Enter year to check leap year")
leapYear(year) 

// Task 3
//If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by area = S(S − a)(S − b)(S − c) where, S = ( a + b + c ) / 2

function area(s1,s2,s3){
    var s = findS(s1,s2,s3)
    var area =  s*(s-s1)*(s-s2)*(s-s3)
    alert(area)
}

function findS(a,b,c){
    var s = ( a + b + c ) / 2
    return s
}

area(4,5,7)

// Task 4
//Write a function that receives marks received by a student in 3 subjects and returns the average and percentage of these marks. there should be 3 functions one is the mainFunction and other are for average and percentage. Call those functions from mainFunction and display result in mainFunction.

function mainFunction(){
    var mark1 = +prompt("Enter marks for subject 1: ")
    var mark2 = +prompt("Enter marks for subject 2: ")
    var mark3 = +prompt("Enter marks for subject 3: ")
    var avg = avgFunction(mark1,mark2,mark3)
    var per = percentage(mark1,mark2,mark3)
    alert("Average: " + avg)
    alert("Percentage: " + per +"%")
}

function avgFunction(a,b,c){
    var average = (a+b+c)/3;
    average = average.toFixed(2)
    return average
}

function percentage(a,b,c){
    var total = a + b + c;
    var percentage = (total / 300) * 100;
    percentage = percentage.toFixed(2) 
    return percentage 
}

mainFunction()

// Task 5
//You have learned the function indexOf. Code your own custom function that will perform the same functionality. You can code for single character as of now.

var strText = "This is my testing string"
var checkIndex = prompt("Enter character to find index") 
var matchFound = false;

function findIndex(char){
    for(i=0; i<strText.length; i++){
        if(checkIndex === strText[i]){
            matchFound = true;
            document.write("Index: " + i)
            break;
        }
    }
    if(matchFound === false){
        document.write("Index not found")
    }

} 

document.write(strText + "<br>" + "<br>")
findIndex(checkIndex)

// Task 6
// Write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 characters long.

var str =  "My name is Maira and I am student"
function removeVowels(str){
    var noVowels = "";
    for(i=0; i<str.length; i++){
        if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u' || str[i] === 'A' || str[i] === 'E' || str[i] === 'I' || str[i] === 'O' || str[i] === 'U'){
            continue;
        }
        else{
            noVowels += str[i]
        }
    }
    document.write("String Before: " + str + "<br>" + "<br>" );
    document.write("String After: " + noVowels + "<br>" + "<br>");
}

removeVowels(str)

// Task 7
// Write a function with switch statement to count the number of occurrences of any two vowels in succession in a line of text. 

var str = "Pleases read this application and give me gratuity";
var chars = str.split("")
var count = 0;
var occurrences = []
for(var i = 0; i < chars.length - 1; i++) {
    var char = chars[i];
    var next = chars[i + 1];

    if(findOccurence(char) && findOccurence(next)){
      count++
      var twoChar = char + next;
      occurrences.push(twoChar)
    }
}

function findOccurence(char) {
    switch (char) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        return true;
      default:
        return false;
    }
}
document.write("String: " + str + "<br>" + "<br>")
document.write("Count: " + count + "<br>" + "<br>")
document.write("Occurences are: " + occurrences + "<br>")

// Task 8
// The distance between two cities (in km.) is input through the keyboard. Write four functions to convert and print this distance in meters, feet, inches and centimeters

var distance = +prompt("Enter distance from city A to City B in KM: ")
meter(distance)
feet(distance)
inches(distance)
centimeters(distance)

function meter(dis){
  var meterDistance = dis * 1000
  document.write("Distance between city A to city B is " + meterDistance + " meters." + "<br>" + "<br>")
}

function feet(dis){
  var feetDistance = dis * 3281
  document.write("Distance between city A to city B is " + feetDistance + " feets." + "<br>" + "<br>")
}

function inches(dis){
  var inchDistance = dis * 39370
  document.write("Distance between city A to city B is " + inchDistance + " inches." + "<br>" + "<br>")
}

function centimeters(dis){
  var centimeterDistance = dis * 100000
  document.write("Distance between city A to city B is " + centimeterDistance + " centimeters." + "<br>" + "<br>")
}

// Task 9
// Write a program to calculate overtime pay of employees.Overtime is paid at the rate of Rs. 12.00 per hour for every hour worked above 40 hours. Assume that employees do not work for fractional part of an hour.

var workingHours = +prompt("Enter your working hours: ")
var overTime, overTimePay;
var overTimeHourPay = 12;

if(workingHours > 40){
  overTime = workingHours - 40;
  overTimePay = overTime * overTimeHourPay;
  alert("Your overtime pay cost is: " + overTimePay + "rupees");
} 

else{
  alert("You need to work more to get overtime")
}

// Task 10
// A cashier has currency notes of denominations 10, 50 and 100. If the amount to be withdrawn is input through the keyboard in hundreds, find the total number of currency notes of each denomination the cashier will have to give to the withdrawer.

var amount = +prompt("Enter amount to Withdraw")
var hundred = parseInt(amount / 100)
var fifty = parseInt((amount % 100) / 50)
var ten = parseInt((((amount % 100) % 50) / 10))

document.write("Entered amount: " + amount + "<br>");
document.write("You will have " + hundred + " hundred notes " + fifty + " fifty notes " + ten + " ten notes.")

