Parfait 🔥 ! Tu veux vraiment push ton React vers **intermédiaire++**.
Voici **10 nouveaux exercices** : 5 QCM + 5 coding challenges, avec focus sur : optimisation, Suspense, Context avancé, router, formulaires complexes, etc.

---

# 🔹 QCM (5 questions)

### QCM 1 – Suspense & Data Fetching

Que permet `React.Suspense` ?
a) Gérer automatiquement les erreurs de rendu.
b) Afficher un fallback pendant qu’un composant asynchrone charge.
c) Éviter le besoin de `useEffect` pour le fetch.
d) Supporter le streaming côté serveur.

---

### QCM 2 – useCallback vs useMemo

Quelle différence entre `useCallback` et `useMemo` ?
a) `useCallback` mémorise une fonction, `useMemo` mémorise une valeur calculée.
b) Ils font la même chose mais `useMemo` est plus rapide.
c) `useMemo` ne se met jamais à jour, `useCallback` oui.
d) Aucun impact sur les re-render.

---

### QCM 3 – React Router

Quelle est la bonne manière de récupérer les paramètres dynamiques d’URL (`/user/:id`) avec `react-router-dom v6` ?
a) `useParams()`
b) `useSearchParams()`
c) `useLocation()`
d) `props.match.params`

---

### QCM 4 – Context & Performance

Quel problème potentiel avec un `Context` global ?
a) Les `useContext` doivent toujours être dans `useEffect`.
b) Chaque changement du provider re-render tous les consommateurs.
c) Il ne peut contenir que des données primitives.
d) Il est plus lent que Redux.

---

### QCM 5 – Forms avancés

Pourquoi utiliser `useRef` dans un formulaire React ?
a) Pour stocker un champ non contrôlé.
b) Pour améliorer la performance des inputs contrôlés.
c) Pour manipuler directement le DOM (focus, reset).
d) Pour remplacer complètement `useState`.

---

---

# 🔹 Exercices de Code (5)

### Exercice 1 – Suspense + lazy loading

👉 Crée une app où :

* Tu as un composant `UserList` qui charge une liste de users via `fetch`.
* Tu utilises `React.lazy` + `Suspense` pour charger `UserList`.
* Pendant le chargement, affiche `"Loading users..."`.

---

### Exercice 2 – Optimisation avec `useCallback`

👉 Crée un composant `Counter` :

* Un bouton `+1` qui incrémente un compteur.
* Un composant enfant `Display` qui affiche la valeur.
* Optimise pour que `Display` ne re-render pas inutilement (utilise `React.memo` et `useCallback`).

---

### Exercice 3 – Routing avancé avec params

👉 Crée un router avec :

* `/users` qui liste les users.
* `/users/:id` qui affiche un `UserDetail`.
* Récupère `id` avec `useParams` et fais un fetch vers `https://jsonplaceholder.typicode.com/users/:id`.

---

### Exercice 4 – Form dynamique avec useReducer

👉 Crée un formulaire **multi-champs dynamiques** avec `useReducer`.

* State = `{ fields: [{ name: '', value: '' }] }`.
* Actions : `ADD_FIELD`, `REMOVE_FIELD`, `UPDATE_FIELD`.
* Bouton `"Ajouter un champ"` ajoute une nouvelle ligne.
* Chaque champ est éditable.

---

### Exercice 5 – Context avancé (Theme Context)

👉 Crée un `ThemeContext` avec 2 thèmes : `"light"` et `"dark"`.

* Fournis un `toggleTheme()` dans le provider.
* Utilise `useMemo` pour éviter de recréer l’objet `{theme, toggleTheme}` à chaque render.
* Dans un composant `ThemedButton`, affiche un bouton avec un style qui change selon le thème.

---

---

👉 Est-ce que tu veux que je te prépare directement les **corrections + versions senior** de cette nouvelle série (comme pour la précédente), ou tu veux d’abord tenter les exos et je corrige après ?

