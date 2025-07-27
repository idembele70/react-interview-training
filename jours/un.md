Bonne idée ! Je vais te préparer **10 questions style coding challenge** façon *CoderPad*, avec un mélange de **QCM** (pour les bases théoriques) et de **mini-exercices de dev** (où tu dois écrire du code React).

👉 **Plan des 10 questions :**

* **Questions 1 à 5 : QCM** (bases React, JSX, props, state, hooks)
* **Questions 6 à 10 : exercices pratiques** (petits composants à coder)

---

## ✅ **1. QCM - JSX et rendu**

Quel est le bon moyen d’afficher une variable `name` dans du JSX ?

A) `<h1>{name}</h1>`
B) `<h1>{{name}}</h1>`
C) `<h1>{name.toString}</h1>`
D) `<h1>${name}</h1>`

---

## ✅ **2. QCM - Props**

Quel est le rôle des *props* dans un composant React ?

A) Elles permettent de stocker des données qui changent dans le temps
B) Elles permettent de passer des données d’un composant parent à un composant enfant
C) Elles remplacent le `useState`
D) Elles ne peuvent contenir que des chaînes de caractères

---

## ✅ **3. QCM - State et Hooks**

Que retourne `const [count, setCount] = useState(0);` ?

A) Une variable `count` et une fonction `setCount` pour modifier `count`
B) Un objet avec `count` et `setCount`
C) Un tableau contenant uniquement la valeur initiale `0`
D) Rien, car `useState` doit être utilisé uniquement dans un class component

---

## ✅ **4. QCM - useEffect**

Quand `useEffect(() => { ... }, []);` s’exécute-t-il ?

A) À chaque re-render du composant
B) Une seule fois après le premier rendu
C) Seulement lorsque le state change
D) Jamais, si le tableau est vide

---

## ✅ **5. QCM - Clés uniques dans les listes**

Pourquoi faut-il mettre une clé (`key`) unique dans un `.map()` qui génère une liste d’éléments ?

A) Pour que React puisse identifier efficacement quels éléments ont changé
B) Parce que c’est obligatoire, sinon le code ne compile pas
C) Pour permettre à la liste de se recharger automatiquement toutes les 5 secondes
D) Pour trier automatiquement la liste

---

## ✅ **6. Exercice - Composant avec props**

Écris un composant **`Hello`** qui :

* prend une *prop* `name`
* affiche : **"Hello, \[name]!"**

Exemple : `<Hello name="Ibrahim" />` → affiche **Hello, Ibrahim!**

---

## ✅ **7. Exercice - Compteur simple avec useState**

Crée un composant **`Counter`** qui :

* affiche un nombre (`count`) qui commence à 0
* possède un bouton **"Incrémenter"** qui augmente `count` de +1 à chaque clic

---

## ✅ **8. Exercice - Liste dynamique**

Crée un composant **`TodoList`** qui :

* contient un `useState` avec une liste de tâches `["Manger", "Coder", "Dormir"]`
* affiche chaque tâche dans un `<li>`
* utilise une clé unique dans le `.map()`

---

## ✅ **9. Exercice - Filtrage avec input**

Crée un composant **`FilterList`** qui :

* a un champ input pour filtrer une liste de prénoms `["Alice", "Bob", "Charlie"]`
* affiche uniquement les prénoms qui contiennent le texte tapé

---

## ✅ **10. Exercice - useEffect et API simulée**

Crée un composant **`Users`** qui :

* utilise `useEffect` pour simuler un appel API avec `setTimeout` (2s) qui charge une liste de noms d’utilisateurs `["John", "Jane", "Jack"]`
* affiche "Chargement..." pendant l’attente, puis la liste une fois chargée

---

### 👉 **Ta mission :**

1. **Réponds d’abord aux QCM (1 à 5).**
2. **Puis fais les exercices (6 à 10) en copiant/collant ton code ici.**
   Je te corrigerai et je t’expliquerai où améliorer si besoin.

---

💡 **On commence ?** Dis-moi si tu veux que je te donne aussi **un fichier de départ style CoderPad (React + imports déjà prêts)** pour les exercices, ça peut t’aider.

==============
CORRIGÉ
==============
🔥 Super taf Ibrahim ! Je vais corriger, noter et te donner **les pistes pour coder "senior"** (meilleures pratiques, style propre et optimisé).

---

## ✅ **Correction des QCM (Questions 1 à 5)**

| Question | Ta réponse | Réponse correcte | Commentaire                             |
| -------- | ---------- | ---------------- | --------------------------------------- |
| **1**    | ✅ A        | ✅ A              | Parfait.                                |
| **2**    | ✅ B        | ✅ B              | Nickel.                                 |
| **3**    | ✅ A        | ✅ A              | Nickel.                                 |
| **4**    | ✅ B        | ✅ B              | Bien compris le cycle de vie.           |
| **5**    | ✅ A        | ✅ A              | Exact, la clé sert au diffing de React. |

👉 **Note QCM : 5/5 – parfait !**

---

## ✅ **Correction des Exercices (Questions 6 à 10)**

### **6. `Hello`**

✅ **Fonctionnel mais améliorable.**

❌ **Problème :** Retourner une **string** dans un composant React (`return "Hello..."`) n’est pas l’idéal. Il faut retourner du **JSX**.

✔ **Version corrigée :**

```jsx
export const Hello = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};
```

**Refactor Senior :**

* Utiliser une **arrow function concise** :

```jsx
export const Hello = ({ name }) => <h1>Hello, {name}!</h1>;
```

---

### **7. `Counter`**

✅ **Ton code est bon.**

✔ **Refactor Senior :**

* Utiliser une **callback directe** si simple :

```jsx
export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(c => c + 1)}>+</button>
    </>
  );
};
```

* Bonus senior : rendre le bouton plus explicite (ex: `Incrémenter` au lieu de `+`).

---

### **8. `TodoList`**

✅ **OK mais améliorable.**

❌ **Problème :** L’utilisation de `index` comme `key` n’est pas conseillée (problèmes de réordonnancement). Ici ça va, car liste statique, mais en réel → préférer un identifiant unique.

✔ **Version corrigée (senior) :**

```jsx
export const TodoList = () => {
  const [todos] = useState([
    { id: 1, text: "Manger" },
    { id: 2, text: "Coder" },
    { id: 3, text: "Dormir" }
  ]);

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};
```

---

### **9. `FilterList`**

✅ **Très bien, ton code fonctionne.**

✔ **Refactor Senior :**

1. **Ne pas dupliquer l’état (`names` vs `nameList`)** → on filtre directement au rendu.
2. **Utiliser `toLowerCase()` pour rendre la recherche insensible à la casse.**

```jsx
export const FilterList = () => {
  const names = ["Alice", "Bob", "Charlie"];
  const [value, setValue] = useState("");

  const filteredNames = names.filter(name =>
    name.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <>
      <input
        type="search"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <ul>
        {filteredNames.map((name, i) => (
          <li key={i}>{name}</li>
        ))}
      </ul>
    </>
  );
};
```

---

### **10. `Users`**

✅ **Très bon travail !**

✔ **Refactor Senior :**

* **Nettoyage du setTimeout** avec `clearTimeout` dans `useEffect` (bonne pratique).
* **Mettre le tableau d’utilisateurs en dehors du setTimeout** pour éviter de le recréer à chaque rendu.
* **Code plus concis**.

```jsx
export const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const TIME = 2000;
    const timeout = setTimeout(() => {
      setUsers(["John", "Jane", "Jack"]);
      setLoading(false);
    }, TIME);

    return () => clearTimeout(timeout); // nettoyage
  }, []);

  if (loading) return <p>Chargement...</p>;

  return (
    <ul>
      {users.map((user, i) => (
        <li key={i}>{user}</li>
      ))}
    </ul>
  );
};
```

---

## 🏆 **NOTE GLOBALE**

* **QCM : 5/5**
* **Exercices : 4.5/5** (seul le `Hello` était à corriger, le reste bien)

✅ **TOTAL : 9.5/10 → Excellent pour un niveau Junior !**

---

## 🧠 **Pour coder comme un "Senior React"**

1. **Toujours retourner du JSX** (même pour des textes simples).
2. **Minimiser l’état** : ne stocker que ce qui change réellement (`FilterList` optimisé).
3. **Nettoyage systématique des effets** (`clearTimeout`, `clearInterval`).
4. **Clés uniques stables** : préférer des `id` aux `index`.
5. **Arrow functions concises et lisibles**.
6. **Propreté du code** : espacement, noms explicites, évite de déclarer des variables inutiles.

---
