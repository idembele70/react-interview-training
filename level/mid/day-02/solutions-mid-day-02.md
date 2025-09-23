====
QCM
====
Parfait 🚀 ! Tu as joué le jeu, voyons si tu as bien ciblé les bonnes réponses.

---

## ✅ Correction QCM intermédiaire++

### QCM 1 – Suspense & Data Fetching

👉 **Bonne réponse : B et D**

* a) ❌ Faux – la gestion d’erreurs se fait avec `ErrorBoundary`, pas `Suspense`.
* b) ✅ Vrai – affiche un fallback pendant qu’un composant async charge.
* c) ❌ Faux – `Suspense` ne remplace pas `useEffect` (encore utile).
* d) ✅ Vrai – côté serveur (React 18+), `Suspense` supporte le streaming (progressive rendering).

**👉 Ta réponse : B → Partiellement correct (il manquait D).**

---

### QCM 2 – useCallback vs useMemo

👉 **Bonne réponse : A**

* a) ✅ Exact – `useCallback` mémorise une fonction, `useMemo` une valeur.
* b) ❌ Faux – ils ne font pas "la même chose".
* c) ❌ Faux – tous deux se mettent à jour selon dépendances.
* d) ❌ Faux – gros impact sur les re-render si mal utilisés.

**👉 Ta réponse : A → Correct ✅**

---

### QCM 3 – React Router

👉 **Bonne réponse : A**

* a) ✅ `useParams()` → récupère `:id`.
* b) ❌ `useSearchParams()` → query string (`?q=react`).
* c) ❌ `useLocation()` → donne pathname et search, pas les params.
* d) ❌ Vieux React Router v5.

**👉 Ta réponse : A → Correct ✅**

---

### QCM 4 – Context & Performance

👉 **Bonne réponse : B**

* a) ❌ Faux – `useContext` peut être partout dans un composant.
* b) ✅ Vrai – tout changement dans le Provider re-render tous les consumers.
* c) ❌ Faux – il peut contenir n’importe quel objet/fonction.
* d) ❌ Faux – Redux n’est pas toujours "plus rapide".

**👉 Ta réponse : B, D → Faux (D est incorrect).**

---

### QCM 5 – Forms avancés

👉 **Bonne réponse : A et C**

* a) ✅ `useRef` → stocker un champ non contrôlé.
* b) ❌ Pas utile pour perfs, les inputs contrôlés utilisent `useState`.
* c) ✅ Manipuler le DOM directement (focus, reset).
* d) ❌ Pas un remplacement de `useState`.

**👉 Ta réponse : A, C → Correct ✅**

---

## 📊 Résultat final

* QCM 1 → ❌ (manquait D)
* QCM 2 → ✅
* QCM 3 → ✅
* QCM 4 → ❌ (D en trop)
* QCM 5 → ✅

👉 **Score : 3 / 5 (60%) – Même résultat que la série précédente 😅**
Tu maîtrises bien, mais il reste des subtilités sur `Suspense` et `Context`.

---

Veux-tu que je te corrige maintenant les **5 exos de code** (avec versions senior optimisées) ou tu préfères d’abord tenter d’implémenter avant ?

=====
CODE
=====
Parfait 👌 tu as codé les **5 exercices intermédiaires++**. Je vais te corriger avec un œil **senior** :

* ✅ bonnes pratiques (noms clairs, pas de dépendances inutiles, pas de re-render cachés)
* 🛠️ améliorations possibles (perfs, accessibilité, robustesse)
* 🚫 erreurs/mauvais patterns

---

## 📝 Correction & Version Senior

### 1. `UserList.jsx` avec Suspense

👉 Bon usage de Suspense + fallback, mais ton `userResource` est codé en mode **expérimental**.

* ⚠️ `use` n’est pas stable (React 19 seulement).
* ⚠️ Pattern "resource" fait perdre la possibilité d’annuler un fetch.
* ✅ Mieux : utiliser **React Query** ou un **cache maison** avec `use`.

💡 Version senior (similaire à ton pattern, mais plus robuste) :

```jsx
import { Suspense } from 'react';

const DELAY = 3000;

async function fetchUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/');
  if (!res.ok) throw new Error('Failed to fetch users');
  await new Promise(r => setTimeout(r, DELAY));
  return res.json();
}

const userResource = (() => {
  let promise;
  let data;
  return {
    read() {
      if (data) return data;
      if (!promise) {
        promise = fetchUsers().then(res => (data = res));
      }
      throw promise;
    }
  };
})();

function UserList() {
  const users = userResource.read();
  return (
    <ul>
      {users.map(u => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}

export default function Users() {
  return (
    <Suspense fallback={<h2>Loading users...</h2>}>
      <UserList />
    </Suspense>
  );
}
```

✅ Supprime `useMemo` inutile → `map` direct sur `users` (pas de recalcul tant que Suspense n’a pas résolu).

---

### 2. `Counter.jsx`

👉 Bon pattern avec `React.memo` ! Mais :

* ⚠️ `useCallback` dépend de `count` → inutile, car tu utilises l’update function `c => c + step`.
* ✅ Senior : dépend uniquement de `step`.

```jsx
export default function Counter() {
  const [count, setCount] = React.useState(0);
  const [step] = React.useState(1);

  const handleIncrement = React.useCallback(() => {
    setCount(c => c + step);
  }, [step]);

  return (
    <>
      <Display count={count} />
      <button onClick={handleIncrement}>+{step}</button>
    </>
  );
}

const Display = React.memo(({ count }) => <h2>{count}</h2>);
```

---

### 3. `UserDetail.jsx`

👉 Bon code, mais :

* ⚠️ tu oublies `signal` (`AbortController`) → pas passé dans `fetch`.
* ⚠️ `Error: error` → string littéral (tu voulais interpoler).
* ✅ Toujours nettoyer l’effet.

```jsx
export default function UserDetail() {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError('');
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      signal: controller.signal,
    })
      .then(res => {
        if (!res.ok) throw new Error('Not found');
        return res.json();
      })
      .then(setUser)
      .catch(err => {
        if (err.name !== 'AbortError') setError(err.message);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [id]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;
  if (!user) return null;

  return <h1>{user.name}</h1>;
}
```

---

### 4. `useReducer` Dynamic Form

👉 Bien structuré, mais :

* ⚠️ `useMemo` dépendance `[state]` → mauvais (cause re-render inutile).
* ✅ On ne met que `state.fields`.
* ✅ `dispatch` doit être stable → pas besoin de `useCallback` ici, mais tu aurais pu.

```jsx
export default function DynamicForm() {
  const [state, dispatch] = useReducer(reducer, initialStore);
  const [fields, setFields] = useState('');

  const handleChange = e => {
    const { value, name } = e.target;
    dispatch({ type: 'UPDATE_FIELD', name, value });
  };

  const addField = () =>
    dispatch({
      type: 'ADD_FIELD',
      field: { name: String(state.fields.length), value: '' },
    });

  const fieldItems = useMemo(
    () =>
      state.fields.map(field => (
        <div key={field.name}>
          <input type="text" name={field.name} value={field.value} onChange={handleChange} />
        </div>
      )),
    [state.fields]
  );

  const handleSubmit = () => {
    setFields(JSON.stringify(state.fields, null, 2));
    dispatch({ type: 'SUBMIT_FIELDS' });
  };

  return (
    <div>
      {fieldItems}
      <hr />
      <button onClick={addField}>Add a field</button>
      <button onClick={handleSubmit}>Submit</button>
      <hr />
      <pre>{fields}</pre>
    </div>
  );
}
```

---

### 5. `ThemeContext`

👉 Très bon code 👌. Quelques détails :

* ✅ `toggleTheme` devrait utiliser `setTheme(prev => prev === 'light' ? 'dark' : 'light')` pour éviter dépendance implicite.
* ✅ Styles devraient être mémorisés (`useMemo`).

```jsx
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const styles = useMemo(
    () => ({
      backgroundColor: theme === 'light' ? 'white' : 'black',
      color: theme === 'light' ? 'black' : 'white',
    }),
    [theme]
  );

  return (
    <button style={styles} onClick={toggleTheme}>
      Change to {theme === 'light' ? 'Dark' : 'Light'}
    </button>
  );
}
```

---

## 🚀 Bilan général

* Exo 1 → Bien, mais pattern expérimental `resource`.
* Exo 2 → Bien, mais dépendances inutiles.
* Exo 3 → Correct, manque `AbortController`.
* Exo 4 → Correct, mais dépendances `useMemo` mal ciblées.
* Exo 5 → Très bien, juste petit détail dans `toggleTheme`.

👉 Niveau **intermédiaire++ solide**, tu as juste quelques réflexes **senior** à intégrer (dépendances précises, nettoyage des effets, éviter `useMemo` abusif).

---

Tu veux que je t’écrive une **grille de notation par exo (score /5)** pour voir où tu te situes exactement sur ces 5 exos ?

