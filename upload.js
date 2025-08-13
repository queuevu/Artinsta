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