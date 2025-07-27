import { useState, useEffect } from 'react';

export const LimitedCounter = () => {
  const [count, setCount] = useState(0);
  const isMax = count === 5;

  const handleIncrement = () => {
    setCount(prev => {
      if (prev < 5)
        return prev + 1;
      return prev;
    });
  }

  return (
  <div>
    <h1>Count: {count}</h1>
    <h2 style={{color: 'red', visibility: isMax ? 'visible' : 'hidden'}}>Limite atteinte</h2>
    <button type='button' onClick={handleIncrement} disabled={isMax}>Increment</button>
  </div>
  )
}

export const RemovableList = () => {
  const [list, setList] = useState([{ id: 1, name: 'item 1' }, { id: 2, name: 'item 2' }]);

  const handleRemove = (id) => {
    setList(l => l.filter(item => item.id !== id));
  }

  const listItems = list.map(item => (
                              <li key={item.id}>
                                <h5>Nom: {item.name}</h5>
                                <button type="button" onClick={() => handleRemove(item.id)}>Supprimer</button>
                              </li>
                              ));
  return list.length > 0 ? <ul>{listItems}</ul> : <p>Aucun élément</p>
}

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('light');

  const handleToggleTheme = () => {
   setTheme(prev => prev === 'light' ? 'dark' : 'light');
  }

  const box = {
    height: 100,
    width: 100,
    borderRadius: 8,
    backgroundColor: theme === 'light' ? 'white' : 'black',
    border: '1px solid red',
    marginBottom: 8
  }

  return (
      <div>
        <div style={box}/>
        <button type="button" onClick={handleToggleTheme}>Switch to {theme === 'light' ? 'dark' : 'light'} mode</button>
      </div>
    )
}

export const AutoResetCounter = () => {
  const [count, setCount] = useState(0);
  const MAX = 10;

  const handleIncrement = () => {
    setCount(prev => prev + 1);
  }

  useEffect(() => {
    if (count >= MAX) setCount(0);
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button type='button' onClick={handleIncrement}>Incrémenter</button>
    </div>
  )
}

export const LiveSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const data = ['React', 'Angular', 'Vue', 'Svelte'];

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input type='search' name="search" id="search" value={searchTerm} onChange={handleSearch} />
      <ul>
        {data.filter(value => value.toLowerCase().includes(searchTerm.toLowerCase())).map((value, idx) => <li key={idx}>{value}</li>)}
      </ul>
    </div>
  )
}
