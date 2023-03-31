$(function () {
  $("#sortable").sortable();
});

const heroForm = document.getElementById("heroForm");
const heroFormContainer = document.getElementById("heroFormContainer");
const toggleForm = document.getElementById("toggleForm");
const toogleimg = document.getElementById("toogleimg");

function toogleFormFunction() {
  heroForm.classList.toggle("hide");
  heroFormContainer.classList.toggle("pt-50");
  toogleimg.classList.toggle("animation");

  setTimeout(() => {
    heroForm.classList.toggle("show");
  }, 180);
}
const boxes = document.querySelectorAll(".box");
let selectedBox = null;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (selectedBox === box) {
      box.style.order = "";
      selectedBox = null;
    } else {
      box.style.order = -1;
      if (selectedBox) {
        selectedBox.style.order = "";
      }
      selectedBox = box;
    }
  });
});

for (var i = 0; i < boxes.length; i++) {
  boxes[i].querySelector("#box-pin").addEventListener("click", togglePin);
}

function togglePin() {
  var pin = this.querySelector("#pin");
  var pinfill = this.querySelector("#pin_fill");
  var boxactive = document.getElementById("boxactive");

  if (pin.style.display === "none") {
    pin.style.display = "block";
    pinfill.style.display = "none";
    boxactive.style.display = "none";
  } else {
    pin.style.display = "none";
    pinfill.style.display = "block";
  }
}
