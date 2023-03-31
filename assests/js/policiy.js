const processdiv = document.getElementById("processdiv");
const globaldiv = document.getElementById("globaldiv");
const compositesdiv = document.getElementById("compositesdiv");
const benchmarkdiv = document.getElementById("benchmarkdiv");
const datamapdiv = document.getElementById("datamapdiv");
const userdiv = document.getElementById("userdiv");
const otherdiv = document.getElementById("otherdiv");
const customdiv = document.getElementById("customdiv");
const acediv = document.getElementById("acediv");

document.getElementById("dropdown").addEventListener("click", function () {
  processdiv.classList.toggle("d-none");
  dropdown.classList.toggle("animation");
});

document.getElementById("dropdown1").addEventListener("click", function () {
  globaldiv.classList.toggle("d-none");
  dropdown1.classList.toggle("animation");
});

document.getElementById("dropdown2").addEventListener("click", function () {
  compositesdiv.classList.toggle("d-none");
  dropdown2.classList.toggle("animation");
});

document.getElementById("dropdown3").addEventListener("click", function () {
  benchmarkdiv.classList.toggle("d-none");
  dropdown3.classList.toggle("animation");
});

document.getElementById("dropdown4").addEventListener("click", function () {
  datamapdiv.classList.toggle("d-none");
  dropdown4.classList.toggle("animation");
});

document.getElementById("dropdown5").addEventListener("click", function () {
  userdiv.classList.toggle("d-none");
  dropdown5.classList.toggle("animation");
});

document.getElementById("dropdown6").addEventListener("click", function () {
  otherdiv.classList.toggle("d-none");
  dropdown6.classList.toggle("animation");
});

document.getElementById("dropdown7").addEventListener("click", function () {
  customdiv.classList.toggle("d-none");
  dropdown7.classList.toggle("animation");
});

document.getElementById("dropdown8").addEventListener("click", function () {
  acediv.classList.toggle("d-none");
  dropdown8.classList.toggle("animation");
});
