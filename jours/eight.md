Voici une nouvelle **série de 10 questions React.js niveau junior+++**, parfaite pour continuer à progresser :

---

### 🧠 QCM (choix multiple, 1 à plusieurs bonnes réponses)

**1. Que fait `useCallback` dans React ?**
A. Mémorise une valeur primitive
B. Mémorise une fonction entre les renders
C. Permet d’éviter la recréation de fonctions identiques
D. Force l'exécution d'une fonction après le render

---

**2. Quelles affirmations sont vraies à propos de `useEffect` ?**
A. Il s'exécute avant le premier render
B. Il peut retourner une fonction de nettoyage
C. Il dépend d’un tableau de dépendances
D. Il peut remplacer complètement le cycle de vie `componentDidMount`

---

**3. Quel hook permet de gérer un champ de formulaire de manière contrôlée ?**
A. useField
B. useInput
C. useState
D. useForm

---

**4. Quelle(s) bonne(s) pratique(s) permet(tent) d’éviter des re-render inutiles ?**
A. Utiliser `React.memo`
B. Extraire les fonctions dans `useCallback`
C. Utiliser un `key` fixe dans un `map()`
D. Eviter les dépendances dans `useEffect`

---

**5. Quelles sont les bonnes raisons d’utiliser une `ref` ?**
A. Accéder à un élément du DOM
B. Stocker une valeur entre les renders sans re-render
C. Déclencher une re-render forcée
D. Implémenter un minuteur

---

### 🧪 Exercices de code

**6. `useToggle()`**
Crée un composant `ToggleSwitch` avec un bouton qui affiche "ON" ou "OFF" et change d’état à chaque clic.

---

**7. `ScrollToTopButton`**
Écris un composant qui affiche un bouton "Scroll to top" uniquement si l'utilisateur a scrollé de plus de 300px. Clique = scroll en haut de la page.

---

**8. `FormValidator`**
Crée un formulaire avec deux champs : `email` et `password`.
Affiche un message d’erreur en dessous de chaque champ si le champ est vide après tentative de soumission.

---

**9. `useEffect cleanup`**
Crée un composant qui affiche une horloge (`HH:MM:SS`) et nettoie le `setInterval` proprement lorsque le composant est démonté.

---

**10. `DynamicList`**
Écris un composant avec un champ de texte + bouton "Ajouter" qui permet de créer dynamiquement une liste d’éléments (ex : tâches).

---

Quand tu veux, envoie-moi tes réponses pour correction + version "senior" ✨

========
CORRIGÉ
========

Excellent taf ! 🙌 Voici un retour complet sur tes réponses (QCM + code), avec validation, corrections et suggestions de version **"senior"** là où c’est utile.

---

## ✅ QCM : Résultats et corrections

1. **B, C** ✅
   ✔️ **Correct**.
   `useEffect(() => { ... }, [])` : exécution 1x au mount seulement.
   ✅ Pas de dépendances = pas de réexécution.

2. **B, C, D** ✅
   ✔️ **Correct**.

   * B : nettoyage dans `useEffect` = bonne pratique.
   * C : ⚠️ bien vu : dépendances mal gérées = boucle infinie.
   * D : ✅ possible de mettre un intervalle dans `useEffect`.

3. **C** ✅
   ✔️ Exact.
   `useRef` garde sa valeur intacte même si le composant se re-render.

4. **A, B, C** ✅
   ✔️ Bien joué.
   Tous les choix sont des usages valides de `useRef`.

5. **A, B** ✅
   ✔️ Parfait.

   * A : `useEffect` peut écouter une ref indirectement (via un event ou effet).
   * B : `useEffect` est souvent utilisé avec `useRef` pour dom interactions.

---

## ✅ Exercices de code

### 6. `ToggleSwitch`

✔️ **Validé**, code propre et minimaliste.
✅ Très clair. Utilisation parfaite de `useState`.

#### ✅ Version "senior" (rien à changer ici).

---

### 7. `ScrollToTopButton`

🟡 **Validé**, mais optimisable.

#### ✔️ Points forts :

* Bonne gestion des refs.
* `addEventListener` / `removeEventListener` bien placés.
* Logique fonctionnelle OK.

#### ⚠️ Améliorations "senior" :

1. Ajouter le `[]` à `useEffect` sinon tu attaches les events **à chaque render** :

```js
React.useEffect(() => {
  ...
}, []); // Ajouté
```

2. Utiliser `visibility: hidden` ou `opacity` plutôt que `display` directement (évite les effets de layout).

3. Nettoyer la logique :

```jsx
btnRef.current.style.visibility = scrollY < 300 ? 'hidden' : 'visible'
```

4. Extra : tu pourrais aussi stocker `isVisible` dans un `useState` plutôt que modifier le style directement.

---

### 8. `FormValidator`

✅ **Validé** – Fonctionne parfaitement, bonne logique.

#### ✅ Points positifs :

* État bien géré.
* Réutilisation via `FormRow`.
* Dirty flag : bien joué.

#### 🧠 Suggestions "senior" :

* Extraire le schéma des champs dans une constante pour plus de scalabilité :

```js
const fields = ['email', 'password'];
```

* DRY pour la logique `setDirty` :

```js
fields.forEach(field => {
  if (!values[field]) {
    setDirty(prev => ({ ...prev, [field]: true }));
  }
});
```

---

### 9. `Horloge`

✅ **Validé**

#### ✅ Points forts :

* `setInterval` bien utilisé.
* Clean `useEffect`.
* `DELAY` externalisé → bonne pratique.

#### Bonus "senior" :

Tu pourrais écrire :

```js
const getTime = () => new Intl.DateTimeFormat('fr-FR', { timeStyle: 'medium' }).format(new Date());
```

➡️ Plus clair sur la précision du format.

---

### 10. `DynamicList`

✅ **Validé** – Fonctionnel et bien structuré.

#### ✅ Points forts :

* `list` + `value` bien gérés.
* `onSubmit` propre.
* `disabled={!value}` : 👌 UX.

#### 🔧 Suggestion senior :

Au lieu d’utiliser `list.length` comme ID (peut poser souci si tu modifies/supprimes un item plus tard), tu peux faire :

```js
import { nanoid } from 'nanoid'; // ou crypto.randomUUID() si dispo

{id: nanoid(), name: value}
```

---

## ✅ Récapitulatif

| Question         | Résultat  | Feedback                                    |
| ---------------- | --------- | ------------------------------------------- |
| QCM 1-5          | ✅ Parfait | Bonne compréhension des hooks               |
| 6. ToggleSwitch  | ✅         | Minimaliste, propre                         |
| 7. ScrollToTop   | 🟡        | Ajouter `[]` au `useEffect`, légère refacto |
| 8. FormValidator | ✅         | Bien pensé, DRY possible                    |
| 9. Horloge       | ✅         | Formatage bonus possible                    |
| 10. DynamicList  | ✅         | Génération d’ID plus robuste possible       |

---

## 🔥 Tu veux continuer ?

Je peux t’envoyer :

* Une **série 2** niveau `junior+++`
* Ou une série **niveau confirmé**
* Ou une série **100% focus "useReducer", "custom hooks", "optimisation"**, etc.

Dis-moi ce que tu préfères 😎
