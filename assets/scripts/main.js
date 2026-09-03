const left_btn = document.querySelector("#left_btn");
const right_btn = document.querySelector("#right_btn");
const slider = document.querySelector("#slider");

left_btn.addEventListener('click', () => {
    slider.scrollBy({ left: -497, behavior: "smooth" });
});

right_btn.addEventListener('click', () => {
    slider.scrollBy({ left: 497, behavior: "smooth" });
});