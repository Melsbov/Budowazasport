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





// var contact = document.querySelector('#contact');
// var contributie = document.querySelector('#contributie');
// var evenementen = document.querySelector('#evenementen');
// var fotos = document.querySelector('#fotos');
// var gegradueerden = document.querySelector('#gegradueerden');
// var graduatieeisen = document.querySelector('#graduatieeisen');
// var index = document.querySelector('#index');
// var inschrijven = document.querySelector('#inschrijven');
// var lesrooster = document.querySelector('#lesrooster');
// var nieuws = document.querySelector('#nieuws');
// var overons = document.querySelector('#overons');

// var slider = document.querySelector('#slider div');

// var indexdag = false;
// var lesroosterdag = false;
// var contactdag = false;
// var inschrijvendag = false;
// var dagofnacht = true



// slider.addEventListener('click', myFunction);

// function myFunction(){
//     if (dagofnacht === true){
//         slider.classList.remove('nacht');
//         slider.classList.add('dag');
//         lesrooster.classList.add('dag');
//         dagofnacht = false;
//         console.log('index set to day');

//     }
//     else if(dagofnacht === false){
//         slider.classList.remove('dag');
//         slider.classList.add('nacht');
//         dagofnacht = true;
//         console.log('index set to night');
//     }
// }

// dayNightSlider.addEventListener('input', function() {
//     const sliderValue = parseInt(dayNightSlider.value);
//     const isNight = sliderValue === 1;

//     if (isNight) {
//         index.classList.remove('dag');
//         index.classList.add('nacht');
//         indexdag = false;
//         console.log('index set to night');
//         lesrooster.classList.remove('dag');
//         lesrooster.classList.add('nacht');
//         contact.classList.remove('dag');
//         contact.classList.add('nacht');
//         inschrijven.classList.remove('dag');
//         inschrijven.classList.add('nacht');
//     } else {
//         index.classList.remove('nacht');
//         index.classList.add('dag');
//         indexdag = true;
//         console.log('index set to night');
//         lesrooster.classList.remove('dag');
//         lesrooster.classList.add('nacht');
//         contact.classList.remove('dag');
//         contact.classList.add('nacht');
//         inschrijven.classList.remove('dag');
//         inschrijven.classList.add('nacht');
//     }
// })

// // Update class on initial load
// if (sliderValue !== null) {
//     dayNightSlider.value = sliderValue;
//     updateSliderClass(sliderValue);
// }

// dayNightSlider.addEventListener('input', function() {
//     const sliderValue = dayNightSlider.value;
//     localStorage.setItem('sliderValue', sliderValue);
//     updateSliderClass(sliderValue);
// });