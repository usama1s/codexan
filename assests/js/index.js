$(function () {
  $("#sortable").sortable();
});

const heroForm = document.getElementById("heroForm");
const heroFormContainer = document.getElementById("heroFormContainer");
const toggleForm = document.getElementById("toggleForm");
const toogleimg = document.getElementById("toogleimg");

function toogleFormFunction() {
  heroForm.classList.toggle("hide");
  toogleimg.classList.toggle("animation");
  if (heroForm.classList.contains("hide")) {
    heroFormContainer.style.padding = "0";
  } else {
    heroFormContainer.style.padding = "50px 20px 20px 20px";
  }
  setTimeout(() => {
    heroForm.classList.toggle("show");
  }, 180);
}
const boxpins = document.querySelectorAll("#box-pin");
const boxes = document.querySelectorAll(".box");

boxpins.forEach((boxpin) => {
  boxpin.addEventListener("click", (event) => {
    const clickedBox = event.target.closest(".box");
    if (clickedBox) {
      const currentOrder = clickedBox.style.order;
      if (currentOrder === "-1") {
        clickedBox.style.order = "";
      } else {
        clickedBox.style.order = "-1";
      }
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
