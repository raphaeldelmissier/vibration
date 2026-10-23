// Charger le fichier JSON
fetch('histoire.json')
  .then(response => response.json())
  .then(data => {
    let histoire = data;
    let noeudActuel = histoire.debut; // Commence par le noeud "debut"

    // Fonction pour afficher le texte et les choix
    function afficherNoeud(noeud) {
      const texteJeu = document.getElementById('texte-jeu');
      const choixDiv = document.getElementById('choix');

      // Afficher le texte
      texteJeu.innerHTML = `<strong>${noeud.date} - ${noeud.heure}</strong><br><br>${noeud.texte}`;


      // Effacer les anciens choix
      choixDiv.innerHTML = '';

      // Afficher les nouveaux choix
      if (noeud.choix.length > 0) {
        noeud.choix.forEach(choix => {
          const bouton = document.createElement('button');
          bouton.textContent = choix.texte;
          bouton.addEventListener('click', () => {
            noeudActuel = histoire[choix.prochain];
            afficherNoeud(noeudActuel);
          });
          choixDiv.appendChild(bouton);
        });
      } else {
        // Si pas de choix, afficher un bouton "Recommencer"
        const boutonRecommencer = document.createElement('button');
        boutonRecommencer.textContent = "Recommencer";
        boutonRecommencer.addEventListener('click', () => {
          noeudActuel = histoire.debut;
          afficherNoeud(noeudActuel);
        });
        choixDiv.appendChild(boutonRecommencer);
      }
    }

    // Démarrer le jeu
    afficherNoeud(noeudActuel);
  })
  .catch(error => console.error('Erreur de chargement du JSON:', error));
