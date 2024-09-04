document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
  
    // Get user input
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Simple validation (replace with real authentication)
    if (username && password) {
        // Simulate successful login
        localStorage.setItem('loggedIn', 'true'); // Store login state
        window.location.href = 'index.html'; // Redirect to index page
    } else {
        alert('Please enter both username and password');
    }
  });
  