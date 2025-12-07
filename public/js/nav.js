const navbarToggler = document.querySelector(".nav__toggler");
const navbarExpand = document.querySelector(".nav__expand");

navbarToggler.addEventListener("click", () => {
    navbarExpand.classList.toggle("nav__expand--active");
});