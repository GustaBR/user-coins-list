const navbarToggler = document.querySelector(".nav__toggler");
const navbarExpand = document.querySelector(".nav__expand");
const adminButton = document.getElementById("admin-button");
const adminForm = document.getElementById("admin-form");

navbarToggler.addEventListener("click", () => {
    navbarExpand.classList.toggle("nav__expand--active");
    adminForm.classList.add("hidden");
});

adminButton.addEventListener("click", () => {
    adminForm.classList.toggle("hidden");
})