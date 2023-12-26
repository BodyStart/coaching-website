// inscription.js
// Importe les modules nécessaires
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.3.0/firebase-auth.js';
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.3.0/firebase-firestore.js';
// Initialise l'authentification Firebase
const auth = getAuth();
const firestore = getFirestore();

// Référence au formulaire d'inscription
const inscriptionForm = document.getElementById('signUpForm');

// Gestionnaire d'événement pour le formulaire d'inscription
inscriptionForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Empêcher le formulaire de soumettre normalement

    // Récupérer les valeurs des champs du formulaire
    
    const nom = inscriptionForm.querySelector('#nom').value;
    const prenom = inscriptionForm.querySelector('#prenom').value;
    const email = inscriptionForm.querySelector('#email').value;
    const password = inscriptionForm.querySelector('#password').value;

    // Appeler la fonction d'inscription avec Firebase
    inscrireUtilisateur(nom, prenom, email, password);
});

// Fonction pour inscrire un utilisateur avec Firebase
function inscrireUtilisateur(nom, prenom, email, password) {
    // Utiliser la méthode createUserWithEmailAndPassword pour créer un nouvel utilisateur
    createUserWithEmailAndPassword(auth, email, password)
        .then(function (userCredential) {
            // Gestionnaire de succès, utilisateur enregistré avec succès
            const user = userCredential.user;
            console.log('Utilisateur enregistré avec succès:', user);
            // Tu peux ajouter ici d'autres actions à effectuer après l'inscription

            // Récupérer l'ID de l'utilisateur
            const userId = user.uid;

            // Informations de l'utilisateur
            const userData = {
                nom: nom,
                prenom: prenom,
                // ... autres informations
            };

            // Ajouter un document à la collection "utilisateurs"
            addDoc(collection(firestore, "utilisateurs"), userData)
                .then((docRef) => {
                    console.log("Document ajouté avec l'ID :", docRef.id);

                    // Rediriger l'utilisateur vers la page de profil ou effectuer d'autres actions
                    window.location.href = '8.1.profil.programme.html';
                })
                .catch((error) => {
                    console.error("Erreur lors de l'ajout du document :", error);
                    // Gérer les erreurs d'ajout du document
                    alert("Une erreur s'est produite lors de l'inscription. Veuillez réessayer.");
                });
        })
        .catch(function (error) {
            // Gestionnaire d'erreur, afficher l'erreur dans la console
            const errorCode = error.code;
            const errorMessage = error.message;

            if (errorCode === 'auth/weak-password') {
                console.error('Le mot de passe est trop faible. Choisissez un mot de passe plus fort.');
            } else {
                console.error('Erreur lors de l\'inscription:', errorCode, errorMessage);
            }
        });
}
