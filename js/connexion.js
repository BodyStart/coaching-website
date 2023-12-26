// connexion.js
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.3.0/firebase-auth.js';

const auth = getAuth();

const connexionForm = document.getElementById('signUpForm');

connexionForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = connexionForm.querySelector('#email').value;
    const password = connexionForm.querySelector('#password').value;

    connecterUtilisateur(email, password);
});

function connecterUtilisateur(email, password) {
    signInWithEmailAndPassword(auth, email, password)
        .then(function (userCredential) {
            const user = userCredential.user;
            console.log('Utilisateur connecté avec succès:', user);
            // Rediriger vers la page de profil après connexion réussie
            window.location.href = '8.1.profil.programme.html';
        })
        .catch(function (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Erreur lors de la connexion:', errorCode, errorMessage);
            // Gérer les erreurs de connexion ici (par exemple, afficher un message à l'utilisateur)
        });
}
