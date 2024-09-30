

let flashEl = document.getElementById('flash')

if (flashEl) {
  setTimeout(function () {
    flashEl.style.display = "none"; 
  }, 3000);
}

var slug = document.querySelector('[name="slug"]');

if (slug) {
  slug.addEventListener('keypress', function ( event ) {  
    var key = event.keyCode;
     if (key === 32) {
       event.preventDefault();
     }
  });
}

// Get references to the password input and the show/hide button
const passwordInput = document.getElementById('password');
const togglePasswordButton = document.getElementById('togglePassword');

if (passwordInput) {
  // Function to toggle password visibility
  function togglePasswordVisibility() {
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      togglePasswordButton.textContent = 'Hide';
    } else {
      passwordInput.type = 'password';
      togglePasswordButton.textContent = 'Show';
    }
  }

  // Attach the click event handler to the button
  togglePasswordButton.addEventListener('click', togglePasswordVisibility);
}

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

document.querySelectorAll('.open-iframe').forEach(button => {
  button.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    const url = this.dataset.url; // Get the URL from the data attribute
    const iframe = document.getElementById('iframe');

    // Set the iframe src to the provided URL
    iframe.src = url;

    // Show the side panel
    const sidePanel = document.getElementById('sidePanel');
    sidePanel.style.display = 'block';
  });
});

// Close panel functionality
document.getElementById('closePanel').addEventListener('click', function() {
  const sidePanel = document.getElementById('sidePanel');
  sidePanel.style.display = 'none';
});

