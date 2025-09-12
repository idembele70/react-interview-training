import { createContext, useReducer, useContext, useState } from 'react';

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(reducer, []);
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.todo];
    case  'REMOVE_TODO':
      return state.filter(t => t.id !== action.id);
    case 'TOGGLE_TODO':
      return state.map(t =>
        t.id === action.id ? { ...t, status: !t.status } : t
      );
    default:
      return state
  }
}

export default function() {
  return (
    <TodoProvider>
      <TodoList />
    </TodoProvider>
  )
}

function TodoList() {
  const { todos, dispatch } = useContext(TodoContext);
  const [ title, setTitle ] = useState('');

  const saveTodo = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    const todo = {
        id: `${Math.random().toString().slice(2,8)}${Date.now().toString().slice(1,4)}`,
        title: todoTitle,
        status: false,
      }
      dispatch({ type: 'ADD_TODO', todo })
      setTitle('');
  }

  const removeTodo = (id) => {
    dispatch({type: 'REMOVE_TODO', id});
  }

  const updateTodo = (id) => {
    dispatch({type: 'TOGGLE_TODO', id });
  }

  return (
    <div>
      <form onSubmit={saveTodo}>
        <input type="text" autoComplete="off" name="todo-title" value={todoTitle} onChange={(e)=> setTitle(e.target.value)} />
        <input disabled={!title} type="submit"/>
      </form>
      <ul>
        {todos?.map(t => (
          <li key={t.id} onClick={() => updateTodo(t.id)}>
            <h1>{t.title} | {t.status ? 'Done' : 'Undone'}</h1>
            <button type="button" onClick={() =>removeTodo(t.id)}>Remove</button>
          </li>)
        )}
      </ul>
    </div>
  
  )

}
