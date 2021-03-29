//code was sourced from wschools
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navBar");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}