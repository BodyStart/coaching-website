import { getAuth } from 'https://www.gstatic.com/firebasejs/9.3.0/firebase-auth.js';

// Vérifier l'état de connexion au chargement de la page
document.addEventListener('DOMContentLoaded', function () {

    // Utilise onAuthStateChanged pour détecter les changements d'état de connexion
    getAuth().onAuthStateChanged(function (user) {
        if (user) {
            // L'utilisateur est connecté, afficher le bouton "Connecté"
            afficherBoutonConnecte();
        } else {
            // L'utilisateur n'est pas connecté, afficher le bouton "Connexion" ou "S'inscrire"
            afficherBoutonConnexion();
        }
    });
});

function afficherBoutonConnecte() {
    console.log("Utilistateur connecté");
    const boutonConnexion = document.getElementById('boutonConnexion');
    const menuDeroulant = document.getElementById('maburger');

    boutonConnexion.textContent = 'Connecté';
    boutonConnexion.onclick = function() {
        console.log("Clic sur le bouton Connecté");
        menuDeroulant.classList.toggle('affiche-menu');
    }; // Associer la fonction de déconnexion
}

function afficherBoutonConnexion() {

    const boutonConnexion = document.getElementById('boutonConnexion');
    

    boutonConnexion.textContent = 'Connexion';
    boutonConnexion.onclick = function () {
        window.location.href = '0.1.inscription.html';
    };
}


function deconnecterUtilisateur() {
    // Logique pour déconnecter l'utilisateur (utilise la fonction signOut de Firebase)
    getAuth().signOut().then(function() {
        // Rediriger l'utilisateur vers la page d'accueil ou une page de déconnexion
        window.location.href = '/accueil.html';
    }).catch(function(error) {
        // Gérer les erreurs de déconnexion ici
        console.error("Erreur lors de la déconnexion:", error);
    });
}

function redirigerVersPageConnexion() {
    // Logique pour rediriger l'utilisateur vers la page de connexion
    window.location.href = '0.1.inscription.html';
}

function utilisateurConnecte() {
    // Change le texte du bouton et ajoute un événement onclick pour afficher le menu déroulant
    var boutonConnexion = document.getElementById("boutonConnexion");
    boutonConnexion.innerText = "Connecté";
    boutonConnexion.onclick = toggleBurgerMenu;
}


