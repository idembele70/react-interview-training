Parfait 🚀
Voici **10 nouveaux exercices React.js niveau junior+++** :

* **5 QCM** (choix multiple, il peut y avoir plusieurs bonnes réponses)
* **5 exercices de code** (à implémenter et me renvoyer pour correction)

---

## 📝 QCM

### 1. Quel(s) hook(s) déclenchent un re-render du composant quand leur valeur change ?

A. `useRef`
B. `useState`
C. `useEffect`
D. `useContext`

---

### 2. Quelle est la bonne façon de passer une fonction à un enfant pour mettre à jour un état parent ?

A. Passer la fonction directement comme prop
B. Passer l’état comme prop et le modifier directement dans l’enfant
C. Utiliser `useCallback` pour mémoriser la fonction avant de la passer
D. Utiliser `useReducer` pour gérer la mise à jour

---

### 3. Quelles affirmations sont vraies sur `useMemo` ?

A. Il évite de recalculer une valeur coûteuse si les dépendances ne changent pas
B. Il empêche tout re-render du composant
C. Il peut être utilisé pour mémoriser des fonctions
D. Il doit toujours avoir un tableau de dépendances

---

### 4. Dans quel(s) cas `useEffect` s’exécute-t-il à chaque re-render ?

A. Si aucun tableau de dépendances n’est fourni
B. Si un tableau vide est fourni
C. Si un tableau avec des valeurs changeantes est fourni
D. Jamais

---

### 5. Quelles sont des bonnes pratiques pour gérer des formulaires dans React ?

A. Utiliser un état contrôlé (`value` + `onChange`)
B. Lire la valeur avec `document.getElementById` directement
C. Utiliser un hook personnalisé pour regrouper la logique
D. Mettre à jour le DOM manuellement via `ref` pour chaque saisie

---

## 💻 Exercices de code

### 6. **Compteur avec limite**

Crée un composant `LimitedCounter` qui :

* Affiche un compteur (`count`)
* Un bouton "Incrémenter"
* Le compteur ne doit **pas dépasser 5**
* Affiche un message "Limite atteinte" si `count` est à 5

---

### 7. **Liste avec suppression**

Crée un composant `RemovableList` qui :

* Gère une liste d’éléments dans un `useState`
* Affiche chaque élément avec un bouton "Supprimer"
* La suppression met à jour la liste

---

### 8. **Changer de thème**

Crée un composant `ThemeSwitcher` qui :

* Utilise un état `theme` (`light` ou `dark`)
* Un bouton qui alterne entre les deux
* Applique un style différent au `div` principal selon le thème

---

### 9. **Compteur avec reset auto**

Crée un composant `AutoResetCounter` qui :

* Incrémente un compteur via un bouton
* Si `count` atteint 10, il revient à 0 automatiquement
* Utilise `useEffect` pour gérer le reset

---

### 10. **Recherche en temps réel**

Crée un composant `LiveSearch` qui :

* A un champ texte pour rechercher
* Affiche la liste filtrée en fonction du texte tapé
* Utilise un tableau `['React', 'Angular', 'Vue', 'Svelte']` comme données initiales

---

Veux-tu que je te prépare **les corrections détaillées + versions "senior"** quand tu m’auras envoyé tes réponses comme d’habitude ?

=============
CORRIGÉ
=============

Ok, je corrige tes réponses QCM 🚀

---

### **1. Quel(s) hook(s) déclenchent un re-render du composant quand leur valeur change ?**

✅ **Bonne réponse : B, D**

* `useState` → déclenche un re-render si la valeur change.
* `useContext` → déclenche un re-render si la valeur du contexte change.
  ❌ `useRef` → ne déclenche pas de re-render.
  ❌ `useEffect` → ne déclenche pas directement un re-render, il s'exécute après.
  **→ Ta réponse est correcte** 🎯

---

### **2. Bonne façon de passer une fonction à un enfant pour mettre à jour un état parent**

✅ **Bonne réponse : A, C, D**

* A → Oui, c’est la base, passer la fonction comme prop.
* C → `useCallback` est utile pour éviter de recréer la fonction inutilement.
* D → `useReducer` est une autre bonne approche pour centraliser les mises à jour.
  ❌ B → Mauvaise pratique : un enfant ne doit pas modifier directement un état parent.
  **→ Ta réponse D seule est incomplète** (tu aurais dû inclure A et C aussi).

---

### **3. Quelles affirmations sont vraies sur `useMemo` ?**

✅ **Bonne réponse : A, D**

* A → Oui, ça évite les recalculs inutiles.
* D → Oui, toujours fournir un tableau de dépendances.
  ❌ B → Faux, `useMemo` n’empêche pas les re-renders.
  ❌ C → Mémoriser des fonctions se fait plutôt avec `useCallback`.
  **→ Ta réponse A, D est correcte** 🎯

---

### **4. Dans quel(s) cas `useEffect` s’exécute à chaque re-render ?**

✅ **Bonne réponse : A, C**

* A → Oui, sans tableau de dépendances, il s’exécute à chaque rendu.
* C → Oui, si une dépendance change à chaque rendu, il se relance à chaque fois.
  ❌ B → Avec tableau vide `[]`, il ne s’exécute qu’au montage.
  **→ Ta réponse A seule est incomplète** (tu devais ajouter C).

---

### **5. Bonnes pratiques pour gérer des formulaires dans React**

✅ **Bonne réponse : A, C**

* A → Oui, état contrôlé est la méthode recommandée.
* C → Oui, hook personnalisé pour centraliser la logique.
  ❌ B → Mauvaise pratique (accès DOM direct).
  ❌ D → Mauvaise pratique (on laisse React gérer le DOM).
  **→ Ta réponse A seule est incomplète** (tu devais ajouter C).

---

📊 **Bilan :**

* 1 ✅
* 3 ✅
* 2, 4, 5 ❌ (incomplètes)
  ➡ **Score : 3/5**

---

Si tu veux, je peux maintenant te faire **les corrections détaillées + versions senior** pour **les 5 exercices de code** de cette série pour t’entraîner.
Tu veux que je te prépare ça maintenant ?

Globalement, tes 5 exercices sont corrects et fonctionnels, mais je vais te donner un retour “junior+++ → senior” pour chaque point :

---

**6. LimitedCounter ✅**

* Fonctionne bien, logique claire.
* **Amélioration senior** : éviter la répétition des conditions `count === 5` (utiliser une variable `isMax` pour la lisibilité).

```jsx
const isMax = count === 5;
...
<h2 style={{ color: 'red', visibility: isMax ? 'visible' : 'hidden' }}>Limite atteinte</h2>
<button type="button" onClick={handleIncrement} disabled={isMax}>Increment</button>
```

---

**7. RemovableList ✅**

* Code propre et clair.
* **Amélioration senior** : utiliser un `React.Fragment` ou une `<div>` englobante si le design le nécessite, pour éviter que `<ul>` soit vide si la liste est vide (afficher un message).

```jsx
return list.length > 0 ? <ul>{listItems}</ul> : <p>Aucun élément</p>;
```

---

**8. ThemeSwitcher ✅**

* Fonctionne parfaitement.
* **Amélioration senior** : raccourcir le toggle avec un opérateur ternaire inversé.

```jsx
setTheme(prev => prev === 'light' ? 'dark' : 'light');
```

* Tu pourrais aussi utiliser `useCallback` si ce composant devient gros et que le handler est passé en prop.

---

**9. AutoResetCounter ✅**

* Logique ok.
* **Amélioration senior** :

  * Mettre la valeur max (10) dans une constante pour éviter le “magic number”.
  * Ajouter `useEffect` import explicitement (il manque l'import dans ton snippet).

```jsx
const MAX = 10;
useEffect(() => {
  if (count >= MAX) setCount(0);
}, [count]);
```

---

**10. LiveSearch ✅ mais améliorable**

* Fonctionne, mais petit détail : en React, on utilise `htmlFor` et non `for` dans `<label>`.
* Sensibilité à la casse : `.includes()` est case-sensitive, donc `"react"` ne matchera pas `"React"`. Solution :

```jsx
{data.filter(value => value.toLowerCase().includes(searchTerm.toLowerCase()))...
```

---

Si tu veux, je peux te préparer ton **prochain set de 10 questions React junior+++** en intégrant directement ces bonnes pratiques, comme ça tu t’habitues au niveau “senior-friendly” pendant l’entraînement.

