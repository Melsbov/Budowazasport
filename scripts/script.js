document.addEventListener("DOMContentLoaded", function() {
    var locaties = ["schagen", "callantsoog", "tzand", "petten", "annapaulowna", "submenu1"];

    locaties.forEach(function(locatie) {
        var menuItems = document.querySelectorAll("#" + locatie );

        menuItems.forEach(function(menuItem) {
            menuItem.addEventListener("click", function() {
                console.log("clicked")
                this.classList.toggle("active");
            });
        });
    });
});