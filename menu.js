document.querySelector('.menu-button').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});
document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".menu-button");
  const menuBar = document.getElementById("menu");

  menuButton.addEventListener("click", function () {
    menuBar.classList.toggle("menu-active");
  });
});