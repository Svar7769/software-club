//Navigation bar icon

function menuFunction() {
  var x = document.getElementById("nav");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// fixed header on scroll

window.onscroll = function () {
  stickyNav();
};

var nav = document.getElementById("nav");

var sticky = nav.offsetTop;

function stickyNav() {
  if (window.pageYOffset > sticky) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}
