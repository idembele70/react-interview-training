====
QCM
====
1. B
2. A, B, 
3. B, 
4. A, B, 
5. B, 
=====
CODE
=====
6. ```JS
import { useState, useEffect } from 'react';

export default function useFetch(pathname) {
  const baseUrl = 'https://jsonplaceholder.typicode.com/'
  const url = new URL(pathname, baseUrl);

  const [state, setState] = useState({
    data: [],
    loading: false,
    error: '',
  });

  useEffect(() => {
    const controller = new AbortController();

    setState({ ...state, loading: true });
    fetch(url.href, { signal: controller.signal })
      .then(res => {
        if (!res.ok)
          throw new Error('Pathname not found');
        return res.json()
    })
    .then(data => setState(prev => ({ ...prev, data })))
      .catch(err => {
        setState(prev =>({ ...prev, error: err.message}))
      })
      .finally(() => {
        setState(prev => ({ ...prev, loading: false }))
       });

      return () => {
        controller.abort();
      }
  }, [pathname]);

  return state;
}
```
7. ```js
import React from 'react';
import useFetch from './hooks/useFetch';
import { useSearchParams } from 'react-router-dom';

export default function Search() {
  const pathname = 'posts';
  const { data, error, loading } = useFetch(pathname);
  const [searchTerm, setSearchTerm] = useSearchParams();

  const filteredItems = React.useMemo(() => data?.filter(item => item.title.includes(searchTerm.get('q'))), [searchTerm.get('q')]);
  

  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>error</h1>


  function handleSearch(e) {
    setSearchTerm({ q: e.target.value });
  }

  return (
    <div>
    <input type="text" autocomplete="off" name="search" value={searchTerm.get('q')} onChange={handleSearch} />
      {
        !!filteredItems?.length &&
        <ul>
         {filteredItems?.map(item => <li key={item.id}>{item.title}</li>)}
        </ul>
        }
        { !filteredItems?.length && <h1>No items was Found</h1>}
    </div>
  )
}
```
8. ```js
import { useReducer, useState } from 'react';

const initialStore = {
  username: '',
  password: '',
  error: '',
};

const reducer = (state, action) => {
  const { type, ...rest } = action;
  switch (action.type) {
    case 'SET_FIELD':
      return {...rest, error: '', };
    case 'SET_ERROR':
      return { ...state, error: 'Password minimum length is 6.' };
    case 'RESET':
      return { username: '', password: '', error: '' }
  }
};

export default function Login() {
  const [values, dispatch] = useReducer(reducer, initialStore);
  const [data, setData] = useState({
    username: '',
    password: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'SET_FIELD', ...values, [name]: value });
    
    if (name === 'password' && value.length < 6)
      dispatch({ type: 'SET_ERROR'})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values.error)
    if (values.error) return;
    const { username, password } = values;
    setData({
      username,
      password,
    });
    dispatch({ type: 'RESET'});
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" autoComplete="username" value={values.username} onChange={handleChange} placeholder='Enter a username'/><br/>
        <input type="password" name="password" autoComplete="new-password" value={values.password} onChange={handleChange} placeholder='Enter a password'/><br/>
        {values.error && <div>{values.error}</div>}
        <button type="submit" disabled={values.error}>Submit</button>
      </form>
      <pre>
      { JSON.stringify(data, null, 2) }
      </pre>
    </div>
  )
}
```
9. ```js


  return <TodoContext.Provider value={{ todos, dispatch }}>{children}</TodoContext.Provider>
}

const reducer = (state, action) => {

  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.todo ];
    case  'REMOVE_TODO':
      return state.filter(t => t.id !== action.id);
    case 'TOGGLE_TODO':
      return state.map(t => t.id === action.id ? { ...t, status: !t.status } : t);
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
  const [ todoTitle, setTodoTitle ] = useState('');

  const saveTodo = (e) => {
    e.preventDefault();
    const todo = {
        id: `${Math.random().toString().slice(2,8)}${Date.now().toString().slice(1,4)}`,
        title: todoTitle,
        status: false,
      }
      dispatch({ type: 'ADD_TODO', todo })
      setTodoTitle('');
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
        <input type="text" autoComplete="off" name="todo-title" value={todoTitle} onChange={(e)=> setTodoTitle(e.target.value)} />
        <input disabled={!todoTitle.length} type="submit"/>
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
```
10. ```js
import { useState, useRef, useMemo } from 'react';
import useFetch from './hooks/useFetch';

export default function() {
  const realUrl = 'https://randomuser.me/api/?results=5000'
  const backUpUrl = 'https://dummyjson.com/users'
  const backUpOfBackUpUrl ='data/users.json'
  const { data, error, loading } = useFetch(backUpOfBackUpUrl);
  const [searchTerm, setSearchTerm] = useState('');
  const [searching, setSearching] = useState(false);
  let timeout = useRef(null);

  const handleSearch = function(e) {
    if (loading || error) return;
    setSearchTerm(e.target.value.toLowerCase());
    setSearching(true)
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      setSearching(false)
    }, 500)
  }

  const users = useMemo(() => data.filter(u => u.login.username.toLowerCase().includes(searchTerm)), [searchTerm]);

  return (
    <div>
      <input type="text" name="search" value={searchTerm} onChange={handleSearch} placeholder="Type a username" disabled={loading || error} autoComplete='off' />
     
       {  loading || searching ? <h1>Loading...</h1>
          : error ? <h1>{error}</h1>
          : users.length ? <pre>{JSON.stringify(users, null, 2)}</pre>
          : <h1>No users found</h1>
      }
    </div>
  )
}
```
