function toggleMenu() {
    var menuIcon = document.querySelector('.menu-icon');
    var navbar = document.getElementById('navbar');
    menuIcon.classList.toggle('change');
    navbar.classList.toggle('active');
}

let count = 1;

document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 5000)

function nextImage(){
count++;
if(count>4){
    count = 1;
}

document.getElementById("radio"+count).checked = true;

}