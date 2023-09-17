// Grab HTML Elements
const btn = document.querySelector("button.mobile-button");
const menu = document.querySelector(".mobile-menu");

// Add Event Listeners
btn.addEventListener("click", () => {
menu.classList.toggle("hidden");
});