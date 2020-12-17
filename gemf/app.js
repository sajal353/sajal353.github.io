const logo = document.querySelector(".logo");

const global = document.querySelector(".four");

const equity = document.querySelector(".eight");

const movement = document.querySelector(".ten");

logo.addEventListener("click", () => {
    window.location.href = "/index.html";
});

global.addEventListener("click", () => {
    window.location.href = "/global.html";
});

equity.addEventListener("click", () => {
    window.location.href = "/equity.html";
});

movement.addEventListener("click", () => {
    window.location.href = "/movement.html";
});