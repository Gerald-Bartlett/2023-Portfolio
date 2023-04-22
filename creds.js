

const imageContainer = document.querySelector(".image-container");

const prevBtn = document.getElementById("prev");

const nextBtn = document.getElementById("next");
let x = 0;
prevBtn.addEventListener("click", () => {
  x = x + 45;
  rotate();
});

nextBtn.addEventListener("click", () => {
  x = x - 45;
  rotate();
});

function rotate() {
  imageContainer.style.transform = `perspective(1000px) rotateY(${x}deg)`;
}


const btnScrollToTop = document.querySelector("#btnScrollToTop");
btnScrollToTop.addEventListener('click', function () {
    // window.scrollTo(0, 0); // or
    window.scrollTo({
        top: 0, // if you want to go just to say 50px from the top you would put 50px here
        left: 0,
        behavior: "smooth"
    });
})