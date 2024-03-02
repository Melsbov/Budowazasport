document.addEventListener("DOMContentLoaded", function() {
    var locaties = ["schagen", "callantsoog", "tzand", "petten", "annapaulowna"];

    locaties.forEach(function(locatie) {
        var menuItems = document.querySelectorAll("#" + locatie );

        menuItems.forEach(function(menuItem) {
            menuItem.addEventListener("click", function() {
                this.classList.toggle("active");
            });
        });
    });
});