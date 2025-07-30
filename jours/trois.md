Parfait, Ibrahim 👌 Voici un **3ᵉ set de 10 challenges React niveau Junior+++**, qui va te pousser un peu plus loin sur les bases solides :

* 🎯 **5 QCM** sur les patterns qu'on veut que tu comprennes (lifting state up, event bubbling, composants réutilisables, controlled/uncontrolled, keys avancées)
* 💻 **5 exercices pratiques** avec un peu plus de réflexion (lifting state, logique d'affichage, composants dynamiques...)

---

## ✅ **1. QCM - Composants réutilisables**

Quel est l’intérêt principal de créer un composant réutilisable dans React ?

A) Éviter d’écrire du HTML
B) Améliorer la performance réseau
C) Réduire le code dupliqué et faciliter la maintenance
D) Pouvoir utiliser `useEffect` dans tous les cas

---

## ✅ **2. QCM - Event bubbling (propagation)**

Dans React, si deux boutons sont imbriqués, que se passe-t-il lors d’un `onClick` sur le bouton intérieur ?

A) Seul le bouton cliqué est impacté
B) Le click remonte aussi au parent (event bubbling)
C) Le parent est ignoré par React
D) L'événement se propage vers les composants enfants

---

## ✅ **3. QCM - `key` dans `.map()`**

Pourquoi faut-il éviter d’utiliser l’**index** comme `key` dans un `.map()` ?

A) Cela ralentit React
B) Cela empêche l’utilisation de `useEffect`
C) Cela peut poser des bugs de re-render si la liste change dynamiquement
D) Ce n’est pas autorisé en React 18

---

## ✅ **4. QCM - Controlled vs Uncontrolled**

Quel est l’exemple d’un **composant non contrôlé** ?

A) `<input value={text} onChange={...} />`
B) `<textarea value={value} />`
C) `<input ref={inputRef} />`
D) `<select value="A" onChange={...} />`

---

## ✅ **5. QCM - Props.children**

Quelle est la bonne manière de créer un composant `Card` qui affiche ce qu'on met à l’intérieur ?

A) `return <div>{props.content}</div>`
B) `return <div>{children}</div>`
C) `return <div>{props.children}</div>`
D) `return <Card>{text}</Card>`

---

---

## ✅ **6. Exercice - Composant réutilisable `Button`**

Crée un composant `Button` qui :

* prend une prop `label` (texte à afficher)
* prend une prop `onClick` (fonction à appeler)
* affiche un `<button>` stylé avec `label`

---

## ✅ **7. Exercice - Deux compteurs synchronisés**

Crée un composant `DoubleCounter` qui affiche **2 compteurs**, mais **les deux sont liés** :

* Quand on clique sur "Incrémenter", **les deux** augmentent ensemble
* Utilise le *lifting state up* (un seul `useState` partagé entre deux `Counter`)

---

## ✅ **8. Exercice - Composant `AlertBox` avec props.children**

Crée un composant `AlertBox` qui :

* rend un `<div>` avec une bordure rouge
* affiche **ce qu’on met entre `<AlertBox>...</AlertBox>`**

Exemple :

```jsx
<AlertBox>
  Attention : action irréversible.
</AlertBox>
```

---

## ✅ **9. Exercice - Liste de boutons dynamiques**

Crée un composant `ButtonList` qui :

* affiche une liste de boutons avec des labels `['Ok', 'Cancel', 'Retry']`
* quand on clique sur un bouton, affiche une alerte avec son nom

---

## ✅ **10. Exercice - Changement de thème clair/sombre**

Crée un composant `ThemeSwitcher` qui :

* a un état `theme` (`light` ou `dark`)
* applique dynamiquement une classe CSS sur un `div` contenant un texte
* un bouton permet de basculer entre les deux thèmes

---

### 👉 À toi de jouer !

Donne-moi :

1. Tes réponses aux QCM 1 à 5
2. Ton code pour les exos 6 à 10
   Et je te fais la **correction détaillée + refactors niveau senior** comme d'hab 👌

Prêt ? 💻

===========
CORRIGÉ
===========
Excellent travail Ibrahim 👊 Tu montes clairement en niveau !
Voici la **correction complète** avec note, explication et **refactorings “React senior”** comme promis 💪

---

## ✅ QCM (1 à 5)

| # | Réponse donnée | Bonne réponse | ✅                                                                                | Commentaire |
| - | -------------- | ------------- | -------------------------------------------------------------------------------- | ----------- |
| 1 | ✅ C            | ✅ C           | Oui ! Réutilisabilité = DRY, clean code                                          |             |
| 2 | ✅ B            | ✅ B           | Parfait : l’event “bubblé” remonte au parent                                     |             |
| 3 | ✅ C            | ✅ C           | Good ! L’index en `key` = bugs si on modifie la liste                            |             |
| 4 | ✅ C            | ✅ C           | Exact : `ref` = composant **non contrôlé**                                       |             |
| 5 | ✅ B & C        | ✅ C           | Seule **C** est correcte, `props.children` est nécessaire (B n'est pas déclarée) |             |

### ✅ **Note QCM : 4.5 / 5**

(Tu as compris `children`, mais B était incorrecte en syntaxe React pure)

---

## ✅ Exercice 6 — `Button`

```jsx
export const Button = function(props) {
  return <button type="button" onClick={props.onClick}>{props.label}</button>
}
```

✅ Fonctionne parfaitement
🔁 **Refactor "senior" :** déstructuration + concise

```jsx
export const Button = ({ label, onClick }) => (
  <button type="button" onClick={onClick}>{label}</button>
);
```

---

## ✅ Exercice 7 — `DoubleCounter`

Super ! Tu as appliqué le **lifting state up** 🔥

```jsx
export const Counter = ({ count, onClick, children }) => (
  <>
    <h1>{count}</h1>
    <button onClick={onClick}>{children}</button>
  </>
);
```

✅ Bien fait, bonne structure.

🔁 **Refactor :**

* Déstructurer les props
* Utiliser `children` comme prévu

💡 Tu pourrais aussi améliorer l’UI avec une `Card` ou wrapper pour chaque `Counter`.

---

## ✅ Exercice 8 — `AlertBox`

```jsx
export const AlertBox = ({ children }) => (
  <div style={{ border: '1px solid red' }}>{children}</div>
);
```

✅ Parfait. Tu as bien utilisé `props.children`.

🔁 **Version "senior" :**

* Props déstructurées directement
* Bonus : ajouter `padding`, `borderRadius`, classe CSS, etc.

---

## ✅ Exercice 9 — `ButtonList`

```jsx
export const ButtonList = () => {
  const labels = ['Ok', 'Cancel', 'Retry'];
  return labels.map((label) => (
    <button type="button" key={label} onClick={() => alert(label)}>
      {label}
    </button>
  ));
};
```

✅ Ça fonctionne.

⚠️ **Refactor "senior" :**

* Évite `idx` comme key → ici tu peux utiliser `label`
* Retourne dans un container `<div>` ou `<section>`

✔ **Version améliorée :**

```jsx
export const ButtonList = () => {
  const labels = ['Ok', 'Cancel', 'Retry'];

  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      {labels.map((label) => (
        <button key={label} onClick={() => alert(label)}>
          {label}
        </button>
      ))}
    </div>
  );
};
```

---

## ✅ Exercice 10 — `ThemeSwitcher`

**Code fourni :**

```jsx
export const ThemeSwitcher = function() {
  const [theme, setTheme] = useState('light');

  const handleSwitchTheme = () => {
    if(theme === 'light')
      setTheme('dark');
    else
      setTheme('light');
  }

  const clsx = (names) => names.join(' ')

  return <>
    <div className={clsx([theme, 'box'])}>{theme}</div>
    <button type="button" onClick={handleSwitchTheme}>Switch theme</button>
  </>
}
```

🟢 **Excellent travail** :

* tu appliques dynamiquement les classes
* bonne logique de switch
* tu utilises même un mini `clsx()` 🧠

🔁 **Refactor "senior" :**

* Utiliser `setTheme(t => t === 'light' ? 'dark' : 'light')`
* Extraire la logique dans un hook ou `useToggle()`
* Utiliser `classnames` si projet plus gros

✔ **Refactor propre :**

```jsx
export const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () =>
    setTheme((t) => (t === 'light' ? 'dark' : 'light'));

  return (
    <>
      <div className={`box ${theme}`}>{theme}</div>
      <button onClick={toggleTheme}>Switch theme</button>
    </>
  );
};
```

---

## 🏁 Note finale

| Section      | Note         |
| ------------ | ------------ |
| QCM          | 4.5 / 5      |
| Exos         | 5 / 5        |
| 💯 **TOTAL** | **9.5 / 10** |

🎖️ Niveau Junior+++ VALIDÉ
🧠 Tu commences à **écrire comme un Dev confirmé** : composants réutilisables, bon usage des props/children, styles dynamiques, et bonne logique.

---

## 🧠 Next step (si tu veux aller plus loin) :

Voici ce que je te propose pour la suite (dis-moi ce que tu veux) :

1. **Set 4 "Niveau intermédiaire"** : custom hooks, context, optimisation rendering, pattern container/presenter
2. **Mini-projet React** : exemple : un todo avec filtre et persistance en localStorage
3. **Challenge entretien / test technique** : ex. recréer un composant interactif complet

Tu veux partir sur lequel ? 😎
