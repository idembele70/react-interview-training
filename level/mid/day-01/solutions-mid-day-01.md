====
QCM
====
Parfait 🚀 tu as tenté les QCM, voyons ça en détail :

---

## ✅ Correction QCM

### QCM 1 – Custom Hook & performance

👉 **Bonne réponse : B**

* a) ❌ Faux – on ne "remplace pas tous les composants" par des hooks.
* b) ✅ Vrai – un custom hook sert à réutiliser une logique (fetch, formulaire, etc.).
* c) ❌ Faux – ça n’améliore pas les perfs "automatiquement", juste l’organisation.
* d) ❌ Faux – pas lié au fait d’utiliser `useEffect` sans dépendances.

**👉 Ta réponse : B → Correct ✅**

---

### QCM 2 – Fetch & AbortController

👉 **Bonnes réponses : A et D**

* a) ✅ Vrai – on annule la requête si le composant est démonté.
* b) ❌ Pas exactement – les leaks viennent du `setState` sur un composant démonté, pas du fetch lui-même.
* c) ❌ Faux – `fetch` marche sans AbortController.
* d) ✅ Vrai – ça évite le fameux warning *"Can't perform a React state update on an unmounted component"*.

**👉 Ta réponse : A, B → Incomplet ❌ (B est faux, tu as oublié D).**

---

### QCM 3 – Lazy Loading

👉 **Bonne réponse : B**

* a) ❌ Faux – pas côté serveur.
* b) ✅ Vrai – charge un composant à la demande.
* c) ❌ Faux – ça n’empêche pas les re-render.
* d) ❌ Faux – il ne précharge pas tout.

**👉 Ta réponse : B → Correct ✅**

---

### QCM 4 – Context vs useReducer

👉 **Bonnes réponses : A et D**

* a) ✅ Vrai – Context + Reducer = state global + logique centralisée.
* b) ❌ Faux – ça peut remplacer Redux *dans certains cas simples*, mais pas à 100 %.
* c) ❌ Faux – `useReducer` n’est pas obligatoire avec Context.
* d) ✅ Vrai – bonne combinaison pour partager un state avec dispatch.

**👉 Ta réponse : A, B → Incorrect ❌ (B est faux, tu as oublié D).**

---

### QCM 5 – useMemo et optimisation

👉 **Bonne réponse : B**

* a) ❌ Ça, c’est plutôt `useCallback`.
* b) ✅ Exact, `useMemo` = mémoriser un calcul coûteux.
* c) ❌ Faux – `useMemo` ≠ `useEffect`.
* d) ❌ Faux – ça peut *aider* indirectement si les props sont stables, mais pas garanti.

**👉 Ta réponse : B → Correct ✅**

---

## 📊 Résultat final

* QCM 1 → ✅
* QCM 2 → ❌ (incomplet)
* QCM 3 → ✅
* QCM 4 → ❌ (mauvaise réponse)
* QCM 5 → ✅

👉 **Score : 3 / 5 (60%) – Niveau intermédiaire validé, mais encore à consolider 🔥**

---

Veux-tu que je te prépare les **corrections des 5 exercices de code** aussi (avec versions senior optimisées), ou tu préfères d’abord tenter de coder et je corrige après comme pour les QCM ?
=====
CODE
=====
🔥 Excellent taf ! Tu as bien tenté les 5 exercices.
Je vais te faire un **retour point par point (style senior)** avec corrections et optimisations possibles.

---

## ✅ Exercice 6 – `useFetch` avec `AbortController`

Ton code est fonctionnel, mais :

* Tu réutilises `state` directement dans `setState({ ...state, loading: true })` → risque de stale state.
* Tu pourrais éviter les *magic values* (`[]`, `''`) avec un `initialState`.
* Bon usage d’`AbortController`. 👍

👉 Version senior :

```js
import { useState, useEffect } from 'react';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export default function useFetch(pathname) {
  const baseUrl = 'https://jsonplaceholder.typicode.com/';
  const url = new URL(pathname, baseUrl);

  const [state, setState] = useState(initialState);

  useEffect(() => {
    const controller = new AbortController();
    setState(prev => ({ ...prev, loading: true, error: null }));

    fetch(url.href, { signal: controller.signal })
      .then(res => {
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
        return res.json();
      })
      .then(data => setState({ data, loading: false, error: null }))
      .catch(err => {
        if (err.name !== 'AbortError') {
          setState({ data: null, loading: false, error: err.message });
        }
      });

    return () => controller.abort();
  }, [pathname]);

  return state;
}
```

---

## ✅ Exercice 7 – Routing avec Query Params

Très bonne utilisation de `useSearchParams` et `useMemo`. 👌

Améliorations :

* Ne pas mettre `searchTerm.get('q')` directement en dépendance (il crée une nouvelle ref à chaque render).
* Ajoute un `defaultValue` pour éviter `null`.
* Utilise `.toLowerCase()` pour un meilleur filtrage.

👉 Fix :

```js
const query = searchTerm.get('q') ?? '';

const filteredItems = React.useMemo(
  () => data?.filter(item => item.title.toLowerCase().includes(query.toLowerCase())),
  [data, query]
);
```

---

## ✅ Exercice 8 – Form avec `useReducer`

Ton reducer a un souci :

* `SET_FIELD` écrase tout le state (`{...rest}`), tu perds `username` ou `password`.
* Tu dispatches des objets trop chargés (`...values`).
* Bonne logique pour `RESET` et `SET_ERROR`.

👉 Fix (version clean) :

```js
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value, error: '' };
    case 'SET_ERROR':
      return { ...state, error: 'Password minimum length is 6.' };
    case 'RESET':
      return initialStore;
    default:
      return state;
  }
};

const handleChange = e => {
  const { name, value } = e.target;
  dispatch({ type: 'SET_FIELD', field: name, value });

  if (name === 'password' && value.length < 6) {
    dispatch({ type: 'SET_ERROR' });
  }
};
```

---

## ✅ Exercice 9 – Todo Context + Reducer

Très bien, mais il manque :

* La déclaration de `TodoContext` et `TodoProvider`.
* Ton `reducer` n’a pas de `default` → risque d’erreur.
* Id généré avec `Math.random()` pas idéal (non unique garanti).

👉 Fix (version senior) :

```js
import React, { createContext, useReducer, useContext, useState } from 'react';

const TodoContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.todo];
    case 'REMOVE_TODO':
      return state.filter(t => t.id !== action.id);
    case 'TOGGLE_TODO':
      return state.map(t => 
        t.id === action.id ? { ...t, status: !t.status } : t
      );
    default:
      return state;
  }
};

export const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(reducer, []);
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default function App() {
  return (
    <TodoProvider>
      <TodoList />
    </TodoProvider>
  );
}

function TodoList() {
  const { todos, dispatch } = useContext(TodoContext);
  const [title, setTitle] = useState('');

  const addTodo = e => {
    e.preventDefault();
    if (!title.trim()) return;
    const todo = { id: crypto.randomUUID(), title, status: false };
    dispatch({ type: 'ADD_TODO', todo });
    setTitle('');
  };

  return (
    <div>
      <form onSubmit={addTodo}>
        <input value={title} onChange={e => setTitle(e.target.value)} />
        <button type="submit" disabled={!title}>Add</button>
      </form>
      <ul>
        {todos.map(t => (
          <li key={t.id}>
            <span 
              onClick={() => dispatch({ type: 'TOGGLE_TODO', id: t.id })}
              style={{ textDecoration: t.status ? 'line-through' : 'none' }}
            >
              {t.title}
            </span>
            <button onClick={() => dispatch({ type: 'REMOVE_TODO', id: t.id })}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

---

## ✅ Exercice 10 – Performance & `useMemo`

Super taf : tu as déjà utilisé `useMemo` + `useRef` pour debounce ! 💯

Améliorations :

* Mets `data` en dépendance de `useMemo`.
* Tu peux remplacer `setTimeout` par `useDeferredValue` (React 18+).

👉 Version optimisée avec `useDeferredValue` :

```js
import { useState, useDeferredValue, useMemo } from 'react';
import useFetch from './hooks/useFetch';

export default function Users() {
  const { data = [], error, loading } = useFetch('https://randomuser.me/api/?results=5000');
  const [searchTerm, setSearchTerm] = useState('');
  const deferredTerm = useDeferredValue(searchTerm);

  const users = useMemo(
    () => data.filter(u => 
      u.login.username.toLowerCase().includes(deferredTerm.toLowerCase())
    ),
    [data, deferredTerm]
  );

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="Search username"
        disabled={loading || error}
      />
      {loading ? <h1>Loading...</h1>
        : error ? <h1>{error}</h1>
        : users.length ? <pre>{JSON.stringify(users, null, 2)}</pre>
        : <h1>No users found</h1>}
    </div>
  );
}
```

---

## 📊 Bilan

* Tu as **bien capté la logique intermédiaire React** : hooks persos, contexte, reducer, useMemo.
* Les corrections apportent surtout :

  * Éviter stale state.
  * Corriger reducer (bien gérer le `SET_FIELD`).
  * Bonnes pratiques : `crypto.randomUUID`, `useDeferredValue`.

👉 Résultat : **niveau intermédiaire confirmé** ✅🔥.

Veux-tu que je te prépare une **nouvelle série (niveau avancé)** avec suspense, error boundaries, server components (Next.js), et perf encore plus poussées ?

