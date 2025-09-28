Parfait 🔥 ! On passe maintenant à un **nouveau set React niveau intermédiaire+++**, avec plus de challenge : hooks avancés, optimisation, forms complexes, lazy loading, routing dynamique, suspense, performance, contexte, useReducer, useMemo, useCallback.

Voici **10 exercices** : 5 QCM + 5 exercices de code.

---

# 🔹 QCM (5 questions)

### QCM 1 – useTransition

Que permet `useTransition` ?
a) Rendre un state update prioritaire
b) Définir un update "non urgent" pour différer le rendu
c) Bloquer le render d’un composant enfant
d) Remplacer `useEffect`

---

### QCM 2 – Suspense + fetch

Quand tu mets un composant dans `<Suspense fallback={<Loading />}>` pour le data fetching, que faut-il respecter ?
a) Le composant doit lancer une Promise dans son render.
b) On peut utiliser useEffect pour fetcher.
c) Le composant peut être lazy loaded.
d) L’erreur doit être attrapée avec ErrorBoundary.

---

### QCM 3 – useReducer + useContext

Pourquoi combiner `useReducer` + `Context` ?
a) Pour avoir un state global immuable et centralisé
b) Pour forcer tous les enfants à se re-render à chaque dispatch
c) Pour partager des actions et un dispatch global
d) Pour remplacer Redux dans tous les projets

---

### QCM 4 – Performance

Tu as un composant qui reçoit 5000 items. Quelle pratique permet d’éviter des re-renders inutiles lors d’un filtre ?
a) useMemo sur la valeur filtrée
b) useCallback sur le handler d’input
c) React.memo sur le composant enfant
d) Tout mettre dans useState

---

### QCM 5 – Forms avancés

Pour gérer un formulaire complexe avec validation dynamique sur plusieurs champs :
a) On utilise useState pour chaque champ
b) On peut utiliser useReducer pour centraliser la logique
c) useRef peut servir pour focus et reset des champs
d) useEffect peut valider tous les champs à chaque render

---

# 🔹 Exercices de Code (5)

### Exercice 1 – useTransition + Search

* Crée un composant `BigListSearch`.
* Affiche 5000 items fictifs (users).
* Input pour filtrer les items.
* Utilise `useTransition` pour rendre l’update "non urgent" et montrer un `isPending` loading state.

---

### Exercice 2 – Suspense + lazy fetch

* Crée un composant `LazyPosts` qui fetch des posts depuis `https://jsonplaceholder.typicode.com/posts`.
* Utilise `React.lazy` + `Suspense` pour le charger.
* Affiche un fallback "Loading posts..." pendant le fetch.

---

### Exercice 3 – Form dynamique avec useReducer

* Formulaire multi-champs : email + mot de passe + téléphone + champs dynamiques.
* State géré via useReducer `{ fields: [{name, value, error}] }`.
* Validation : email doit contenir "@", mot de passe > 6 caractères.
* Bouton submit désactivé si un champ est invalide.

---

### Exercice 4 – Context + Reducer + Theme + Langue

* Crée un `AppContext` qui contient `{ theme, language, dispatch }`.
* `theme` = "light"/"dark", `language` = "fr"/"en".
* Actions : `TOGGLE_THEME`, `SET_LANGUAGE`.
* Fournis via Context et consomme dans un composant `SettingsPanel`.
* Utilise `useMemo` pour éviter re-création de value à chaque render.

---

### Exercice 5 – Routing + Query Params + Filter

* Page `/products?q=xxx`.
* Récupère `q` avec `useSearchParams`.
* Fetch les produits depuis `https://dummyjson.com/products`.
* Filtre les produits côté client avec `useMemo`.
* Affiche "No products found" si aucun produit correspond.

---

Si tu veux, je peux te **préparer directement la correction complète + version senior optimisée** pour ces 10 exercices, comme pour les sets précédents.

Veux-tu que je fasse ça maintenant ?

