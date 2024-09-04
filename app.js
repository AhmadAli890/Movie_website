const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270));
});

//TOGGLE

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});



// app.js

document.addEventListener('DOMContentLoaded', function () {
  const moviesButton = document.getElementById('movies-button');
  const genresSection = document.getElementById('genres-section');

  moviesButton.addEventListener('click', function () {
      if (genresSection.style.display === 'none' || genresSection.style.display === '') {
          genresSection.style.display = 'block';
      } else {
          genresSection.style.display = 'none';
      }
  });
});









document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('themeToggle');
    const toggleBall = toggle.querySelector('.toggle-ball');

    // Check for saved theme preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.body.classList.add(currentTheme);
        if (currentTheme === 'light-theme') {
            toggleBall.style.transform = 'translateX(20px)';
        }
    }

    toggle.addEventListener('click', () => {
        const isDarkMode = document.body.classList.contains('dark-theme');
        if (isDarkMode) {
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
            toggleBall.style.transform = 'translateX(20px)';
            localStorage.setItem('theme', 'light-theme');
        } else {
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-theme');
            toggleBall.style.transform = 'translateX(0)';
            localStorage.setItem('theme', 'dark-theme');
        }
    });
});








document.getElementById('logoutButton').addEventListener('click', function() {
  localStorage.removeItem('loggedIn'); // Remove login state
  window.location.href = 'login.html'; // Redirect to login page
});

