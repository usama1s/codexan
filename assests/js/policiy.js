const divIds = [
  "processdiv",
  "globaldiv",
  "compositesdiv",
  "benchmarkdiv",
  "datamapdiv",
  "userdiv",
  "otherdiv",
  "customdiv",
  "acediv",
];
const dropdownIds = [
  "dropdown",
  "dropdown1",
  "dropdown2",
  "dropdown3",
  "dropdown4",
  "dropdown5",
  "dropdown6",
  "dropdown7",
  "dropdown8",
];
dropdownIds.forEach((dropdownId, index) => {
  const dropdown = document.getElementById(dropdownId);
  const div = document.getElementById(divIds[index]);

  dropdown.addEventListener("click", function () {
    div.classList.toggle("d-none");
    const clickedImg = this.querySelector("#imgrotate");
    clickedImg.classList.toggle("animation");
  });
});

const firstdiv = document.getElementById("firstdiv");
const toogleimgdiv = document.getElementById("toogleimgdiv");
const tooglesidebarimg = document.getElementById("tooglesidebarimg");
const overlay_div = document.getElementById("overlay_div");

overlay_div.addEventListener("click", togglesidebar);

function togglesidebar() {
  firstdiv.classList.toggle("sidebar");
  firstdiv.classList.toggle("shadow");
  toogleimgdiv.classList.toggle("moveimg");
  if (firstdiv.classList.contains("sidebar")) {
    tooglesidebarimg.style.transform = "rotate(270deg)";
    overlay_div.style.display = "block";
  } else {
    tooglesidebarimg.style.transform = "rotate(90deg)";
    overlay_div.style.display = "none";
  }
}

window.addEventListener("resize", function () {
  if (window.innerWidth > 878) {
    firstdiv.classList.remove("sidebar");
    firstdiv.classList.remove("shadow");
    toogleimgdiv.classList.remove("moveimg");
  }
});

const dropdowns = document.querySelectorAll(".dropdown");
const sections = document.querySelectorAll(".section");

dropdowns.forEach((dropdown, index) => {
  dropdown.addEventListener("click", () => {
    sections[index].classList.toggle("d-none");
    dropdown.classList.toggle("animation");
  });
});
