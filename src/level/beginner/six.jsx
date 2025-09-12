import { useEffect, useRef, useState, } from 'react';

export function AutoResetCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const MAX = 5;
    const DELAY = 1000
    const interval = setInterval(() => {
      setCount(c => {
        if (c < MAX)
          return c + 1;
        return 0
      })
    }, DELAY)
    return () => clearInterval(interval);
  }, [])
  return <h1>{count}</h1>
}

export function NameForm() {
  const [values, setValues] = useState({
    firstName: '',
    lastName: ''
  });
  const [fullName, setFullName] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const full = `${values.firstName} ${values.lastName}`.trim();
    setFullName(full);
    setValues({ firstName: '', lastName: '' });
  }

  return (
    <div>
      {fullName && <h1>Bonjour, {fullName}</h1>}
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter first name' value={values.firstName} name='firstName' onChange={handleChange} />
        <input type='text' placeholder='Enter last name' value={values.lastName} name='lastName' onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export function SimpleTodoList() {
  const [todos, setTodos] = useState([{ id: 1, content: 'Milk' }, { id: 2, content: 'Bread' }, { id: 3, content: 'pasta' }]);

  const handleDelete = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }

  const todoItems = todos.map(todo => <SimpleTodoItem key={todo.id} content={todo.content} onDelete={() => handleDelete(todo.id)} />)

  return (
    <ul>{todoItems}</ul>
  )

}

function SimpleTodoItem({ content, onDelete }) {
  return (
    <li style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
      <h2>{content}</h2>
      <button type="button" onClick={onDelete}>Delete</button>
    </li>
  )
}

export const ProgressBar = function () {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const MAX_PROGRESS = 100;
    const INCREMENT = 10;
    const DELAY = 1000
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= MAX_PROGRESS) {
          clearInterval(interval);
          return prev;
        }
        return prev + INCREMENT;
      })
    }, DELAY);
    return () => {
      if (interval)
        clearInterval(interval);
    }
  }, [])
  return (
    <div style={{ maxWidth: 250, border: '1px solid red' }}>
      <div style={{ backgroundColor: 'green', height: 20, width: `${progress}%`, transition: 'width .3s ease' }}></div>
    </div>
  )
}

export function FocusInput() {
  const inputRef = useRef(null);

  return (
    <form>
      <input type='text' name='username' placeholder='Type your username' ref={inputRef} autoComplete='username' />
      <input type="button" value="Focus" onClick={() => inputRef.current?.focus()} />
    </form>
  )
}