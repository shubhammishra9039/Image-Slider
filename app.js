let currentslide = 0;

let slides = document.querySelectorAll(".slide");
let prebtn = document.querySelector("#pre");
let nextbtn = document.querySelector("#next");

nextbtn.addEventListener("click", function () {
  slides[currentslide].style.display = "none";
  console.log("hy");
});
