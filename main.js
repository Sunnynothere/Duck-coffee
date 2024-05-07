// Nav responsive:

document.querySelector(".menu-btn").addEventListener("click", () => {
   document.querySelector(".nav-menu").classList.toggle("show");
});

// Sections scroll:

window.scrollTo({ top: document.getElementById("aboutCoffeese").offsetTop });

window.scrollTo({ top: document.getElementById("typeOfRoast").offsetTop });

window.scrollTo({ top: document.getElementById("brewMethod").offsetTop });

window.scrollTo({ top: document.getElementById("coffeeByCountries").offsetTop });

// Read more:

let more = document.querySelectorAll('.more');

for(let i = 0; i < more.length; i++) {
  more[i].addEventListener('click', function() {
    more[i].parentNode.classList.toggle('active');
  });
};




