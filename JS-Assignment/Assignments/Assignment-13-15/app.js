// --------CHAPTER ARRAY 13-15---------//

//1. Declare an empty array using JS literal notation to store student names in future.
var students = [];

// 2. Declare an empty array using JS object notation to store student names in future.
var students = new Array();

// 3. Declare and initialize a strings array.
var names =[' aiza ', ' aima ' , ' aina ' ];
document.write("String array  " + names + " <br/> " + "<br/>")

// 4. Declare and initialize a numbers array.
var numbers = [1 , 2 , 3 , 4 , 5 , 6 , 7];
document.write('Number array  ' + numbers + " <br/>" + "<br/>")

// 5. Declare and initialize a boolean array.
var bool = [true , false, false, true];
document.write("Boolean Array  " + bool + " <br/>" + "<br/>")

// 6. Declare and initialize a mixed array.
var mixedArray = ['Maira' , 'Umer', 22 , true]

// 7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, 
// BS, BCOM, MS, M. Phil., PhD). Show the listed  qualifications in your browser like
var qualifications =  ['SSC', 'HSC', 'BCS', 'BS', 'BS', 'BCOM', 'MS', 'MPHIL', 'PHD'];
 var count = 0;
var i = 0;

document.write("Qualification" + "<br/>")
document.write(++count + ") " + qualifications[i++] + "<br/>");
document.write(++count + ") " + qualifications[i++] + "<br/>");
document.write(++count + ") " + qualifications[i++] + "<br/>");
document.write(++count + ") " + qualifications[i++] + "<br/>");
document.write(++count + ") " + qualifications[i++] + "<br/>");
document.write(++count + ") " + qualifications[i++] + "<br/>");
document.write(++count + ") " + qualifications[i++] + "<br/>");
document.write(++count + ") " + qualifications[i++] + "<br/>" + "<br/>" + "<br/>");

// 8. Write a program to store 3 student names in an array.Take another array to store score of these three students. 
// Assume that total marks are 500 for each student, display 
// the scores & percentages of students like:

var studentNames = ['Sana', 'Zara', 'Haya'];
var studentMarks = [400, 498, 456];
var index =0;
document.write("Score of " + studentNames[index] + " is " + studentMarks[index] + ". Percentage: " + ((studentMarks[index++] / 500) * 100) + "<br/>");
document.write("Score of " + studentNames[index] + " is " + studentMarks[index] + ". Percentage: " + ((studentMarks[index++] / 500) * 100) + "<br/>");
document.write("Score of " + studentNames[index] + " is " + studentMarks[index] + ". Percentage: " + ((studentMarks[index++] / 500) * 100) + "<br/>");
document.write("<br/>" + "<br/>");

// 9. Initialize an array with color names. Display the array elements in your browser.
var colorNames = ['Red', 'Yellow', 'Green', 'Orange'];
document.write("Colors Names " + colorNames + "<br/>" + "<br/>");

// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
var input = prompt('What colors do you want to add the begining')
colorNames.push(input);


document.write('Updated Array: ' + colorNames + "<br/>");

// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the  updated array in your browser.
input = prompt("What color you wants to add to the end?");
colorNames.push(input);

document.write("Updated array: " + colorNames + "<br/>");

// c. Add two more color to the beginning of the array.  Display the updated array in your browser.
input = prompt("Add two more color to the beginning/nEnter first color: ");
colorNames.unshift(input);
input = prompt("Add two more color to the beginning/nEnter second color: ");
colorNames.unshift(input);

document.write("Updated array: " + colorNames + "<br/>");

// d. Delete the first color in the array. Display the updatedarray in your browser.
colorNames.shift();

document.write("Updated array: " + colorNames + "<br/>");

// e. Delete the last color in the array
colorNames.pop();

document.write("Updated array: " + colorNames + "<br/>");

// e. Delete the last color in the array. Display the updated array in your browser.
colorNames.pop();

document.write("Updated array: " + colorNames + "<br/>");

// f. Ask the user at which index he/she wants to add a color  & color name. Then add the color to desired 
// position/index. . Display the updated array in your  browser.
var indexNo = +prompt("Which index you wants to add a color: ");
input = prompt("Please enter your color name: ");
colorNames.splice(indexNo, 0, input);

document.write("Updated array: " + colorNames + "<br/>");

// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Thearray in your browser.
indexNo = +prompt("At which index you wants to delete a color: ");
var deleteCount = +prompt("how many colors you want to delete ");
colorNames.splice(indexNo, deleteCount);

document.write("Updated array: " + colorNames + "<br/>" + "<br/>");

// 10.Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.
var stuMarks = [320, 230, 480, 120];
document.write("Scores of students: " + stuMarks + "<br/>" + "<br/>");
document.write("Ordered scores of students: " + stuMarks.sort() + "<br/>" + "<br/>");

// 11. Write a program to initialize an array with city names.  Copy 3 array elements from cities array to selectedCities  array
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write("Cities List: " + "<br/>" + cities + "<br/>" + "<br/>");

var selectedCities = [];
selectedCities= cities.slice(2,3);
document.write("Selected cities list: " + "<br/>" + selectedCities + "<br/>" + "</br/>");

// 12. Write a program to create a single string from the below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];(Use array’s join method)

var arr = ["This", "is", "my", "cat"];
document.write("Array: " + "<br/>" + arr + "<br/>" + "<br/>");
var joinarr = arr.join(" ");
document.write("String: " + "<br/>" + joinarr + "<br/>"+ "<br/>" + "<br/>");

// 13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)
var devices = ["Keyboard", "mouse", "printer", "monitor"];
var out;
document.write("Devices: " + devices + "<br/>" + "<br/>");

out = devices.shift();
document.write("Out: " + "<br/>" + out + "<br/>");

out = devices.shift();
document.write("Out: " + "<br/>" + out + "<br/>");

out = devices.shift();
document.write("Out: " + "<br/>" + out + "<br/>");

out = devices.shift();
document.write("Out: " + "<br/>" + out + "<br/>");

// 14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last InFirst Out
var devices2 = ["Keyboard", "mouse", "printer", "monitor"];
var out;
document.write("Devices: " + devices2 + "<br/>" + "<br/>");

out = devices2.pop();
document.write("Out: " + "<br/>" + out + "<br/>");

out = devices2.pop();
document.write("Out: " + "<br/>" + out + "<br/>");

out = devices2.pop();
document.write("Out: " + "<br/>" + out + "<br/>");

out = devices2.pop();
document.write("Out: " + "<br/>" + out + "<br/>" + "<br/>" + "<br/>");

// 15. Write a program to store phone manufacturers (Apple,Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your 
// browser using document.write() method:
var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
var index = 0;
document.write("<select>");
document.write("<option>" + phoneManufacturers[index++] + "<option>");
document.write("<option>" + phoneManufacturers[index++] + "<option>");
document.write("<option>" + phoneManufacturers[index++] + "<option>");
document.write("<option>" + phoneManufacturers[index++] + "<option>");
document.write("<option>" + phoneManufacturers[index++] + "<option>");
document.write("<option>" + phoneManufacturers[index++] + "<option>");
document.write("</select>");

