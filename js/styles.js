document.addEventListener('DOMContentLoaded', (event) => {
  const navToggle = document.querySelector('.nav-toggle');
  if (navToggle) {
      navToggle.addEventListener('click', toggleNav);
  }

  // Gestion du redimensionnement de la fenêtre
  window.addEventListener('resize', handleResize);
  handleResize(); // Appel initial pour fixer l'état initial correctement
});

function toggleNav() {
  var nav = document.querySelector('.nav ul');
  if (window.innerWidth <= 1101) { // Vérifie si la largeur de la fenêtre est inférieure ou égale à 1110px
      if (nav.style.display === 'block') {
          nav.style.display = 'none';
      } else {
          nav.style.display = 'block';
      }
  }
}

function handleResize() {
  var nav = document.querySelector('.nav ul');
  if (window.innerWidth > 1101) {
      nav.style.display = ''; // Supprime le style inline lorsque la largeur dépasse 1110px
  } else {
      // Optionnel : Vous pouvez ici ajouter une logique pour définir un état spécifique
      // lorsque la fenêtre est redimensionnée en dessous de 1110px, si nécessaire.
  }
}
