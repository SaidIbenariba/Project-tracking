const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const links = document.getElementById("nav-links");

console.log(menuBtn, closeBtn, links);

menuBtn.addEventListener("click", function () {
  links.classList.add("show");
  menuBtn.classList.remove("show");
  closeBtn.classList.add("show");
});
closeBtn.addEventListener("click", function () {
  links.classList.remove("show");
  menuBtn.classList.add("show");
  closeBtn.classList.remove("show");
});
