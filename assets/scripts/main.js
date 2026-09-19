const left_btn = document.querySelector("#left_btn");
const right_btn = document.querySelector("#right_btn");
const slider = document.querySelector("#slider");

left_btn.addEventListener('click', () => {
    slider.scrollBy({ left: -497, behavior: "smooth" });
});

right_btn.addEventListener('click', () => {
    slider.scrollBy({ left: 497, behavior: "smooth" });
});



const f_slider = document.querySelector("#f_slider");

const left_slide = () => {
    f_slider.scrollBy({ left: -663, behavior: "smooth" });
}
function right_slide() {
    f_slider.scrollBy({ left: 663, behavior: "smooth" });
}