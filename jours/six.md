Parfait, voici un **nouveau set de 10 questions React niveau junior+++**, avec une combinaison de QCM et de défis de code, comme sur CoderPad.

---

### 🧠 **Questions à choix multiples (1 à 5)**

> ⚠️ Certaines questions ont plusieurs bonnes réponses.

---

#### **1. Que permet le `useEffect` avec un tableau de dépendances vide (`[]`) ?**

A. Exécuter un effet à chaque render
B. Exécuter l’effet une seule fois après le premier render
C. Nettoyer automatiquement l’effet à chaque render
D. Créer une boucle infinie

---

#### **2. Que fait `React.memo()` ?**

A. Empêche complètement le re-render du composant
B. Évite le re-render si les `props` sont inchangées
C. S’utilise uniquement avec les hooks
D. Peut améliorer les performances de composants “purs”

---

#### **3. Que retourne `useState()` ?**

A. Un objet `{ value, setValue }`
B. Un tableau `[value, setValue]`
C. Une fonction `setValue()` uniquement
D. Un tableau `[value]`

---

#### **4. Parmi les hooks suivants, lesquels déclenchent un re-render ?**

A. `useRef()`
B. `useState()`
C. `useEffect()`
D. `useReducer()`

---

#### **5. Quelle est la bonne façon de rendre une liste de composants en React ?**

A. `todos.forEach(todo => <TodoItem todo={todo} />)`
B. `todos.map(todo => <TodoItem key={todo.id} todo={todo} />)`
C. `for (let todo of todos) return <TodoItem todo={todo} />`
D. `todos.map((todo, i) => <TodoItem key={i} todo={todo} />)`

---

### 💻 **Défis de code (6 à 10)**

> Donne-moi ton code et je te fais un retour détaillé pour chacun.

---

#### **6. Compteur auto-réinitialisant**

Crée un composant `AutoResetCounter` qui compte jusqu’à 5, puis revient à 0 automatiquement toutes les secondes.

---

#### **7. Formulaire de saisie de nom complet**

Crée un composant `NameForm` qui contient deux inputs (prénom, nom) et un bouton. Quand on clique sur le bouton, le nom complet s’affiche (`"Bonjour, Prénom Nom"`).

---

#### **8. Liste de tâches avec suppression**

Crée un composant `SimpleTodoList` avec un tableau de 3 tâches. Chaque tâche s'affiche avec un bouton "Supprimer" qui l’enlève de la liste.

---

#### **9. Barre de chargement avec `useEffect`**

Crée une `ProgressBar` qui remplit une `div` de 0% à 100% en 10 secondes (10% par seconde).

---

#### **10. Input avec `useRef`**

Crée un composant `FocusInput` avec un champ texte et un bouton "Focus". Quand on clique sur le bouton, l’input prend automatiquement le focus grâce à `useRef`.

---

Quand t’es prêt, balance tes réponses dans ce format :

* Réponses aux QCM (1–5)
* Code pour chaque question 6 à 10

Je corrige et je t'envoie le feedback comme d'hab ✅🔍

==========
CORRIGÉ
==========
Yes Ibrahim 💪, très bon niveau ! Voici ton **feedback complet**, avec validation ✅, petites suggestions 💡, et **refactorings niveau senior** 🧠 pour t’inspirer d’un style pro/clean 🔥.

---

## ✅ **QCM (1 à 5)**

| Question | Ta réponse | ✅/❌ | Commentaire                                                                  |
| -------- | ---------- | --- | ---------------------------------------------------------------------------- |
| 1        | B          | ✅   | `useEffect(() => {}, [])` = exécuté **1 seule fois après le premier render** |
| 2        | B, D       | ✅   | `React.memo()` optimise le rendu si les props sont les mêmes                 |
| 3        | B          | ✅   | `useState()` retourne `[value, setValue]`                                    |
| 4        | B, D       | ✅   | `useState` et `useReducer` déclenchent un re-render. `useRef` ❌              |
| 5        | B          | ✅   | `.map()` avec une `key` unique, top !                                        |

**🎯 Score QCM : 5/5** – Tu maîtrises les bases et un peu +, solide 💥

---

## 💻 **Défis de code (6 à 10)**

---

### **6. `AutoResetCounter` ✅**

Super logique ! Petit oubli : `useEffect` tourne à chaque render 😬

#### 🔥 Refactoring senior :

```tsx
import { useEffect, useState } from 'react';

export function AutoResetCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const MAX = 5;
    const interval = setInterval(() => {
      setCount(prev => (prev < MAX ? prev + 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []); // ✅ [] pour éviter boucle infinie

  return <h1>{count}</h1>;
}
```

> 💡 Toujours ajouter `[]` si tu veux exécuter un `useEffect` **1 seule fois**.

---

### **7. `NameForm` ✅**

C’est nickel 👏 ! Juste le nom de variable `valuesToDisplay` peut être amélioré.

#### 🔥 Refactoring senior :

```tsx
export function NameForm() {
  const [values, setValues] = useState({ firstName: '', lastName: '' });
  const [fullName, setFullName] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const full = `${values.firstName} ${values.lastName}`.trim();
    setFullName(full);
    setValues({ firstName: '', lastName: '' });
  };

  return (
    <div>
      {fullName && <h1>Bonjour, {fullName}</h1>}
      <form onSubmit={handleSubmit}>
        <input name="firstName" value={values.firstName} onChange={handleChange} placeholder="Prénom" />
        <input name="lastName" value={values.lastName} onChange={handleChange} placeholder="Nom" />
        <button type="submit">Valider</button>
      </form>
    </div>
  );
}
```

> 💡 Pas besoin de `useState([])` pour une string. Et préfère `<button type="submit">` à `<input type="submit">`.

---

### **8. `SimpleTodoList` ✅**

Très bonne séparation composants 👏

#### 🔥 Refactoring senior :

```tsx
export function SimpleTodoList() {
  const [todos, setTodos] = useState([
    { id: 1, content: 'Milk' },
    { id: 2, content: 'Bread' },
    { id: 3, content: 'Pasta' }
  ]);

  const handleDelete = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  return (
    <ul>
      {todos.map(todo => (
        <SimpleTodoItem
          key={todo.id}
          content={todo.content}
          onDelete={() => handleDelete(todo.id)}
        />
      ))}
    </ul>
  );
}

function SimpleTodoItem({ content, onDelete }) {
  return (
    <li style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
      <span>{content}</span>
      <button onClick={onDelete}>Supprimer</button>
    </li>
  );
}
```

> 💡 Évite les balises `h2` dans les listes sauf pour la sémantique. Un simple `<span>` ou `<p>` suffit ici.

---

### **9. `ProgressBar` ✅**

T’as bien géré le clean-up, l’arrêt à 100%, GG 🫡

#### 🔥 Refactoring senior :

```tsx
export function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return prev;
        }
        return prev + 10;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: 250, height: 20, border: '1px solid #ccc' }}>
      <div
        style={{
          height: '100%',
          width: `${progress}%`,
          backgroundColor: 'green',
          transition: 'width 0.3s ease'
        }}
      />
    </div>
  );
}
```

> 💡 Ajoute une transition CSS pour un rendu fluide 😎

---

### **10. `FocusInput` ✅**

Fonctionnel et clair ! Good job

#### 🔥 Refactoring senior :

```tsx
export function FocusInput() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Votre nom d'utilisateur" autoComplete="username" />
      <button onClick={handleFocus}>Focus</button>
    </div>
  );
}
```

> 💡 Tu peux sécuriser `inputRef.current?.focus()` pour éviter les erreurs JS si jamais `ref` est null au render.

---

## 📊 Résumé de ton niveau

| Compétence                      | Évaluation                       |
| ------------------------------- | -------------------------------- |
| Hooks (`useState`, `useEffect`) | ✅ Parfaitement maîtrisé          |
| Formulaires                     | ✅ Très bien structuré            |
| Listes & rendering dynamique    | ✅ Complet                        |
| useRef et clean-up              | ✅ Géré avec attention            |
| Code style et logique           | 🔥 Très bon, petits + à intégrer |

---

### 🎁 Ready for next level ?

Tu veux que je t’envoie un set **niveau intermédiaire** (avec `useReducer`, lifting state, custom hooks, routing etc.) ou bien tu veux encore une série **junior+++** pour t’échauffer encore un peu ? 👀

Dis-moi ce que tu préfères !
