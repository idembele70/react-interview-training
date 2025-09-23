====
QCM
====
1. B
2. A
3. A, 
4. B, D
5. A, C,
=====
CODE
=====
1. ```js
// UserList.jsx
import { Suspense, useState, useEffect, useMemo, use } from 'react';

const DELAY = 3_000;

function UserList() {
  const users = userResource.read();

  const userItems = useMemo(() => users.map(user => <li key={user.id}>{user.name}</li>), [users]);
  return (
    <ul>
      {userItems}
    </ul>
  )
}

function Loading() {
  return <h2>Loading users...</h2>
}

async function fetchUsersData(url) {
  const response = await fetch(url);

  await new Promise(resolve => setTimeout(resolve, DELAY))

  return response.json()
}

function loadUserDataFromUrl(url = 'https://jsonplaceholder.typicode.com/users/') { return fetchUsersData(url) }

const userResource = {
  data: null,
  read() {
    if (this.data !== null) return this.data;
    throw loadUserDataFromUrl().then(result => {
    this.data = result
    });
  },
};

export default function () {
  return (
    <Suspense fallback={<Loading />}>
      <UserList />
    </Suspense>
  )
}
// app.jsx
import './App.css';
import { lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const Users = lazy(() => import('./level/mid/day-02/UserList'));

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/users' element={<Users />} />
        <Route path='/home' element={<h1>Home page</h1>} />
      </Routes>
    </Router>
  )
}

export default App;
```
2. ```js
import React from 'react';

export default function Counter() {
  const [count, setCount] = React.useState(0);
  const [step] = React.useState(1);

  const handleIncrement = React.useCallback(() => {
    setCount(c => c + step )
  }, [count, step])
  
  return (
    <>
      <Display count={count} />
      <button type='button' onClick={handleIncrement}>+1</button>
    </>
  )
}

const Display = React.memo(function(props) {

  return <h2>{props.count}</h2>
})
```
3. ```js
// UserDetail.jsx
import { useParams } from 'react-router-dom';
import React from 'react';

export default function UserDetail() {
  const { id } = useParams();
  const baseUrl = 'https://jsonplaceholder.typicode.com/users/';
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  const [user, setUser] = React.useState({});

  React.useEffect(() => {
    const signal = new AbortController();
    setLoading(true);
    setError('');
    fetch(baseUrl+id)
      .then(res => {
        if (!res.ok) {
          console.log(res)
          throw new Error('Not found');
        }
        return res.json()
      })
      .then(user => setUser(user))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <h2>Loading...</h2>;

  if (error) return <h2>Error: error</h2>;

  return <h1>{user.name}</h1>
}
// App.js
import './App.css';
import { lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Counter from './level/mid/day-02/Counter';
import User from './level/mid/day-02/UserDetail';
const Users = lazy(() => import('./level/mid/day-02/UserList'));


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/users' element={<Users />} />
        <Route path='/users/:id' element={<User />} />
        <Route path='/home' element={<h1>Home page</h1>} />
        <Route path='counter' element={<Counter />} />
      </Routes>
    </Router>
  )
}

export default App;
```
4. ```js
import { useMemo, useReducer, useState } from 'react';


const initialStore = {
  fields: [
    {
      name: '0', 
      value: '',
    },
  ],
};

const reducer = (state, action) => {

  switch(action.type) {
    case 'ADD_FIELD':
      return {...state, fields: [...state.fields, action.field]};
    case 'REMOVE_FIELD':
      return {...state, fields: state.fields.filter(item => item.name !== action.name) };
    case 'UPDATE_FIELD':
      return {...state, fields: state.fields.map(item => item.name === action.name ? { ...item, value: action.value } : item) };
    case 'SUBMIT_FIELDS':
      return initialStore;

    default:
      return state;
  }
}

export default function() {
  const [state, dispatch] = useReducer(reducer, initialStore);
  const [fields, setfields] = useState('');

  const handleChange = (e) => {
    const { value, name } = e.target;
    dispatch({ type: 'UPDATE_FIELD', name, value });
  }

  const addField = () => {
    dispatch({ type: 'ADD_FIELD', field: { name: state.fields.length.toString(), value: '' } });
  }

  const fieldItems = useMemo(() => state.fields.map(
    field => (
      <div key={field.name}>
        <input type="text" name={field.name} onChange={handleChange} />
      </div>
    )
  ), [state]);

  const handleSubmit = () => {
    const fieldsString = JSON.stringify(state.fields, null, 2);
    setfields(fieldsString);
    dispatch({ type: 'SUBMIT_FIELDS' });
  }

  return (
    <div>
      {fieldItems}
      <hr />
      <button type="button" onClick={addField}>Add a field</button>
      <button type="submit" onClick={handleSubmit}>Submit</button>
      <hr />
      <pre>{fields}</pre>
    </div>
  )
}
```
5. ```js
import { useState, createContext, useContext, useMemo } from 'react';

const ThemeContext = createContext(null);

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export default function Theme() {

  return (
    <ThemeProvider>
      <ThemedButton />
    </ThemeProvider>
  );
}

function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const lightThemeStyle = {
    backgroundColor: 'white',
    color: 'black',
  };

  const darkThemeStyle = {
    backgroundColor: 'black',
    color: 'white',
  };

  const isLightTheme = useMemo(() => theme === 'light', [theme]);

  return (
    <button style={ isLightTheme ? lightThemeStyle : darkThemeStyle } type="button" onClick={toggleTheme}>
      Change to { isLightTheme ? 'Dark' : 'Light'}
    </button>
  );
}
```
