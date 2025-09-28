====
QCM
====
1. B
2. B, C
3. A, C
4. A, C
5. B, C
=====
CODE
=====
6. ```js
import { useEffect, useState, useTransition, useMemo, memo } from 'react';

export default function() {
  const url = 'data/users.json';
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isPending, startTransition] = useTransition();

  const fetchUsers = async (url, searchTerm) => {
    const res = await fetch(url);

    if (!res.ok) return [];

    const data = await res.json();
    if (searchTerm)
      return data.results.filter(u => u.name.first.toLowerCase().includes(searchTerm.toLowerCase()));
    return data.results;
  }

  useEffect(() => {
    startTransition(async function(){
      const data = await fetchUsers(url, searchTerm);
      setUsers(data)
    })
  }, [url])

  const userItem = useMemo(() => users.map(user => <UserItem key={user.login.uuid}>{user.name.first}</UserItem>), [users, searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    startTransition(async () => {
      const data = await fetchUsers(url, e.target.value);
      setUsers(data);
    });
  }

  return (
    <div>
      <input type='text' name='search' autoComplete='off' value={searchTerm} onChange={handleSearch} />
      { isPending 
        ? <h1>Loading...</h1>
        : !users?.length ? <h2>Users not found</h2>
        : <ul>{userItem}</ul>
      }
    </div>
  );
}

function User({ children }) {

  return (
    <li>{children}</li>
  )
}

const UserItem = memo(User);
```
7. ```js
// LazyPosts
import { useEffect, useState, useMemo } from 'react';

export default function LazyPosts() {
  const url = 'https://jsonplaceholder.typicode.com/posts/';
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchPosts(url) {
    const response = await fetch(url);

    if (!response.ok) return []
    await new Promise(resolve => {
      setTimeout(resolve, 2000);
    });
    const data = response.json();

    return data;
  }

  useEffect(() => {
    setLoading(true);
    fetchPosts(url)
      .then(data => setData(data))
      .catch((err) => {
        console.log('Error during fetch:', err);
        setData([]);
        setLoading(false);
      })
      .finally(() => setLoading(false));
  }, [url]);

  const postItems = useMemo(() => data.map(post => <li key={post.id}>{post.title}</li>), [data]);

  if (loading) return <Loading />
  
  return (
    <ul>
      {postItems}
    </ul>
  )
}

export function Loading() {
  return <h2>Loading posts...</h2>
}
// App
import './App.css';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BigListSearch from './level/mid/day-03/BigListSearch';
import { Loading } from './level/mid/day-03/LazyPosts';
const LazyPosts = lazy(() => import('./level/mid/day-03/LazyPosts'));

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='search' element={<BigListSearch />} />
        <Route path='posts' element={<Suspense fallback={<Loading />}><LazyPosts /></Suspense>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
```
8. ```js
import React from 'react';

const initialStore = {
  fields : new Map([
  ['email', { type: 'email', name: 'email', value: '', error: '' },],
  ['password', { type: 'password', name: 'password', value: '', error: '' },],
  ['phone', { type: 'tel', name: 'phone', value: '', error: '' },],
  ]),
  'dynamicFields': [{ name: '0', value: ''},],
};

const isEmailInvalid = (field) => {
  if (field.name !== 'email')
    return false;
  return !(/.+@.+/.test(field.value));
}

const isPasswordInvalid = (field) => {
  if (field.name !== 'password')
    return false;
  return field.value.length < 6;
}

const reducer = (state, action) => {
  const { fields, dynamicFields } = state;
  
  switch(action.type) {
    case 'UPDATE_FIELD':
    const field = fields.get(action.field.name);
    field.value = action.field.value;

    if (isEmailInvalid(field)) {
      field.error = 'Invalid email: email must contain @';
    } else if (isPasswordInvalid(field)) {
      field.error = 'Password minimum length is 6';
    } else {
      field.error = '';
    }

    return {...state };

    case 'UPDATE_DYNAMIC_FIELD':
    const dynamicField = dynamicFields.find(f => f.name === action.field.name);
    dynamicField.value = action.field.value;
    
    return {...state, dynamicFields:  [...dynamicFields]}
    case 'ADD_DYNAMIC_FIELD':
    return {...state, dynamicFields:  [...dynamicFields, { name: String(dynamicFields.length), value: ''}]};

    default:
    return state;
  }
}

export default function DynamicForm() {
  const [state, dispatch] = React.useReducer(reducer, initialStore);
  const { fields, dynamicFields } = state;

  const handleChange = React.useCallback((e) => {
    const { value, name } = e.target;
    dispatch({ type: 'UPDATE_FIELD', field: { name, value } });
  }, []);

  const handleChangeDynamicField = React.useCallback((e) => {
    const { value, name } = e.target;
    dispatch({ type: 'UPDATE_DYNAMIC_FIELD', field: { name, value } });
  }, [])

  const handleAddDynamicField = () => {
    dispatch({ type: 'ADD_DYNAMIC_FIELD' });
  }

  const fieldItems = React.useMemo(() => {
    return dynamicFields.map(field => <DynamicField key={field.name} {...field} onChange={handleChangeDynamicField} />)
  }, [dynamicFields]);

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  function isFormValid() {
    const hasValidField = fields.values().every(
      field => {
       return field.value && !field.error
      }
    )
    const hasValidDynamicFields = dynamicFields.every(
      field => field.value
    );

    return hasValidField && hasValidDynamicFields
  }

  const emailField = fields.get('email');
  const passwordField = fields.get('password');
  const phoneField = fields.get('phone');

  return (
    <form onSubmit={handleSubmit}>
      <FormField {...emailField} onChange={handleChange}  />
      <FormField {...passwordField} onChange={handleChange} />
      <FormField {...phoneField} onChange={handleChange} />
      <ul>
        {fieldItems}
        <li>
          <button type='button' onClick={handleAddDynamicField}>Add new field</button>
        </li>
      </ul>
      <button disabled={!isFormValid()} type='submit'>Submit</button>
    </form>
  );
}

const DynamicField = React.memo(({ name, value, onChange }) => {

  return (
    <div>
      <input type='text' name={name} value={value} onChange={onChange} placeholder='Start typing...' />
    </div>
  )
});

const FormField = React.memo(({ name, value, type, onChange, error }) => {
  const capitalize = (name) => name.replace(/[^a-zA-Z]/, m => m.toUpperCase());

  return (
    <div>
      <label htmlFor='email'>{capitalize(name)}:</label><br/>
        <input type={type} name={name} id={name} value={value} onChange={onChange} /><br />
        {error && <span>{error}<br /></span>}
    </div>
  );
})
```
9. ```js
import { useContext } from 'react';
import AppContextProvider, { AppContext } from './AppContext';

function SettingsPanel() {
  const { value: { theme, language }, dispatch } = useContext(AppContext);

  function handleToggleTheme() {
    dispatch({ type: 'TOGGLE_THEME' });
  }

  function handleSelect(e) {
    dispatch({ type: 'SET_LANGUAGE', language: e.target.value });
  }

  return (
    <div>
      <p onClick={handleToggleTheme}>Current theme is <strong>{theme}</strong></p>
      <p>Current language is <strong children={language} /></p>
      <form>
        <select value={language} onChange={handleSelect}>
          <option value='fr'>FR</option>
          <option value='en'>EN</option>
        </select>
      </form>
    </div>
  )
}

export default function () {
  return (
    <AppContextProvider>
      <SettingsPanel />
    </AppContextProvider>
  )
}
```
10. ```js
import { useSearchParams } from 'react-router-dom';
import React from 'react';

export default function() {
  const [ searchParams, setSearchParams ] = useSearchParams();
  const [pending, startTransition] = React.useTransition();
  const [products, setProducts] = React.useState([]);
  const q = React.useMemo(() => {
    return searchParams.get('q')
  }, [searchParams]);

  const fetchProducts = async (query) => {
    const response = await fetch(`https://dummyjson.com/products/search?q=${query}`);
    let data;
    if (!response.ok) data = { products: [] };
    else data = await response.json();
    return data.products;
  }

  React.useEffect(() => {
    (async function() {
      const products = await fetchProducts(q);
      setProducts(products);
    })()
  },[])

  function handleChange(e) {
    const { value } = e.target;
    setSearchParams({ q: value });
    startTransition( async() => {
      const products = await fetchProducts(value);
      setProducts(products);
    });
  }

  const productItems = React.useMemo(() => products.map(p => <li key={p.id}>{p.title}</li>), [products]);

 return (
  <div>
    <input type='search' name='search' value={q} onChange={handleChange} placeholder='Search a product' />
    {pending
      ? <h2>Loading...</h2>
      : !products.length ? <h2>No products found</h2>
      : <ul>{productItems}</ul>
    }
  </div>
 )
}
```
