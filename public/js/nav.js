const navbarToggler = document.querySelector(".navbar-toggler-icon");
const navbarExpand = document.querySelector(".navbar-expand");

navbarToggler.addEventListener("click", () => {
    navbarExpand.classList.toggle("mobile-hidden");
});