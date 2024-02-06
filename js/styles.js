document.addEventListener('DOMContentLoaded', (event) => {
  const navToggle = document.querySelector('.nav-toggle');
  if (navToggle) {
      navToggle.addEventListener('click', toggleNav);
  }

  window.addEventListener('resize', handleResize);
  handleResize();
});

function toggleNav() {
  var nav = document.querySelector('.nav ul');
  if (window.innerWidth <= 900) {
      if (nav.style.display === 'block') {
          nav.style.display = 'none';
      } else {
          nav.style.display = 'block';
      }
  }
}

function handleResize() {
  var nav = document.querySelector('.nav ul');
  if (window.innerWidth > 900) {
      nav.style.display = '';
  } else {
  }
}
