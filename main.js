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

const spanElement = document.getElementById('span');
const infoCountryElement = document.querySelector('.info_country');

spanElement.addEventListener('click', function() {
  infoCountryElement.classList.toggle('active');
  spanElement.textContent = infoCountryElement.classList.contains('active') ? 'show less' : 'show more';
});

