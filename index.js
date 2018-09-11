// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function appearDropDown(){
  var x = document.getElementById("navbar");
  if (x.className === "topnav" || x.className === "topnav sticky"){
    x.className += " responsive";
    console.log("yeo")
  } else if (x.className === "topnav responsive") {
    x.className = "topnav";
    console.log('naa');
  } else {
    x.className = "topnav sticky";
  }
}