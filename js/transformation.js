document.addEventListener('DOMContentLoaded', (event) => {
    const citations = [
        "La force ne vient pas d'une capacité physique. Elle vient d'une volonté indomptable. - Mahatma Gandhi ",
        "Le seul endroit où le succès vient avant le travail, c'est dans le dictionnaire. - Vidal Sassoon",
        "La douleur que vous ressentez aujourd'hui sera la force que vous ressentirez demain. - Arnold Schwarzenegger",
        "Le corps n'est pas une machine, il est une œuvre d'art. - Jeanette Jenkins",
        "Le plus grand plaisir dans la vie est de réaliser ce que les autres vous pensent incapable de réaliser. - Walter Bagehot",
        "Ne limite pas tes défis, défie tes limites.",
        "Ce qui ne me tue pas me rend plus fort. - Friedrich Nietzsche",
        "La différence entre qui tu es et qui tu veux être, c'est ce que tu fais.",
        "La motivation est ce qui te fait démarrer. L'habitude est ce qui te fait continuer. - Jim Ryun",
        "Quand vous pensez à abandonner, pensez à la raison qui vous a fait commencer.",
    ];

    let indexCitation = 0;
    const texteCitation = document.querySelector('.suggestion-texte');

    function afficherCitation(index) {
        texteCitation.textContent = citations[index];
    }

    function citationSuivante() {
        indexCitation = (indexCitation + 1) % citations.length;
        afficherCitation(indexCitation);
    }

    function citationPrecedente() {
        indexCitation = (indexCitation - 1 + citations.length) % citations.length;
        afficherCitation(indexCitation);
    }

    const buttonPrev = document.querySelector('.suggestion-nav-button-prev');
    const buttonNext = document.querySelector('.suggestion-nav-button-next');

    buttonPrev.addEventListener('click', citationPrecedente);
    buttonNext.addEventListener('click', citationSuivante);

    setInterval(citationSuivante, 5000);

    afficherCitation(indexCitation);

})