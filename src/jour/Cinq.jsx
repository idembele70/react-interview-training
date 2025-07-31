import React, { useRef } from 'react';
export function Timer() {
  const [time, setTime] = React.useState(0);

  React.useEffect(() => {
    const MAX_TIME = 10;
    const DELAY = 1000;
    const INCREMENT = 1;
    const interval = setInterval(() => {
      setTime(t => {
        if (t < MAX_TIME) {
          return t + INCREMENT;
        }
        clearInterval(interval);
        return t;
      })
    }, DELAY)
    return () => clearInterval(interval)
  }, [])

  return <h1>Time elapsed since component has been mounted: {time}s</h1>
}

export function TodoList() {
  const [todos, setTodos] = React.useState([
    {
      id: 1,
      label: 'First Todo',
      done: false
    },
    {
      id: 2,
      label: 'Second Todo',
      done: true
    },
  ]);

  const toggleDone = (id) => {
    setTodos(t => t.map(todo => id === todo.id ? ({...todo, done: !todo.done}) : todo))
  }
  const todoItems = todos.map(todo => <TodoItem key={todo.id} todo={todo} onToggleDone={toggleDone} />)

  return <ul>{todos.length && todoItems}</ul>
}

function TodoItem({ todo, onToggleDone }) {
  return (
    <li>
      <h3>{todo.id} | {todo.label} | {todo.done ? 'Completed' : 'Incomplete'} | </h3>
      <button type="button" onClick={() => onToggleDone(todo.id)}>{todo.done ? 'Incomplete' : 'Complete'}</button>
    </li>
  )
}

export const InputFocusTracker = () => {
  const [isFocus, setFocus] = React.useState();

  return (
    <>
      <h1>{isFocus ? "Focus actif" : "Pas de focus"}</h1>
      <label htmlFor="name">Name : </label><br />
      <input type="text" name="name" id="name" onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} />
    </>
  )
}

export function InputFocusTrackerV2() {
  const inputRef = React.useRef(null);
  const [isFocus, setFocus] = React.useState(false)

  React.useEffect(() => {
    const handleFocus = () => setFocus(true);
    const handleBlur = () => setFocus(false);

    const input = inputRef.current;
    input.addEventListener('focus', handleFocus);
    input.addEventListener('blur', handleBlur);

    return () => {
      input.removeEventListener('focus', handleFocus);
      input.removeEventListener('blur', handleBlur);
    }
  }, [])
  return (
    <>
      <h1>{isFocus ? 'Focus actif' : 'Pas de focus'}</h1>
      <input type="text" ref={inputRef} />
    </>
  )
}

export const ExpensiveCalc = () => {
  const [x, setX] = React.useState(0);
  function slowPower(x) {
    console.log('Recalcul en cours...');
    let result = x;
    for(let i = 1; i < 1e7; i++) {
      result += Math.sqrt(i) * x;
    }
    return result
  }
  const xCalcul = React.useMemo(() => slowPower(x), [x])
  return (
    <>
      <h1>{xCalcul}</h1>
      <label htmlFor="chiffre">Chiffre : </label>
      <input type="number" name="chiffre" id="chiffre" value={x} onChange={(e) => setX(e.target.valueAsNumber)} />
    </>
  )
}

export const DebouncedSearch = function() {
  const [searching, setSearching] = React.useState(false);
  const [value, setValue] = React.useState('');
  const timer = useRef(null);

  const handleSearch = (e) => {
    setValue(e.target.value)
    clearTimeout(timer.current);
    setSearching(true)
    timer.current = setTimeout(() => {
      setSearching(false);
    }, 500)
  }
  return (
    <>
      <h1>{searching ? "Recherche en cours..." : `Résultat pour: ${value}`}</h1>
      <input type="text" name="searchValue" id="SearchValue" placeholder='Tap a value' value={value} onChange={handleSearch} />
    </>
  )
}