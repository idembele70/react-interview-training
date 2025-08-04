Parfait Ibrahim ! Voici ta **nouvelle série de 10 questions niveau Junior+++** en React.js. Tu peux répondre aux QCM et me copier/coller ton code pour les exos pratiques 💻.
Toujours dans le style **type interview / CoderPad**, mélangeant théorie et pratique.

---

## ✅ Questions 1 à 5 – QCM

> **(1)** Que retourne l’appel suivant ?

```jsx
const [count, setCount] = useState(0);
```

A. Un objet avec les propriétés `count` et `setCount`
B. Un tableau avec la valeur initiale et une fonction pour la mettre à jour
C. Une fonction de rappel `useEffect`
D. Une erreur si on ne fournit pas de callback

---

> **(2)** Quelle(s) affirmation(s) est(sont) vraie(s) à propos de `useEffect` ?
> A. Il s’exécute **avant** le rendu
> B. Il peut retourner une fonction de nettoyage
> C. Il peut s’exécuter à chaque re-render si pas de dépendances
> D. Il est synchrone

---

> **(3)** Quelle est la **bonne pratique** concernant la clé (`key`) dans un `.map()` ?
> A. Utiliser l’index du tableau comme key
> B. Utiliser une valeur **unique** et **stable** (ex: id)
> C. La clé n’est pas nécessaire pour les listes courtes
> D. Il faut que chaque enfant ait une clé différente de son voisin immédiat

---

> **(4)** Quelles affirmations sont vraies ?
> A. `useRef()` déclenche un re-render quand sa `.current` change
> B. `useRef()` permet de **garder une référence** entre les renders
> C. `useRef()` est équivalent à `document.querySelector`
> D. `useRef()` est souvent utilisé pour accéder à un élément DOM

---

> **(5)** Que fait `React.StrictMode` en développement ?
> A. Il améliore les performances
> B. Il double l’exécution de certains effets pour détecter les erreurs
> C. Il fonctionne uniquement en production
> D. Il empêche les erreurs de syntaxe JSX

---

## 💻 Questions 6 à 10 – Code / Composants React

> **(6)** Crée un composant `RandomQuote` qui affiche une citation au hasard dans une liste (min 3 citations) **à chaque clic sur un bouton**. Pas besoin d’API, les données peuvent être en dur.

---

> **(7)** Crée un composant `TimerButton` qui affiche un bouton “Démarrer le minuteur”.
> Quand on clique, un compte à rebours de **5 secondes** commence et le bouton est désactivé pendant ce temps, puis se réactive.

---

> **(8)** Crée un composant `CharacterCounter` avec un champ texte.
> Affiche en live :

* Le **nombre de caractères** tapés
* Le **nombre de mots**

---

> **(9)** Crée un composant `Tabs` avec 3 boutons "Accueil", "Profil", "Paramètres".
> Quand on clique sur un bouton, on affiche un contenu différent selon l’onglet actif.

---

> **(10)** Crée un composant `PersistentForm` qui utilise `localStorage` pour **sauvegarder le contenu du formulaire** (`email` et `message`).
> Quand on recharge la page, les valeurs doivent être pré-remplies.

---

💬 Envoie-moi tes réponses (QCM + code) et je te fais un retour complet + version optimisée niveau senior si tu veux 🔥
Ready ? C’est à toi !


================
CORRIGÉ
================
Excellent travail Ibrahim 👏 ! Tu es clairement à un **niveau junior+++ solide**. Voici ta **correction complète** avec des retours précis sur chaque question et une **note finale**.

---

## ✅ QCM : Questions 1 à 5

> **1. B ✅**
> ✔️ Correct ! `useState(0)` retourne un tableau `[value, setValue]`.

> **2. B, C ❌ (tu avais mis B, C, D)**
> ✔️ `B` vrai : `useEffect` peut retourner une fonction de nettoyage
> ✔️ `C` vrai : sans tableau de dépendances, il s’exécute à chaque re-render
> ❌ `D` est **faux** : `useEffect` est **asynchrone**.
> ➡️ **Erreur légère** ici.

> **3. B ✅**
> ✔️ C’est la meilleure pratique : une **clé stable et unique**, comme un `id`.

> **4. B, D ✅**
> ✔️ `B` : `useRef` garde une valeur persistante sans re-render
> ✔️ `D` : souvent utilisé pour accéder à un input ou bouton
> ❌ `C` : faux, `useRef` ne fait pas de query DOM directe
> Tu avais mis C aussi → **petite erreur**

> **5. B ✅**
> ✔️ `React.StrictMode` exécute les effets 2 fois en dev pour détecter les effets de bord
> ❌ `D` : JSX est validé par Babel, pas lié à `StrictMode`
> Tu avais mis D → **là aussi une petite erreur**

### ✅ **Note QCM** : **3/5** corrects à 100%, 2 autres ont 1 choix en trop

🟡 **Score QCM : 14/20** (solide, juste un peu de rigueur à affiner sur le comportement exact)

---

## 💻 Code : Questions 6 à 10

> **6. RandomQuote ✅ Très bon**

**👍 Points forts** :

* `useCallback`, `useRef`, évite les répétitions ✅
* citation initiale avec `useEffect` 👌
  **💡 Version senior** : tu pourrais simplifier un peu la logique du `while` (voir plus bas)

> **7. TimerButton ✅ Bien joué**

**✔️ Points positifs** :

* Minuteur propre avec `useRef` pour l’intervalle
* Bouton désactivé pendant le timer ✅
  **💡 Amélioration senior** : extraire `MAX`, `INCREMENT`, `DELAY` en constantes globales pour plus de lisibilité/configurabilité

> **8. CharacterCounter ✅ Excellent**

* Bonne gestion du comptage
* Nettoyage avec `.trim()` 👍
* `handleChange` clair

**💡 Niveau senior** :

* Bonus : désactiver la saisie après X caractères ?
* Ou afficher un indicateur visuel ?

> **9. Tabs ✅ Fonctionnel et propre**

* Utilisation de `useRef` pour les noms d’onglets : pas nécessaire ici, mais pas bloquant
* Design clair, lisible
* Gère bien l’état de l’onglet actif

**💡 Version senior** :

* Ajoute des styles conditionnels pour voir quel onglet est actif
* Extraire `tabItems` dans une fonction ?

> **10. PersistentForm ✅ Très bon**

* LocalStorage bien utilisé 🔥
* `getLocalStorageData()` isolé → bonne séparation
* Formulaire pré-rempli au mount

**💡 Senior version** :

* Sauvegarder au `submit` plutôt qu’à chaque `onChange` (meilleure UX)
* Ajouter un bouton "Clear form" pour tester plus facilement

---

## 🔁 Versions Senior – Suggestions rapides

### 🧠 RandomQuote – version plus simple :

```tsx
export function RandomQuote() {
  const QUOTES = ['Food is life', 'Never drink alcohol', 'Be yourself!'];
  const [quote, setQuote] = useState(() => QUOTES[Math.floor(Math.random() * QUOTES.length)]);

  const handleChangeQuote = () => {
    let next;
    do {
      next = QUOTES[Math.floor(Math.random() * QUOTES.length)];
    } while (next === quote);
    setQuote(next);
  };

  return (
    <div>
      <q>{quote}</q><br />
      <button type="button" onClick={handleChangeQuote}>Change Quote</button>
    </div>
  );
}
```

---

## 🏁 Note finale

| Section       | Score           |
| ------------- | --------------- |
| QCM           | 14/20           |
| Code (6 à 10) | 19.5/20         |
| **Total**     | **33.5 / 40** ✅ |

👉 **Mention : Junior+++ confirmé, prêt à affronter des entretiens techniques**
👏 Tu codes propre, tu anticipes les pièges, tu penses au refactoring, et ton code est déjà bien au-delà du niveau "junior classique".

---

Veux-tu une **nouvelle série de 10 questions**, ou préfères-tu qu’on passe à un **niveau "intermédiaire" ?**
Tu es largement prêt si tu veux monter d’un cran 💪
