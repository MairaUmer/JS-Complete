// ----------- Chapter 43-48 EVENTS ----------

// Task 1
// Show an alert box on click on a link.

function showAlert(){
    alert("Hello World")
}
// Task 2
// Display some Mobile images in browser. On click on an image Show the message in alert to user.

function showAlert(){
    alert("Thank you for buying mobile from us")
}
// Task 3
// Display 10 student records in table and each row should contain a delete button. If you click on a button to delete a record, entire row should be deleted.

function delRecord(e){
    e.parentNode.parentNode.remove()
}

// Task 4
// Display an image in browser. Change the picture on mouseover and set the first picture on mouseout.

function changeImage(id,src){
    var image = document.getElementById(id);
    image.src = src;
}

//Task 5
// Show a counter in browser. Counter should increase on click on increase button and decrease on click on decrease button. And show updated counter value in browser.

function increase(){
    var value = document.getElementById("counter").innerHTML
    value = parseInt(value)
    value = value + 1
    document.getElementById("counter").innerHTML = value 
}

function decrease(){
    var value = document.getElementById("counter").innerHTML
    value = parseInt(value)
    value = value - 1
    document.getElementById("counter").innerHTML = value 
}