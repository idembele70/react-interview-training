Parfait Ibrahim ! Voici ton **deuxième set React Junior++** avec :

* **5 QCM** : concepts intermédiaires (lifting state up, controlled components, useRef, rendering, etc.)
* **5 exercices de dev** : avec des petits défis type *dev réel* mais toujours accessibles à un niveau junior++

---

## ✅ **1. QCM - Lifting State Up**

Pourquoi “remonter l’état” (lifting state up) dans React ?

A) Pour que plusieurs composants puissent partager et modifier le même état
B) Pour éviter les hooks dans les composants enfants
C) Pour transformer les composants fonctionnels en composants classe
D) Pour éviter d’utiliser `props`

---

## ✅ **2. QCM - Composant contrôlé**

Un champ input avec un `value` lié au state React est appelé :

A) Composant dynamique
B) Composant contrôlé
C) Composant statique
D) Composant encapsulé

---

## ✅ **3. QCM - useRef**

À quoi sert `useRef` dans un composant React ?

A) À stocker une valeur dans le DOM de manière temporaire
B) À forcer un re-render
C) À stocker une référence persistante qui ne déclenche pas de re-render
D) À remplacer `useEffect`

---

## ✅ **4. QCM - render conditionnel**

Quel est le bon moyen de rendre un bouton **seulement si l’utilisateur est connecté** (avec `isLoggedIn = true`) ?

A) `if (isLoggedIn) return <button>Déconnexion</button>`
B) `{isLoggedIn && <button>Déconnexion</button>}`
C) `isLoggedIn ? <button>Déconnexion</button> : ''`
D) Toutes les réponses sont valides

---

## ✅ **5. QCM - Fragment**

Pourquoi utiliser `<> ... </>` au lieu d’une `div` dans React ?

A) Pour éviter un nœud DOM inutile
B) Pour ajouter des styles globaux
C) Pour créer une clé de liste
D) Ce n’est pas recommandé

---

## ✅ **6. Exercice - Formulaire contrôlé**

Crée un composant `LoginForm` qui :

* a deux champs : email, mot de passe
* affiche une alerte avec les valeurs quand on clique sur **Se connecter**
* utilise un state pour chaque champ (composants contrôlés)

---

## ✅ **7. Exercice - Affichage conditionnel**

Crée un composant `WelcomeBox` qui :

* reçoit une prop `isLoggedIn`
* si vrai, affiche **Bienvenue !**
* sinon, affiche **Veuillez vous connecter.**

---

## ✅ **8. Exercice - Toggle**

Crée un composant `ToggleText` qui :

* affiche un texte visible ou caché
* un bouton **"Afficher/Masquer"** permet de le toggle

---

## ✅ **9. Exercice - Compteur auto avec `useEffect`**

Crée un composant `AutoCounter` qui :

* démarre à 0
* augmente tout seul de +1 toutes les secondes avec `setInterval`
* s'arrête à 5 (puis plus d’incrément)

---

## ✅ **10. Exercice - Focus auto input (useRef)**

Crée un composant `FocusInput` qui :

* contient un champ texte
* quand le composant est monté, le champ est automatiquement focus

---

### 👉 Prochaine étape :

1. Tu me donnes tes réponses aux **QCM (1 à 5)**
2. Tu codes les **exercices 6 à 10**
3. Je te corrige, note, et je te donne des **refactorings “senior”** pour aller plus loin 🚀

Dis-moi quand tu es prêt 👇

==============
CORRIGÉ
==============
Excellent travail Ibrahim ! 🚀 Tu maîtrises les bases et tu commences à bien intégrer les réflexes intermédiaires. Voici la **correction détaillée**, ta **note**, et les **refactors "senior React"** comme demandé 💪

---

## ✅ **Correction QCM (Questions 1 à 5)**

| Question | Ta réponse | Réponse correcte | Commentaire                                                       |
| -------- | ---------- | ---------------- | ----------------------------------------------------------------- |
| **1**    | ✅ A        | ✅ A              | Parfait. Le *lifting state up* sert à partager l’état.            |
| **2**    | ✅ B        | ✅ B              | Exact. C’est un composant contrôlé.                               |
| **3**    | ✅ C        | ✅ C              | Très bien. `useRef` stocke une valeur persistante sans re-render. |
| **4**    | ✅ D        | ✅ D              | Les trois méthodes sont valides.                                  |
| **5**    | ✅ A        | ✅ A              | `<> </>` évite un nœud DOM inutile. Bien joué.                    |

🧠 **Note QCM : 5/5 — maîtrise solide !**

---

## ✅ **Correction Exercices (6 à 10)**

---

### **6. `LoginForm`**

✅ Fonctionnel et bien structuré !

🔍 **Feedback senior :**

* `onSubmit={handleSubmit}` au lieu de `onSubmit={(e) => handleSubmit(e)}` → plus propre.
* Le `form` est bien structuré, mais tu pourrais aussi utiliser `label htmlFor` + `id` pour l’accessibilité (déjà fait, parfait !).

✔ **Refactor :**

```jsx
<form onSubmit={handleSubmit}>
```

✅ Rien à redire. Bravo.

---

### **7. `WelcomeBox`**

✅ Ça fonctionne parfaitement !

💡 **Refactor senior :**

* Raccourcir avec un **ternaire directement dans le JSX** :

```jsx
export const WelcomeBox = ({ isLoggedIn }) => (
  <h1>{isLoggedIn ? 'Bienvenue !' : 'Veuillez vous connecter.'}</h1>
);
```

---

### **8. `ToggleText`**

✅ Fonctionne et code clair.

💡 **Refactor senior :**

* Pour éviter de faire apparaître un élément vide (`<h1></h1>`), tu peux rendre conditionnellement le composant lui-même :

```jsx
{visible && <h1>Texte</h1>}
```

✔ Version optimisée :

```jsx
export const ToggleText = () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <>
      {visible && <h1>Texte</h1>}
      <button onClick={() => setVisible(v => !v)}>
        {visible ? 'Masquer' : 'Afficher'}
      </button>
    </>
  );
};
```

---

### **9. `AutoCounter`**

✅ Super gestion du `setInterval` + `clearInterval`.

⚠️ **Petit souci logique :**
Ton interval est relancé à chaque re-render tant que `count < 5`, ce qui peut causer plusieurs intervalles si `count` reste < 5 un petit moment.

✔ **Version senior : démarrer l’interval une seule fois et le couper dans le callback interne :**

```jsx
export const AutoCounter = () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => {
        if (prev >= 5) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <h1>{count}</h1>;
};
```

---

### **10. `FocusInput`**

✅ Parfait, clean et efficace.

✔ **Rien à changer. Tu as bien capté `useRef` pour manipuler un élément DOM.**

---

## 🏆 **NOTE GLOBALE**

* **QCM : 5/5**
* **Exercices : 4.5/5**
  (seule la logique du `AutoCounter` pouvait être un peu optimisée)

🎯 **TOTAL : 9.5/10 – Niveau Junior++ solide validé** 🥇

---

## 👨‍💻 Recommandations pour coder comme un **Senior React** :

| Bonne pratique                   | Exemple                                                                  |
| -------------------------------- | ------------------------------------------------------------------------ |
| ✅ Eviter les re-renders inutiles | `useRef`, `useMemo`, `useCallback` quand les props/state deviennent gros |
| ✅ Minimal state                  | Ne jamais stocker dans `useState` des choses dérivables                  |
| ✅ JSX clair et concis            | Pas de wrapper inutile, pas de fonctions dans les props si pas besoin    |
| ✅ Effets bien gérés              | `clearInterval`, `clearTimeout`, `AbortController` pour fetch            |
| ✅ Accessibilité                  | `htmlFor`, `aria-`, focus bien géré                                      |
| ✅ Séparation logique/vue         | Custom hooks pour logique, composants purs pour vue                      |
| ✅ Clean UX                       | Placeholder, loading states, feedback utilisateur visuel                 |

---

🔥 Tu veux maintenant :

* un set **"intermédiaire" avec context, lifting state up sur plusieurs composants, custom hooks** ?
* ou un set **style "entretien technique" avec mini-projets (ex: mini-trello, timer, etc.)** ?

Dis-moi et je te prépare ça 👇
