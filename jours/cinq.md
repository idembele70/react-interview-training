Parfait 💪 ! On part donc sur un **nouveau set React niveau intermédiaire**, spécial *junior ➜ confirmé*, toujours au format Coding Challenge :

---

## 🧠 Niveau intermédiaire — Set de 10 questions React.js

### 🧩 **QCM (Questions 1 à 5)**

**Réponds par A / B / C / D ou plusieurs lettres quand nécessaire.**

---

### **1. Que fait `React.memo()` ?**

A. Empêche le composant de se re-render complètement
B. Compare les props et empêche un re-render inutile
C. S’applique uniquement sur les hooks
D. Optimise le rendu d’un composant enfant

---

### **2. Pourquoi `useCallback` est utile ?**

A. Pour appeler une fonction plus vite
B. Pour éviter de recréer une fonction à chaque render
C. Pour créer des fonctions asynchrones
D. Pour éviter de re-render un composant enfant dépendant de cette fonction

---

### **3. À quoi sert `useMemo` ?**

A. À exécuter une fonction à chaque render
B. À mémoriser la valeur retournée par une fonction
C. À stocker une fonction sans la relancer
D. À remplacer `useEffect`

---

### **4. Quelles affirmations sont vraies ?**

A. `useEffect` peut retourner une fonction de nettoyage
B. `useRef` peut déclencher un re-render
C. `useReducer` est utile pour gérer du state complexe
D. `useEffect` est appelé avant le premier render

---

### **5. Quels hooks permettent d’optimiser les performances ?**

A. `useState`
B. `useRef`
C. `useMemo`
D. `useCallback`

---

### 💻 **Exercices de code (6 à 10)**

**Fais le code et colle-le ici pour correction.**

---

### **6. `Timer`**

Crée un composant `Timer` qui affiche le nombre de secondes écoulées depuis que le composant est monté. Utilise `useEffect` et `setInterval`. Stoppe le timer à 10 secondes.

---

### **7. `TodoList`**

Crée un composant avec une liste d’objets `todos`, chaque objet ayant `id`, `label`, et `done`. Affiche les items, et un bouton pour chaque ligne qui bascule l'état `done`. Utilise `useState` et un `map`.

---

### **8. `InputFocusTracker`**

Affiche un champ texte et un message en dessous :

* "Focus actif" si l’input est focus
* "Pas de focus" sinon
  Utilise `useRef` et `onFocus` / `onBlur`.

---

### **9. `ExpensiveCalc`**

Crée un champ pour entrer un chiffre `x`, et affiche `x ** 5`. Utilise `useMemo` pour éviter de recalculer à chaque touche tapée si `x` ne change pas.

---

### **10. `DebouncedSearch`**

Crée un champ texte simulant une recherche.

* À chaque frappe, affiche "Recherche en cours..."
* Après 500ms sans nouvelle frappe, affiche "Résultat pour : <query>"
  Utilise `useEffect` et `setTimeout`.

---

Quand t’as tout répondu, je corrige direct ton code et je te propose un feedback niveau pro 💼

Tu peux y aller ✍️

===========
CORRIGÉ
===========
Excellent taf Ibrahim, sérieux, t’as bien géré ce set 💯
Je te fais un retour complet ci-dessous avec suggestions d’amélioration niveau *pro/intermédiaire avancé* pour te faire progresser encore plus vite :

---

## ✅ **QCM (1 à 5)**

| Question | Réponse attendue | Ta réponse | ✔️ / ❌ | Commentaire                                                              |
| -------- | ---------------- | ---------- | ------ | ------------------------------------------------------------------------ |
| 1        | **B, D**         | B          | ✅🟡    | Parfait pour B. D est aussi juste : `React.memo()` optimise les enfants. |
| 2        | **B, D**         | B          | ✅🟡    | Même chose ici : `useCallback` + `memo` = 🔥 sur les children.           |
| 3        | B                | B          | ✅      | Nickel.                                                                  |
| 4        | A, C             | A, C       | ✅      | Bien vu.                                                                 |
| 5        | C, D             | C, D       | ✅      | Juste.                                                                   |

### 🔹Note QCM : 4.5 / 5

T’as bien capté les hooks d’optimisation. Juste à garder en tête que `React.memo`, `useCallback` et `useMemo` s'utilisent ensemble pour booster les perfs.

---

## ✅ **Exercices de code (6 à 10)**

---

### **6. `Timer`** ✅

🔹 Très propre. Bonne structure, bonne gestion du `clearInterval`, super niveau timing.

📌 **Mini-amélioration** : tu pourrais inverser le `if` pour *ne pas* faire `clearInterval()` à l'intérieur du `setState`.

```js
if (t >= MAX_TIME) {
  clearInterval(interval);
  return t;
}
return t + INCREMENT;
```

---

### **7. `TodoList`** ✅

🔹 Fonctionnel, simple, logique ! J’aime bien la logique locale de `done` dans chaque `TodoItem`.

📌 **Alternative plus réaliste côté data globale :**
Gérer `todos` *au niveau parent*, avec `setTodos`, pour que le state soit centralisé.

```js
const [todos, setTodos] = React.useState([...])

const toggleDone = (id) => {
  setTodos(todos => todos.map(todo => 
    todo.id === id ? { ...todo, done: !todo.done } : todo
  ))
}
```

Ça donne un système plus cohérent si tu veux synchroniser avec une API, etc.

---

### **8. `InputFocusTracker`** ✅

✔️ Nickel en version simple.

> 🎯 **Pourquoi je t’ai parlé de `useRef` ?**

C’était pour explorer une version **sans state** : plus légère si t’as plein de champs à suivre.

### 🔁 **Version alternative avec `useRef`:**

```jsx
export const InputFocusTracker = () => {
  const inputRef = React.useRef();
  const [isFocus, setFocus] = React.useState(false);

  React.useEffect(() => {
    const handleFocus = () => setFocus(true);
    const handleBlur = () => setFocus(false);

    const input = inputRef.current;
    input.addEventListener('focus', handleFocus);
    input.addEventListener('blur', handleBlur);

    return () => {
      input.removeEventListener('focus', handleFocus);
      input.removeEventListener('blur', handleBlur);
    };
  }, []);

  return (
    <>
      <h1>{isFocus ? "Focus actif" : "Pas de focus"}</h1>
      <input ref={inputRef} type="text" />
    </>
  )
}
```

⚠️ Moins courant en React, mais intéressant pour comprendre comment bosser *hors cycle de render*.

---

### **9. `ExpensiveCalc`** ✅

✔️ Parfaitement structuré, `useMemo` bien placé.

📌 Bonus pro : tu peux simuler une *vraie* fonction lourde :

```js
function slowPower(x) {
  console.log('Recalcul en cours...');
  let result = x;
  for (let i = 1; i < 1e7; i++) {
    result += Math.sqrt(i) * x;
  }
  return result;
}
const xCalcul = React.useMemo(() => slowPower(x), [x])
```

---

### **10. `DebouncedSearch`** ✅🔥

🎯 Clairement maîtrisé ! Super usage de `useRef` pour gérer un timer.

📌 Bonus UX : gérer aussi `value.trim()` pour ignorer les espaces ou vider la recherche :

```js
if (!e.target.value.trim()) {
  setSearching(false);
  return;
}
```

---

## 🔚 Résumé final :

| Section   | Note sur 5      |
| --------- | --------------- |
| QCM       | 4.5             |
| Code      | 5               |
| **Total** | **9.5 / 10** 🎉 |

### 🏆 Niveau atteint : **intermédiaire solide**

Tu commences à avoir une vraie maîtrise des hooks, de l’état local/global, de l’optimisation. Si tu continues comme ça, t’es prêt pour :

* des patterns avancés (`custom hooks`, `useReducer` + `context`, `Form` libs)
* des tests unitaires (`Jest`, `React Testing Library`)
* de la perf (`memo`, `lazy`, `Suspense`, etc.)

---

Tu veux un prochain set sur :

* `custom hooks` ?
* `context + reducer` ?
* `testing` ?
* ou un mini challenge de projet (genre mini app) ?
