const ul = document.querySelector("nav ul");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");;
 hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n =>
    n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))

// const navLink = document.querySelectorAll(".nav-link");

// navLink.forEach((link) =>
//   link.addEventListener("click", () => {
//     ul.classList.remove("show");
//   })
// );

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