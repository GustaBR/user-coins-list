const navbarToggler = document.querySelector(".nav__toggler");
const navbarExpand = document.querySelector(".nav__expand");
const adminButton = document.getElementById("admin-button");
const adminForm = document.getElementById("admin-form");

navbarToggler.addEventListener("click", () => {
    navbarExpand.classList.toggle("nav__expand--active");
    adminForm.classList.add("hidden");
});

adminButton.addEventListener("click", async () => {
    try {
        const data = await fetch("/check-login", { credentials: "include" });
        const res = await data.json();

        if (res.authenticated) {
            window.location.href = "/admin";
        } else {
            adminForm.classList.remove("hidden");
        }


    } catch (err) {
        adminForm.classList.remove("hidden");
    }
});