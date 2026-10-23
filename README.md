# VIBRATION — fiction interactive

Un jeu narratif « dont vous êtes le héros », dans le navigateur.

**12 avril 2050, 20 h 30.** Un appareil de labo capte une anomalie dans le fond diffus cosmologique.
Vous cherchez d'où vient le signal… ou vous rentrez chez vous. Chaque choix ouvre une autre branche de l'histoire.

## Comment ça marche

- `histoire.json` contient toute l'histoire. Chaque passage a un `id`, une date, une heure, un texte et une liste de `choix`. Chaque choix pointe vers le passage suivant (`prochain`).
- `script.js` lit le JSON, affiche le passage courant et crée un bouton par choix.
- `style.css` donne l'ambiance de terminal de laboratoire.

Pour écrire la suite, il suffit d'ajouter des passages dans `histoire.json`, sans toucher au code.

## Jouer

Ouvrez `index.html` avec un petit serveur local (le JSON est chargé avec `fetch`) :

```bash
python3 -m http.server 8000   # puis http://localhost:8000
```
