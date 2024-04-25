document.querySelector(".menu-btn").addEventListener("click", () => {
   document.querySelector(".nav-menu").classList.toggle("show");
});

// Sections scroll:

window.scrollTo({ top: document.getElementById("aboutCoffeese").offsetTop });

window.scrollTo({ top: document.getElementById("typeOfRoast").offsetTop });

window.scrollTo({ top: document.getElementById("brewMethod").offsetTop });

window.scrollTo({ top: document.getElementById("coffeeByCountries").offsetTop });