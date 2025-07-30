Let’s go Ibrahim 👊 Voici ton **4ᵉ set de 10 questions React niveau Junior+++**, pour continuer à forger des bons réflexes : compréhension fine des hooks, logique de composants, événements, render conditionnel, props complexes, etc.

---

### ✅ **QCM (1 à 5)** – concepts de plus en plus solides à maîtriser

---

## **1. QCM – `useEffect` dépendances**

Que se passe-t-il si tu oublies de passer le tableau de dépendances `[]` à `useEffect` ?

A) Le `useEffect` s'exécute une seule fois
B) Le `useEffect` ne s’exécute jamais
C) Le `useEffect` s’exécute à chaque re-render
D) Le code crash

---

## **2. QCM – Événement React**

Dans une fonction `onClick={handleClick}`, que contient l’argument `e` de `handleClick(e)` ?

A) Un élément HTML pur
B) Un objet d’erreur
C) Un événement React synthétique
D) Une fonction `preventDefault` uniquement

---

## **3. QCM – Props par défaut**

Quelle est la bonne manière de définir une valeur par défaut pour une prop `name` dans une fonction React ?

A) `const Component = (name = "Guest") => {}`
B) `Component.defaultProps = { name: "Guest" }`
C) `const Component = ({ name = "Guest" }) => {}`
D) Les props doivent toujours être obligatoires

---

## **4. QCM – Passage de fonction via props**

Pourquoi passe-t-on une fonction `onDelete` en prop à un composant enfant ?

A) Pour permettre à l’enfant de supprimer lui-même un composant parent
B) Pour transmettre des événements du parent à l’enfant
C) Pour que l’enfant puisse appeler une action définie dans le parent
D) Pour utiliser `useEffect` dans l’enfant

---

## **5. QCM – useState et callback**

Pourquoi utiliser la forme callback dans `setState`, comme `setCount(c => c + 1)` ?

A) C’est plus court que `count + 1`
B) Cela permet de s'assurer de toujours avoir la dernière valeur
C) Ça évite un `useEffect`
D) Ce n’est utile qu’en React class

---

---

### ✅ **Exercices pratiques (6 à 10)** – mini-défis 🧠

---

## **6. Exercice – `UserCard` avec props**

Crée un composant `UserCard` qui prend les props suivantes :

* `name` (string), `age` (number), `job` (string)
* affiche :

```txt
Nom : Ibrahim  
Âge : 24  
Métier : Développeur
```

---

## **7. Exercice – `LikeButton`**

Crée un composant `LikeButton` qui :

* affiche un compteur de likes (`0` au départ)
* un bouton "❤️ Like" augmente de +1 à chaque clic

---

## **8. Exercice – `ShowPassword`**

Crée un champ `input` de type mot de passe avec un bouton "Afficher" qui :

* alterne entre type `password` et `text`
* met à jour dynamiquement l’affichage

---

## **9. Exercice – `ColorBox`**

Crée un composant `ColorBox` qui :

* prend une prop `color`
* affiche un carré de 100x100px avec la couleur passée
* si aucune prop fournie, couleur par défaut = `"gray"`

---

## **10. Exercice – `Greeting` dynamique**

Crée un composant `Greeting` avec :

* un input texte qui met à jour en temps réel une variable `name`
* affiche : `Bonjour, [name] !`
  (si vide, ne rien afficher)

---

---

### 🔥 À toi de jouer :

1. Commence par me donner tes **réponses QCM (1 à 5)**
2. Puis code les **exos 6 à 10**
   👉 Je te corrige et je te propose les **refactors + best practices niveau confirmé** comme d’hab 😎

Prêt ?

========
Corrigé
========
Parfait Ibrahim, t’as sorti un set propre, bien structuré 👇

---

## ✅ **Correction QCM (1 à 5)**

|  # | Ta Réponse | Correction   | Commentaire                                                                                          |
| -: | ---------- | ------------ | ---------------------------------------------------------------------------------------------------- |
|  1 | ✅ C        | ✅ **C**      | Sans dépendance, `useEffect` tourne **à chaque render**, ce qui peut vite être critique.             |
|  2 | ✅ C        | ✅ **C**      | `e` est un **SyntheticEvent** React, avec `preventDefault`, `target`, etc.                           |
|  3 | ✅ C        | ✅ **C**      | ✅ `({ name = "Guest" })` est la **bonne pratique moderne**, `defaultProps` est obsolète pour les FC. |
|  4 | ✅ B, C     | ✅ **B et C** | Bien vu : ça **connecte les composants**, pour faire "remonter" des actions.                         |
|  5 | ✅ B        | ✅ **B**      | Utiliser la forme callback évite les erreurs de synchro de state. Best practice.                     |

🎯 **5/5** propre, et t’es à l’aise sur les subtilités.

---

## ✅ **Correction exercices (6 à 10)**

### **6. `UserCard`**

✔️ Propre, lisible, JSX clean.

```jsx
export const UserCard = ({ name, age, job }) => (
  <>
    <h2>Nom : {name}</h2>
    <h2>Âge : {age}</h2>
    <h2>Métier : {job}</h2>
  </>
)
```

💡 *Mini-refactor (optionnel)* : tu peux encapsuler dans une `<div>` ou une `card` avec du style.

---

### **7. `LikeButton`**

✔️ Nickel, t’as utilisé la bonne syntaxe callback `setCount(c => c + 1)`.

---

### **8. `ShowPassword`**

✔️ Fonctionnel et concis.

💡 Suggestion : si tu veux améliorer encore l’UX :

```jsx
<button>{type === 'password' ? 'Afficher' : 'Cacher'}</button>
```

---

### **9. `ColorBox`**

✔️ Bien vu pour la **valeur par défaut** en destructuration (`color = 'gray'`) et le style inline.

---

### **10. `Greeting`**

✔️ Tu maîtrises le `&&` en render conditionnel, et l’input contrôlé avec `onChange`.

🧠 Bonus : t’aurais pu ajouter un `placeholder` comme `'Entrez votre nom'`, mais ça reste du polish.

---

## 🏁 Résumé global

* **QCM maîtrisés à 100%** ✅
* **10/10 en code**, t’as clairement le niveau pour **enchaîner sur du niveau intermédiaire** avec :

  * `lifting state up` (remonter le state entre composants)
  * `composition avancée` (`children`, `cloneElement`, etc.)
  * `useEffect` combiné à des API / timers / subscriptions
  * `custom hooks` 💪

---

Tu veux un **set niveau intermédiaire** (avec des hooks custom, pattern container/presenter, ou optimisations `memo`, `useCallback`) ?
Ou tu préfères encore un 5ᵉ set en **junior +++ pour bien tout fixer** ?
