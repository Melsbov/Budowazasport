document.addEventListener("DOMContentLoaded", function() {
    var locaties = ["schagen", "callantsoog", "tzand", "petten", "annapaulowna", "submenu1"];

    locaties.forEach(function(locatie) {
        var menuItems = document.querySelectorAll("#" + locatie );

        menuItems.forEach(function(menuItem) {
            menuItem.addEventListener("click", function(event) {
                event.stopPropagation(); // Prevent the event from propagating to the document
                this.classList.toggle("active");
            });
        });
    });

    // Add event listener to the document to handle clicks outside of the menu items
    document.addEventListener("click", function(event) {
        locaties.forEach(function(locatie) {
            var menuItems = document.querySelectorAll("#" + locatie );
            menuItems.forEach(function(menuItem) {
                if (!menuItem.contains(event.target)) {
                    menuItem.classList.remove("active");
                }
            });
        });
    });
});


// https://codepen.io/kevinpowell/pen/EMdjOV
let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('#dark-mode-toggle');
const darkModeTogglePhone = document.querySelector('#dark-mode-toggle-phone');


const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('darkmode');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('darkmode');
  // 2. Update darkMode in localStorage 
  localStorage.setItem('darkMode', null);
}
 
// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode');  

  // if it not current enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode();
  // if it has been enabled, turn it off  
  } else {  
    disableDarkMode(); 
  }
});

// When someone clicks the button
darkModeTogglePhone.addEventListener('click', () => {
    // get their darkMode setting
    darkMode = localStorage.getItem('darkMode');  
  
    // if it not current enabled, enable it
    if (darkMode !== 'enabled') {
      enableDarkMode();
    // if it has been enabled, turn it off  
    } else {  
      disableDarkMode(); 
    }
  });





// Listen for click events on the document body
document.body.addEventListener('click', function(event) {
  // Check if the clicked element does not have the 'enlarged' class
  if (!event.target.classList.contains('enlarged')) {
      // Remove the 'enlarged' class from all elements that have it
      document.querySelectorAll('.enlarged').forEach(function(element) {
          element.classList.remove('enlarged');
      });
  }
});

// Toggle the 'enlarged' class when clicking on an image
document.querySelectorAll('.image').forEach(function(image) {
  image.addEventListener('click', function(event) {
      event.stopPropagation(); // Prevent the click event from bubbling up to the body
      this.classList.toggle('enlarged');
  });
});