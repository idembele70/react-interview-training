====
QCM
====
🔥 Très bon boulot ! On corrige ton QCM intermédiaire+++ ensemble 👇

---

## ✅ QCM 1 – useTransition

**Ta réponse : B → Correct**

* a) ❌ Non, ça c’est l’update classique.
* **b) ✅ Oui, `useTransition` permet de marquer un update comme "non urgent" pour éviter de bloquer l’UI.**
* c) ❌ Ne bloque pas les renders enfants, juste diffère certains updates.
* d) ❌ Aucun rapport avec `useEffect`.

👉 **Validation : Bonne réponse.**

---

## ✅ QCM 2 – Suspense + fetch

**Ta réponse : B, C → Partiellement correct**

* a) ❌ On ne doit pas lancer une Promise directement dans le render classique (il faut un resource wrapper).
* **b) ❌ Non, Suspense pour data-fetch ne marche pas avec un fetch dans useEffect (c’est concurrent features).**
* **c) ✅ Oui, le composant peut être lazy loaded.**
* **d) ✅ Oui, pour gérer les erreurs il faut un `ErrorBoundary`.**

👉 **Réponse correcte : C, D**
👉 **Validation : Incomplète.**

---

## ✅ QCM 3 – useReducer + useContext

**Ta réponse : A, C → Correct**

* **a) ✅ Centraliser la logique et avoir un state global.**
* b) ❌ Mauvaise pratique, bien structuré on évite le rerender global.
* **c) ✅ Oui, partage des actions + dispatch global.**
* d) ❌ Pas une obligation de remplacer Redux.

👉 **Validation : Bonne réponse.**

---

## ✅ QCM 4 – Performance

**Ta réponse : A, C → Correct**

* **a) ✅ useMemo évite de recalculer la liste filtrée.**
* b) ❌ `useCallback` aide pour handlers, pas pour listes massives.
* **c) ✅ React.memo évite rerenders inutiles des enfants.**
* d) ❌ Mauvais pattern, tout dans `useState` ne règle rien.

👉 **Validation : Bonne réponse.**

---

## ✅ QCM 5 – Forms avancés

**Ta réponse : B, C → Correct**

* a) ❌ Trop verbeux avec `useState` pour chaque champ.
* **b) ✅ useReducer centralise la logique complexe.**
* **c) ✅ useRef est pratique pour gérer le focus/reset.**
* d) ❌ Valider à chaque render est coûteux, mieux vaut valider à l’événement.

👉 **Validation : Bonne réponse.**

---

# 📊 Bilan

* QCM 1 : ✅
* QCM 2 : ❌ (tu as oublié D et mis B à la place)
* QCM 3 : ✅
* QCM 4 : ✅
* QCM 5 : ✅

👉 **Score final : 4/5 (80%) – Niveau solide 💪**
Tu as juste loupé la subtilité de **Suspense + ErrorBoundary**.

---

Veux-tu que je corrige maintenant **les 5 exercices de code (intermédiaire+++) avec des versions clean + senior** comme on a fait précédemment ?

====
QCM
====
Parfait 🙌 tu es allé très loin dans la série **intermédiaire+++** !
Je vais te faire un retour **exercice par exercice** avec les points forts et les améliorations possibles (version *senior*).

---

## ✅ Exo 6 – `useTransition + Search`

👉 Points forts :

* Bonne utilisation de `useTransition` pour différer la recherche.
* `useMemo` + `React.memo` = parfait pour éviter rerender inutile.
* Code clair et structuré.

⚡ Améliorations :

* Ton `useEffect` a `[url]` comme dépendance → il n’a pas besoin de re-run (url est constant). → mets `[]`.
* `startTransition` doit recevoir une fonction synchrone, là tu as mis une `async function` dedans → techniquement ça marche mais c’est hors bonnes pratiques.
  → Lance ton async **en dehors**, puis mets le `setUsers` dans `startTransition`.

👉 Version senior (simplifiée + safe) :

```js
useEffect(() => {
  let ignore = false;

  async function loadUsers() {
    const data = await fetchUsers(url, searchTerm);
    if (!ignore) {
      startTransition(() => setUsers(data));
    }
  }
  loadUsers();

  return () => { ignore = true };
}, [url, searchTerm]);
```

---

## ✅ Exo 7 – `LazyPosts`

👉 Points forts :

* Bonne gestion du lazy + suspense.
* `useMemo` utilisé pour la liste.
* Fallback `Loading` réutilisé 👌.

⚡ Améliorations :

* Dans `fetchPosts`, tu fais `const data = response.json();` → il manque un `await`.
* `setLoading(false)` est répété → un seul `.finally()` suffit.
* Pour éviter un memory leak → utilise `AbortController`.

👉 Version senior (correction du bug d’`await`) :

```js
async function fetchPosts(url, signal) {
  const response = await fetch(url, { signal });
  if (!response.ok) return [];
  await new Promise(r => setTimeout(r, 2000));
  return await response.json();
}
```

---

## ✅ Exo 8 – `DynamicForm with useReducer`

👉 Points forts :

* Très belle structure avec `Map` + `useReducer`.
* Validation bien séparée (`isEmailInvalid`, `isPasswordInvalid`).
* `useMemo` + `React.memo` utilisés intelligemment.

⚡ Améliorations :

* Attention : `fields.values().every(...)` ne marche pas → `Map.prototype.values()` retourne un *iterator*, pas un tableau → tu dois faire `[...fields.values()]`.
* Reducer : tu modifies directement `field.value` dans le `Map` (mutation). → mauvaise pratique → mieux vaut cloner la `Map`.
* Capitalize de `FormField` → la regex est bizarre (`/[^a-zA-Z]/`) → ça va uppercasser les caractères spéciaux 😅.

👉 Exemple senior pour `UPDATE_FIELD` :

```js
case 'UPDATE_FIELD': {
  const newFields = new Map(fields);
  const field = { ...newFields.get(action.field.name), value: action.field.value };
  field.error = isEmailInvalid(field) ? 'Invalid email' 
              : isPasswordInvalid(field) ? 'Password too short' 
              : '';
  newFields.set(action.field.name, field);
  return { ...state, fields: newFields };
}
```

---

## ✅ Exo 9 – `Context + Reducer`

👉 Points forts :

* Context bien implémenté avec `dispatch`.
* `useContext` bien utilisé.
* `select` contrôlé.

⚡ Améliorations :

* Dans `SettingsPanel`, tu destructures comme ça :

  ```js
  const { value: { theme, language }, dispatch } = useContext(AppContext);
  ```

  Ça laisse supposer que tu stockes `{ value, dispatch }` dans le context → ce n’est pas très lisible.
  → Mieux vaut directement stocker `{ theme, language, dispatch }`.
* `p` avec `children={language}` → pas lisible, préfère `{language}`.

---

## ✅ Exo 10 – `Routing + Query Params + Filter`

👉 Points forts :

* Très bonne utilisation de `useSearchParams` + `useTransition`.
* `useMemo` pour la liste.
* `startTransition` bien placé dans `handleChange`.

⚡ Améliorations :

* Ton `useEffect` a `[]` comme dépendance → du coup si l’URL change (naviguer avec back/forward), les produits ne sont pas refetchés. → Ajoute `[q]`.
* Même remarque que pour exo 6 → `async` directement dans `startTransition` n’est pas idéal.
* Quand `q` est vide, tu pourrais charger la liste complète (`https://dummyjson.com/products`) au lieu de `search?q=`.

👉 Version senior du `useEffect` :

```js
React.useEffect(() => {
  let ignore = false;

  async function loadProducts() {
    const data = await fetchProducts(q);
    if (!ignore) setProducts(data);
  }
  loadProducts();

  return () => { ignore = true };
}, [q]);
```

---

# 📊 Bilan global

* **Très bonne maîtrise des hooks avancés 💪** (`useTransition`, `useMemo`, `useReducer`, `Suspense`, `Context`).
* Les principaux points à corriger sont :

  1. ⚡ **Ne pas mettre `async` dans `startTransition` directement.**
  2. ⚡ **Toujours cloner le state dans un reducer (pas de mutation).**
  3. ⚡ **Bien gérer les dépendances de `useEffect` (`[q]`, `[searchTerm]` etc.).**
  4. ⚡ Petites améliorations de lisibilité (destructuring clair, éviter les `children={...}` inutiles).

👉 Globalement tu es déjà au **niveau senior intermédiaire**, il te manque juste quelques *reflexes clean code + performance*.

---

Tu veux que je te prépare maintenant un **set "avancé" (niveau senior débutant) avec Suspense for data fetching + concurrent features + error boundaries + optimisation rendering (profiling, memoization fine-grained)** ?

