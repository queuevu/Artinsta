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

// Hashtag management
const tagContainer = document.getElementById("tagcontainer");
const tagInput = document.getElementById("Hashtag_input");
const hiddenInput = document.getElementById("hashtags");

let tags = [];

function addTag(text) {
  if (text && !tags.includes(text)) {
    tags.push(text);

    const tag = document.createElement("div");
    tag.className = "tag";
    tag.innerHTML = "<span>"+text+"</span><button onclick=\"removeTag('"+text+"')\">×</button>";
    tagContainer.appendChild(tag);

    updateHiddenInput();
  }
}

function removeTag(text) {
  tags = tags.filter(t => t !== text);
  renderTags();
  updateHiddenInput();
}

function renderTags() {
  // Clear all tags except input
  tagContainer.querySelectorAll(".tag").forEach(tag => tag.remove());
  tags.forEach(t => {
    const tag = document.createElement("div");
    tag.className = "tag";
    tag.innerHTML = "<span>"+t+"</span><button onclick=\"removeTag('"+t+"')\">×</button>";
    tagContainer.appendChild(tag);
  });
}

function updateHiddenInput() {
  hiddenInput.value = tags.join(",");
}

// Add on Enter key
tagInput.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    e.preventDefault();
    const text = tagInput.value.trim();
    if (text) addTag(text);
    tagInput.value = "";
  }
});


// keyword management
const keyContainer = document.getElementById("keywordcontainer");
const keyInput = document.getElementById("Keywordinput");
const hiddenkeyInput = document.getElementById("keywords");

let keywords = [];

function addkeywords(text) {
  if (text && !keywords.includes(text)) {
    keywords.push(text);

    const keys = document.createElement("div");
    keys.className = "keys";
    keys.innerHTML = "<span>"+text+"</span><button onclick=\"removekey('"+text+"')\">×</button>";
    keyContainer.appendChild(keys);

    updateHiddenkeyInput();
  }
}

function removekey(text) {
  keywords = keywords.filter(t => t !== text);
  renderkeys();
  updateHiddenkeyInput();
}

function renderkeys() {
  // Clear all tags except input
  keyContainer.querySelectorAll(".keys").forEach(keys => keys.remove());
  keywords.forEach(t => {
    const keyword = document.createElement("div");
    keyword.className = "keys";
    keyword.innerHTML = "<span>"+t+"</span><button onclick=\"removekey('"+t+"')\">×</button>";
    keyContainer.appendChild(keyword);
  });
}

function updateHiddenInput() {
  hiddenkeyInput.value = keywords.join(",");
}

// Add on Enter key
keyInput.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    e.preventDefault();
    const text =keyInput.value.trim();
    keyInput.value = "";
    if (text) addkeywords(text);
  }
});