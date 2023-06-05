//  ----------- Chapter 53-58 EVENTS ----------

// Task 1
// Consider you have 4 images in a file as shown below: Now When you click on an image it should display in a modal.

function closeModal(){
    document.getElementById("main").className = "hidden"  
}

function showModal(id,src){
    document.getElementById("main").className = "visible"
    var imageModal = document.getElementById("modalImg")
    var image = document.getElementById(id);
    imageModal.src = src;
}

