const steps = document.querySelectorAll(".form_step");
const stepIndicators = document.querySelectorAll(".step");
let currentStep = 0;

document.querySelectorAll(".next_btn").forEach(btn => {
  btn.addEventListener("click", () => {
    changeStep(1);
  });
});

document.querySelectorAll(".prev_btn").forEach(btn => {
  btn.addEventListener("click", () => {
    changeStep(-1);
  });
});

function changeStep(direction) {
  steps[currentStep].classList.remove("active");
  stepIndicators[currentStep].classList.remove("active");

  currentStep += direction;

  steps[currentStep].classList.add("active");
  stepIndicators[currentStep].classList.add("active");
}

// Handle submit
document.getElementById("upload_form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Form submitted successfully!");
});

function showprice() {
    let price_container = document.getElementById("price_container");
    price_container.style.display = "block";
}
function hideprice() {
    let price_container = document.getElementById("price_container");
    price_container.style.display = "none";
}
function showcategory() {
    let category_container = document.getElementById("other_style_container");
    category_container.style.display = "block";
}
function hidecategory() {
    let category_container = document.getElementById("other_style_container");
    category_container.style.display = "none";
}