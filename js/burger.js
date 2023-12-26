// burger.js

document.addEventListener('DOMContentLoaded', function () {
    // Récupère le bouton et la fenêtre modale
    var boutonOuvrir = document.getElementById("ouvrir-burger");
    var maModal = document.getElementById("maburger");
    var boutonFermer = document.getElementById("fermer-burger");

    // Quand l'utilisateur clique sur le bouton, ouvre/ferme la fenêtre modale
    boutonOuvrir.onclick = function () {
        maModal.style.display = (maModal.style.display === "block") ? "none" : "block";
    }

    boutonFermer.onclick = function () {
        maModal.style.display = "none";
    }

    // Fermer le menu burger lorsqu'on clique en dehors
    document.addEventListener('click', function (event) {
        var isClickInsideBurger = boutonOuvrir.contains(event.target) || maModal.contains(event.target);
        if (!isClickInsideBurger) {
            maModal.style.display = "none";
        }
    });
});

function toggleBurgerMenu() {
    const menuDeroulant = document.getElementById('maburger');
    menuDeroulant.classList.toggle('affiche-menu');
}

