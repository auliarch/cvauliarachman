// tablink-tabcontent about
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// sidemenu
var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}

// images slide
var slideIndex1 = 1;
showSlide(slideIndex1, 1);

var slideIndex2 = 1;
showSlide(slideIndex2, 2);

function nextslide(n, index) {
    if (index === 1) {
        slideIndex1 += n;
        showSlide(slideIndex1, index);
    } else if (index === 2) {
        slideIndex2 += n;
        showSlide(slideIndex2, index);
    }
}

function showSlide(n, index) {
    var i;
    var slides = document.querySelectorAll('[data-work-index="' + index + '"] .imgslide');

    if (n > slides.length) {
        n = 1;
    }

    if (n < 1) {
        n = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[n - 1].style.display = "block";
}
