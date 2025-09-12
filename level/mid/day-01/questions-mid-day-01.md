Parfait 👌 ! Tu veux passer du niveau junior+++ au **niveau intermédiaire React**.
Je te prépare une série de **10 exercices** :

* **5 QCM** (concepts, bonnes pratiques, pièges).
* **5 exercices de code** (vrais cas pratiques avec consignes).

---

## 🔹 QCM (5 questions)

### QCM 1 – Custom Hook & performance

Un `custom hook` est utile pour :
a) Remplacer tous les composants par des hooks.
b) Mutualiser de la logique réutilisable entre composants.
c) Améliorer automatiquement les performances.
d) Utiliser `useEffect` sans dépendances.

---

### QCM 2 – Fetch & AbortController

Dans un `useEffect`, si tu utilises `fetch` avec `AbortController`, pourquoi ?
a) Pour annuler une requête si le composant est démonté.
b) Pour éviter les memory leaks.
c) Parce que `fetch` échoue toujours sans ça.
d) Pour éviter un `setState` sur un composant démonté.

---

### QCM 3 – Lazy Loading

Que fait `React.lazy()` ?
a) Il optimise le rendu côté serveur.
b) Il permet de charger un composant seulement quand il est utilisé.
c) Il empêche les re-render inutiles.
d) Il précharge automatiquement tous les composants enfants.

---

### QCM 4 – Context vs useReducer

Pourquoi combiner `Context` avec `useReducer` ?
a) Pour avoir un state global avec une logique de mise à jour centralisée.
b) Pour remplacer Redux à 100 %.
c) Parce que `useReducer` est obligatoire avec `Context`.
d) Pour partager un state avec une logique claire de dispatch/action.

---

### QCM 5 – useMemo et optimisation

`useMemo` est utile quand :
a) Tu veux mémoriser une fonction et éviter de la recréer.
b) Tu veux éviter de recalculer une valeur coûteuse à chaque rendu.
c) Tu veux remplacer `useEffect`.
d) Tu veux bloquer les re-render des enfants.

---

---

## 🔹 Exercices de Code (5)

### Exercice 1 – Custom Hook Fetch avec AbortController

👉 Crée un `useFetch(url)` qui :

* Lance un `fetch` sur l’URL donnée.
* Annule le `fetch` si le composant est démonté.
* Retourne `{ data, loading, error }`.

---

### Exercice 2 – Routing avec Query Params

👉 Avec `react-router-dom`, fais une page `/search?q=react`.

* Récupère `q` depuis l’URL.
* Affiche la valeur de `q`.
* Mets à jour l’URL quand l’utilisateur tape dans un champ input.

---

### Exercice 3 – Formulaire avec useReducer

👉 Crée un formulaire de login avec `useReducer`.

* State = `{ username, password, error }`.
* Actions possibles : `SET_FIELD`, `SET_ERROR`, `RESET`.
* Affiche une erreur si le mot de passe < 6 caractères.

---

### Exercice 4 – Context + useReducer

👉 Mets en place un **Todo Context**.

* State = liste de todos.
* Actions : `ADD_TODO`, `REMOVE_TODO`, `TOGGLE_TODO`.
* Fournis le state et le dispatch via Context.
* Consomme-le dans un composant enfant `TodoList`.

---

### Exercice 5 – Performance & useMemo

👉 Tu as une liste de 5000 utilisateurs.

* Affiche une recherche filtrée par nom.
* Optimise pour que le filtrage ne se recalcul pas à chaque frappe inutile.
* Utilise `useMemo` pour mémoriser la liste filtrée.

---

Veux-tu que je te prépare aussi les **corrections complètes (avec explications + version senior optimisée)** pour ces 10 exos, ou tu veux d’abord tenter de répondre par toi-même et je corrige ensuite ?

