==========
QUESTIONS
==========
Parfait 🔥 je vais te préparer **10 nouveaux exercices React niveau junior++++** (un cran au-dessus de junior+++).
Ici tu vas devoir :

* éviter les magic numbers,
* bien nommer tes variables,
* commencer à factoriser ton code,
* utiliser `useEffect`, `useRef`, `useMemo`, `useCallback` quand c’est pertinent,
* penser “state minimal” (ne stocker que ce qui change).

---

## 🚀 10 Exercices React – Junior++++
Parfait 🚀 je vais te préparer une **nouvelle série niveau Junior++++** avec :

* **5 QCM à choix multiple**
* **5 exercices de code**

---

# 🔹 Partie 1 : QCM (Junior++++)

### QCM 1 : `useCallback` et optimisations

Pourquoi utilise-t-on `useCallback` en React ?
A. Pour éviter que la fonction soit recréée à chaque rendu inutilement
B. Pour mémoriser la valeur d’une variable calculée
C. Pour remplacer `useState`
D. Pour éviter de passer une nouvelle référence à un composant enfant qui dépend de la fonction

---

### QCM 2 : `useMemo`

Quand est-ce pertinent d’utiliser `useMemo` ?
A. Quand un calcul est coûteux et dépend de certaines valeurs
B. Quand on veut stocker une valeur persistante entre les renders
C. Quand on veut empêcher le re-render complet d’un composant
D. Quand on veut éviter d’exécuter un calcul si les dépendances n’ont pas changé

---

### QCM 3 : Formulaires contrôlés

Quel(s) avantage(s) a un **formulaire contrôlé** (state géré par React) par rapport à un formulaire non contrôlé ?
A. On peut valider facilement les champs au fur et à mesure
B. On peut appliquer des règles de formatage en direct
C. On ne peut pas réinitialiser facilement
D. On peut centraliser la logique du formulaire

---

### QCM 4 : Performance

Lequel de ces choix peut réduire les re-renders inutiles en React ?
A. Passer des objets inline (`{}` ou `[]`) directement dans `props`
B. Utiliser `React.memo` sur un composant pur
C. Utiliser des clés (`key`) stables dans les listes
D. Éviter de recréer des fonctions avec `useCallback` quand c’est pertinent

---

### QCM 5 : Effets et nettoyage

Que se passe-t-il si on oublie de nettoyer un `setInterval` dans un `useEffect` ?
A. Rien, React le nettoie automatiquement
B. On risque une fuite de mémoire
C. L’interval continue de tourner même si le composant est démonté
D. Le navigateur bloque automatiquement l’interval après un certain temps

---

---

# 🔹 Partie 2 : Exercices de code (Junior++++)

### Exercice 6 : **Compteur avec pas dynamique**

Un compteur avec deux boutons `+` et `-` qui incrémentent ou décrémentent selon une valeur **step** définie dans un `<input type="number" />`.

---

### Exercice 7 : **Liste triable**

Affiche une liste de nombres `[34, 12, 89, 4, 56]`.
Ajoute deux boutons : **Trier croissant** et **Trier décroissant**.

---

### Exercice 8 : **Live Search optimisé**

Affiche une liste de prénoms. Ajoute une barre de recherche qui filtre la liste avec un **debounce** de 500ms (évite de filtrer à chaque frappe).

---

### Exercice 9 : **Dark mode persistant**

Un bouton pour basculer entre **light** et **dark mode**.
👉 Le choix est sauvegardé dans `localStorage` et appliqué au prochain rechargement.

---

### Exercice 10 : **Accordion**

Un composant Accordion avec 3 sections.
Quand une section est ouverte, les autres se ferment automatiquement.

---

👉 Là tu as ta **série complète Junior++++** :

* **QCM (optimisation, useMemo, useCallback, formulaires, perf, nettoyage)**
* **Exos (step dynamique, tri, debounce, dark mode persistant, accordion)**

Tu veux que je te propose tout de suite la **correction détaillée des QCM** (avec ton format préféré ✅❌ + explications) ou tu veux répondre d’abord comme d’hab ?

### 1. **TodoList avancée avec filtre**

Crée un composant qui affiche une liste de tâches.

* Tu peux ajouter une tâche.
* Tu peux cocher/décocher une tâche (faite / non faite).
* Tu peux filtrer : **Toutes**, **Faites**, **À faire**.

---

### 2. **Compteur synchronisé**

Deux compteurs `+1` indépendants, mais quand l’un atteint 10, l’autre est aussi remis à 0 automatiquement.

---

### 3. **Formulaire avec validation**

Formulaire avec `email` et `password`.

* L’email doit contenir `@`.
* Le password doit faire au moins 6 caractères.
* Affiche un message d’erreur si invalide, sinon affiche `"Formulaire valide ✅"`.

---

### 4. **Minuteur avec Start / Pause / Reset**

Un timer qui :

* démarre quand on clique sur **Start**,
* peut être mis en pause avec **Pause**,
* peut être remis à 0 avec **Reset**.

---

### 5. **Liste triée dynamiquement**

Affiche une liste de nombres `[12, 3, 45, 7, 22]`.
Ajoute deux boutons : **Trier croissant** et **Trier décroissant**.

---

### 6. **Recherche avec debounce**

Barre de recherche qui filtre une liste de fruits.
👉 Bonus : implémente un **debounce** de 500ms avec `setTimeout` et `clearTimeout` pour éviter de filtrer à chaque frappe.

---
Parfait 🚀 je vais te préparer une **nouvelle série niveau Junior++++** avec :

* **5 QCM à choix multiple**
* **5 exercices de code**

---

# 🔹 Partie 1 : QCM (Junior++++)

### QCM 1 : `useCallback` et optimisations

Pourquoi utilise-t-on `useCallback` en React ?
A. Pour éviter que la fonction soit recréée à chaque rendu inutilement
B. Pour mémoriser la valeur d’une variable calculée
C. Pour remplacer `useState`
D. Pour éviter de passer une nouvelle référence à un composant enfant qui dépend de la fonction

---

### QCM 2 : `useMemo`

Quand est-ce pertinent d’utiliser `useMemo` ?
A. Quand un calcul est coûteux et dépend de certaines valeurs
B. Quand on veut stocker une valeur persistante entre les renders
C. Quand on veut empêcher le re-render complet d’un composant
D. Quand on veut éviter d’exécuter un calcul si les dépendances n’ont pas changé

---

### QCM 3 : Formulaires contrôlés

Quel(s) avantage(s) a un **formulaire contrôlé** (state géré par React) par rapport à un formulaire non contrôlé ?
A. On peut valider facilement les champs au fur et à mesure
B. On peut appliquer des règles de formatage en direct
C. On ne peut pas réinitialiser facilement
D. On peut centraliser la logique du formulaire

---

### QCM 4 : Performance

Lequel de ces choix peut réduire les re-renders inutiles en React ?
A. Passer des objets inline (`{}` ou `[]`) directement dans `props`
B. Utiliser `React.memo` sur un composant pur
C. Utiliser des clés (`key`) stables dans les listes
D. Éviter de recréer des fonctions avec `useCallback` quand c’est pertinent

---

### QCM 5 : Effets et nettoyage

Que se passe-t-il si on oublie de nettoyer un `setInterval` dans un `useEffect` ?
A. Rien, React le nettoie automatiquement
B. On risque une fuite de mémoire
C. L’interval continue de tourner même si le composant est démonté
D. Le navigateur bloque automatiquement l’interval après un certain temps

---

---

# 🔹 Partie 2 : Exercices de code (Junior++++)

### Exercice 6 : **Compteur avec pas dynamique**

Un compteur avec deux boutons `+` et `-` qui incrémentent ou décrémentent selon une valeur **step** définie dans un `<input type="number" />`.

---

### Exercice 7 : **Liste triable**

Affiche une liste de nombres `[34, 12, 89, 4, 56]`.
Ajoute deux boutons : **Trier croissant** et **Trier décroissant**.

---

### Exercice 8 : **Live Search optimisé**

Affiche une liste de prénoms. Ajoute une barre de recherche qui filtre la liste avec un **debounce** de 500ms (évite de filtrer à chaque frappe).

---

### Exercice 9 : **Dark mode persistant**

Un bouton pour basculer entre **light** et **dark mode**.
👉 Le choix est sauvegardé dans `localStorage` et appliqué au prochain rechargement.

---

### Exercice 10 : **Accordion**

Un composant Accordion avec 3 sections.
Quand une section est ouverte, les autres se ferment automatiquement.

==========
RESPONSES
==========
1. A, 
2. A, B, D
3. A, B, D
4. B, C, D
5. B, C
6. ```js
import React from 'react';

export function Counter() {
  const [step, setStep] = React.useState(1);
  const [counter, setCounter] = React.useState(0);

  const handleIncrement = () => {
    setCounter(c => c + step);
  }

  const handleDecrement = () => {
    setCounter(c => c - step);
  }

  return (
    <div>
      <h1> Counter: {counter}</h1>
      <input type='number' value={step} onChange={(e) => setStep(e.target.valueAsNumber)} />
      <button type='button' onClick={handleIncrement}>+</button>
      <button type='button' onClick={handleDecrement}>-</button>
    </div>
  )
}
```
7. ```js
export function SortableList() {
  const [list, setList] = React.useState([34, 12, 89, 4, 56]);

  const [order, setOrder] = React.useState(1);

  const handleChangeOrder = () => {
    setOrder(o => o === 1 ? -1 : 1);
  }

  const sortAsc = () => {
    setList(l => l.sort((a, b) => a - b));
  }

  const sortDesc = () => {
    setList(l => l.sort((a, b) => b - a));
  }

  React.useEffect(() => {
    if (order === 1)
      sortAsc()
    else
      sortDesc();
  }, [order])

  const listItems = list.map((item, idx) => <li key={idx}>{item}</li>)
  return (
    <div>
      <ul>{listItems}</ul>
      <button type='button' onClick={handleChangeOrder}>{order === 1 ? 'ASC' : 'DESC'}</button>
    </div>
  )
}
```
8. ```js
export function LiveSearch() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searching, setSearching] = React.useState(false);
  const [firstNameList] = React.useState(['toto', 'titi', 'john', 'jane', 'jade', 'ibra']);
  const timer = React.useRef(null);
  const DELAY = 500;
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setSearching(true);
    if (timer.current) clearInterval(timer.current);
      timer.current = setTimeout(() => {
        setSearching(false);
      }, DELAY);
  }

  React.useEffect(() => () => {
    if (timer.current)
      clearInterval(timer.current);
  }, [])

  const firstNameItems = firstNameList.filter(fname => fname.includes(searchTerm)).map((fname, idx) => <li key={idx}>{fname}</li>)

  return (
    <div>
      <input type='text' value={searchTerm} onChange={handleSearch} />
      <ul>{searching ? 'Recherche en cours...' : firstNameItems}</ul>
    </div>
  )
```
9. ```js
export function ThemeSwitcher() {
  const [theme, setTheme] = React.useState('light');
  const localStorageKey = 'THEME'

  React.useEffect(() => {
    const localTheme = localStorage.getItem(localStorageKey);

    if(localTheme) setTheme(localTheme)
  }, []);

  const handleSwitch = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme);
    localStorage.setItem(localStorageKey, newTheme);
  }

  const wrapperStyle = {
    border: '1px solid red',
    backgroundColor: theme === 'light' ? 'white' : 'black',
    height: 100,
    width: 100,
  };

  return (
    <div>
      <div style={wrapperStyle} />
      <button type='button' onClick={handleSwitch}>Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode </button>
    </div>
  )
}
```
10. ```js
export function Accordion() {
  const sectionList = ['Section 1', 'Section 2', 'Section 3'];
  const [openIndex, setOpenIndex] = React.useState(0);

  const handleChangeOpenIndex = (id) => setOpenIndex(id)

  const sectionItems = sectionList.map((name, idx) => <li onClick={() => handleChangeOpenIndex(idx)} key={idx}>{`${name} is ${openIndex === idx ? 'Open' : 'Close'}`}</li>)

  return (
    <div>
      <ul>{sectionItems}</ul>
    </div>
  )
}
```
==========
SOLUTIONS
==========
### QCM
Parfait 👌 tu as joué le jeu, maintenant je corrige avec ton format préféré :

---

## ✅ Correction QCM Junior++++

### QCM 1 : `useCallback` et optimisations

**Bonne(s) réponse(s) : A, D**

* A. ✅ Correct → `useCallback` empêche la recréation inutile de fonctions.
* B. ❌ Faux → ça, c’est `useMemo`, pas `useCallback`.
* C. ❌ Faux → `useCallback` ne remplace pas `useState`.
* D. ✅ Correct → permet de passer la même référence à un composant enfant, utile pour éviter des re-renders.

👉 **Ta réponse : A → Incomplète (il manque D).**

---

### QCM 2 : `useMemo`

**Bonne(s) réponse(s) : A, D**

* A. ✅ Correct → utile pour éviter de recalculer un résultat coûteux.
* B. ❌ Faux → ça, c’est plutôt `useRef` ou `useState`.
* C. ❌ Faux → `useMemo` ne bloque pas les re-renders, il optimise seulement certains calculs.
* D. ✅ Correct → il ne recalcule que si les dépendances changent.

👉 **Ta réponse : A, B, D → Incorrect (B est faux).**

---

### QCM 3 : Formulaires contrôlés

**Bonne(s) réponse(s) : A, B, D**

* A. ✅ Correct → validation en direct possible.
* B. ✅ Correct → formatage instantané possible.
* C. ❌ Faux → au contraire, on peut facilement reset un formulaire contrôlé.
* D. ✅ Correct → centralisation de la logique dans le state.

👉 **Ta réponse : A, B, D → Correct.**

---

### QCM 4 : Performance

**Bonne(s) réponse(s) : B, C, D**

* A. ❌ Faux → passer des objets inline recrée une nouvelle référence à chaque render → mauvais pour la perf.
* B. ✅ Correct → `React.memo` évite des re-renders inutiles.
* C. ✅ Correct → des `key` stables évitent que React recrée tout le DOM virtuel d’une liste.
* D. ✅ Correct → `useCallback` permet de ne pas recréer des fonctions en boucle.

👉 **Ta réponse : B, C, D → Correct.**

---

### QCM 5 : Effets et nettoyage

**Bonne(s) réponse(s) : B, C**

* A. ❌ Faux → React ne nettoie pas automatiquement les intervals.
* B. ✅ Correct → fuite mémoire si on oublie le `clearInterval`.
* C. ✅ Correct → l’interval continue même si le composant est démonté → bug.
* D. ❌ Faux → le navigateur ne bloque pas les intervals.

👉 **Ta réponse : B, C → Correct.**

---

## 📊 Bilan final

* QCM 1 → ❌ Incomplet
* QCM 2 → ❌ Incorrect
* QCM 3 → ✅ Correct
* QCM 4 → ✅ Correct
* QCM 5 → ✅ Correct

👉 **Score : 3/5 corrects (60%) 🎯**
Très solide 💪 mais tu as confondu `useMemo` et `useRef`, et tu as oublié un détail sur `useCallback`.

---

Veux-tu que je corrige aussi tes **exos de code (6 → 10)** avec feedback junior+++ vs version senior ?

### CODE
Parfait, merci d’avoir collé tes exos 👌 Je vais te faire un retour détaillé **junior+++ → version senior** pour chacun (6 à 10).

---

### 🚀 Exercice 6 : Counter

Ton code : ✅ Fonctionne bien.
Points positifs :

* Tu utilises `valueAsNumber` → très bon réflexe pour éviter le parse.
* Tu gères bien les deux handlers séparés.

⚠️ Améliorations senior :

* Éviter la duplication des handlers (+ et -).
* Forcer un fallback si `step` est `NaN`.

👉 Version senior :

```jsx
import React from 'react';

export function Counter() {
  const [step, setStep] = React.useState(1);
  const [count, setCount] = React.useState(0);

  const updateCounter = (delta) => {
    setCount((c) => c + delta * (Number.isFinite(step) ? step : 1));
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <input
        type="number"
        value={step}
        onChange={(e) => setStep(e.target.valueAsNumber)}
      />
      <button onClick={() => updateCounter(1)}>+</button>
      <button onClick={() => updateCounter(-1)}>-</button>
    </div>
  );
}
```

---

### 🚀 Exercice 7 : SortableList

Ton code : ⚠️ Bug caché → `sort()` mute directement le tableau, donc `setList(l => l.sort())` modifie l’état existant au lieu de créer une copie → mauvais en React.

👉 Version senior (immutabilité garantie) :

```jsx
import React from 'react';

export function SortableList() {
  const [list, setList] = React.useState([34, 12, 89, 4, 56]);
  const [order, setOrder] = React.useState(1);

  const toggleOrder = () => setOrder((o) => -o);

  React.useEffect(() => {
    setList((l) =>
      [...l].sort((a, b) => order * (a - b))
    );
  }, [order]);

  return (
    <div>
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={toggleOrder}>
        {order === 1 ? 'ASC' : 'DESC'}
      </button>
    </div>
  );
}
```

---

### 🚀 Exercice 8 : LiveSearch

Ton code : ✅ Déjà très bon !
⚠️ Petits points :

* Tu as utilisé `clearInterval` au lieu de `clearTimeout`.
* Tu mets "Recherche en cours..." **dans la liste** → mieux de séparer l’état visuel.

👉 Version senior :

```jsx
import React from 'react';

export function LiveSearch() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searching, setSearching] = React.useState(false);
  const firstNameList = ['toto', 'titi', 'john', 'jane', 'jade', 'ibra'];
  const timer = React.useRef(null);
  const DELAY = 500;

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setSearching(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setSearching(false), DELAY);
  };

  React.useEffect(
    () => () => timer.current && clearTimeout(timer.current),
    []
  );

  const filtered = firstNameList.filter((f) =>
    f.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleSearch} />
      {searching ? (
        <p>Recherche en cours...</p>
      ) : (
        <ul>
          {filtered.map((fname) => (
            <li key={fname}>{fname}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
```

---

### 🚀 Exercice 9 : ThemeSwitcher

Ton code : ✅ Fonctionnel.
⚠️ Améliorations :

* Centraliser `localStorageKey` **hors du composant**.
* Utiliser `useLayoutEffect` pour appliquer le thème immédiatement avant le rendu (sinon clignotement).

👉 Version senior :

```jsx
import React from 'react';

const LOCAL_STORAGE_KEY = 'THEME';

export function ThemeSwitcher() {
  const [theme, setTheme] = React.useState('light');

  React.useLayoutEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) setTheme(stored);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_KEY, newTheme);
  };

  return (
    <div>
      <div
        style={{
          border: '1px solid red',
          backgroundColor: theme === 'light' ? 'white' : 'black',
          height: 100,
          width: 100,
        }}
      />
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
}
```

---

### 🚀 Exercice 10 : Accordion

Ton code : ✅ Simple et efficace.
⚠️ Améliorations :

* `openIndex` ne devrait pas être forcé à `0` → mettre `null` pour aucun ouvert.
* Ajouter accessibilité (rôle bouton, aria-expanded).

👉 Version senior :

```jsx
import React from 'react';

export function Accordion() {
  const sections = ['Section 1', 'Section 2', 'Section 3'];
  const [openIndex, setOpenIndex] = React.useState(null);

  return (
    <ul>
      {sections.map((name, idx) => {
        const isOpen = openIndex === idx;
        return (
          <li key={name}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : idx)}
            >
              {name} is {isOpen ? 'Open' : 'Close'}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
```

---

## 📊 Feedback global

* **6 → Counter** : ✅ Bien géré, petit refacto pour éviter la duplication.
* **7 → SortableList** : ⚠️ Piège du `sort()` mutable corrigé.
* **8 → LiveSearch** : ✅ Très propre, juste un `clearTimeout` à mettre.
* **9 → ThemeSwitcher** : ✅ Fonctionne, mais `useLayoutEffect` + constante globale améliorent l’expérience.
* **10 → Accordion** : ✅ Correct, version senior plus accessible.

👉 Niveau **junior+++ solide**, tu passes sur les détails **senior** (immutabilité, accessibilité, micro-optimisations).

---

Veux-tu que je prépare une **nouvelle série QCM + exos (junior++++)** pour continuer à progresser ?

