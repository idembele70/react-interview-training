import React from 'react';

export function Counter() {
  const [step, setStep] = React.useState(1);
  const [count, setCount] = React.useState(0);

  const updateCounter = (delta) => {
    setCount((c) => c + delta * (Number.isFinite(step) ? step : 1));
  };

  return (
    <div>
      <h1> Counter: {count}</h1>
      <input type='number' value={step} onChange={(e) => setStep(e.target.valueAsNumber)} />
      <button type='button' onClick={() => updateCounter(1)}>+</button>
      <button type='button' onClick={() => updateCounter(-1)}>-</button>
    </div>
  )
}

export function SortableList() {
  const [list, setList] = React.useState([34, 12, 89, 4, 56]);
  const [order, setOrder] = React.useState(1);

  const toggleOrder = () => setOrder(o => -o);

  React.useEffect(() => {
    setList((l) =>
      [...l].sort((a, b) => order * (a - b))
    );
  }, [order])

  const listItems = list.map((item, idx) => <li key={idx}>{item}</li>)
  return (
    <div>
      <ul>{listItems}</ul>
      <button type='button' onClick={toggleOrder}>{order === -1 ? 'ASC' : 'DESC'}</button>
    </div>
  )
}

export function LiveSearch() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searching, setSearching] = React.useState(false);
  const firstNameList = ['toto', 'titi', 'john', 'jane', 'jade', 'ibra'];
  const timer = React.useRef(null);
  const DELAY = 500;

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setSearching(true);
    if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setSearching(false), DELAY);
  }

  React.useEffect(() => () => timer.current && clearInterval(timer.current), [])
  const filtered = firstNameList.filter(fname => fname.toLowerCase().includes(searchTerm.toLowerCase()));
  const firstNameItems = filtered.map((fname, idx) => <li key={idx}>{fname}</li>)

  return (
    <div>
      <input type='text' value={searchTerm} onChange={handleSearch} />
      <ul>{searching ? <p>'Recherche en cours...'</p> : firstNameItems}</ul>
    </div>
  )
}

const LOCAL_STORAGE_KEY = 'THEME';

export function ThemeSwitcher() {
  const [theme, setTheme] = React.useState('light');

  React.useLayoutEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) setTheme(stored)
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_KEY, newTheme);
  };

  const wrapperStyle = {
    border: '1px solid red',
    backgroundColor: theme === 'light' ? 'white' : 'black',
    height: 100,
    width: 100,
  };

  return (
    <div>
      <div style={wrapperStyle} />
      <button type='button' onClick={handleSwitch}>Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode</button>
    </div>
  )
}

export function Accordion() {
  const sectionList = ['Section 1', 'Section 2', 'Section 3'];
  const [openIndex, setOpenIndex] = React.useState(null);

  const handleChangeOpenIndex = (id) => setOpenIndex(id)

  const sectionItems = sectionList.map((name, idx) => <li onClick={() => handleChangeOpenIndex(idx)} key={idx}>{`${name} is ${openIndex === idx ? 'Open' : 'Close'}`}</li>)

  return (
    <div>
      <ul>{sectionItems}</ul>
    </div>
  )
}
