function toggleEdit() {
    var elements = document.querySelectorAll('#profile-info span');
    elements.forEach(function(element) {
        element.contentEditable = true;
        element.style.border = '1px solid #3498db';
    });
 
 
    document.getElementById('edit-button').style.display = 'none';
    document.getElementById('save-button').style.display = 'block';
 }
 
 
 function saveChanges() {
    var elements = document.querySelectorAll('#profile-info span');
    elements.forEach(function(element) {
        element.contentEditable = false;
        element.style.border = 'none';
    });
 
 
    document.getElementById('edit-button').style.display = 'block';
    document.getElementById('save-button').style.display = 'none';
 }

 // Exemple de code dans profil.js lors de l'affichage de la page de profil
const auth = getAuth();
const firestore = getFirestore();

// ... (code pour récupérer l'ID de l'utilisateur connecté)

// Référence à la collection "utilisateurs"
const usersCollection = collection(firestore, "utilisateurs");

// Requête pour obtenir les informations de l'utilisateur connecté
const userDoc = await getDoc(doc(usersCollection, userId));

if (exists(userDoc)) {
  const userData = userDoc.data();
  console.log("Informations de l'utilisateur :", userData);
} else {
  console.log("L'utilisateur n'a pas été trouvé.");
  // Gérer le cas où l'utilisateur n'est pas trouvé dans la base de données
}

 
 