function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  document.querySelectorAll(".toggle-icon").forEach(el => {
    el.textContent = isDark ? "☀️" : "🌙";
  });
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

// Apply saved theme on load
(function () {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    document.addEventListener("DOMContentLoaded", () => {
      document.querySelectorAll(".toggle-icon").forEach(el => {
        el.textContent = "☀️";
      });
    });
  }
})();