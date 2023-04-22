const ul = document.querySelector("nav ul");
const nav = document.querySelector("navbar");
const hamburger = document.querySelector("#burger-menu");
  hamburger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// let d = new Date();
// alert("Today's date is " + d);
// function myFunction() {
//  var popup = document.getElementById("myPopup");
//  popup.classList.toggle("show");
// }

// const btnScrollToTop = document.querySelector("#btnScrollToTop");
// btnScrollToTop.addEventListener('click', function () {   
//     window.scrollTo({
//         top: 0,
//         left: 0,
//         behavior: "smooth"
//     });
// })