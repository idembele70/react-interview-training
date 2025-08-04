import { useEffect, useRef, useState } from "react";

export function RandomQuote() {
  const QUOTE_LIST = ['Food is life', 'Never drink alcohol', 'Be yourself!'];
  const [quote, setQuote] = useState('');

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * QUOTE_LIST.length);
    return QUOTE_LIST[randomIndex];
  }

  const handleChangeQuote = () => {
    let next;
    do {
      next = getRandomQuote();
    }
    while (next === quote);
    setQuote(next)
  }

  return (
    <div>
      <q>{quote}</q><br />
      <button type="button" onClick={handleChangeQuote}>Change Quote</button>
    </div>
  )
}

export function TimerButton() {
  const [time, setTime] = useState(0);
  const interval = useRef(null);
  const [start, setStart] = useState(false);

  const handleStartTimer = function () {
    const DELAY = 1_000;
    const MAX = 5;
    const INCREMENT = 1;
    setStart(true);
    setTime(0);
    interval.current = setInterval(() => {
      setTime(prev => {
        if (prev < MAX)
          return prev + INCREMENT;
        clearInterval(interval.current);
        setStart(false);
        return prev;
      });
    }, DELAY);
  }

  useEffect(() => () => {
    if (interval.current)
      clearInterval(interval.current);
  }, [])

  return (
    <>
      <h1>{time}</h1>
      <button type="button" onClick={handleStartTimer} disabled={start}>Démarrer le minuteur</button>
    </>
  )
}

export function CharacterCounter() {
  const [value, setValue] = useState('');
  const [count, setCount] = useState({
    char: 0,
    word: 0
  });

  const getCharCount = (str) => str.trim().length

  const getWordCount = (str) => {
    if (str.trim() === '') return 0
    return str.trim().split(' ').length;
  }

  const handleChange = function (e) {
    const currentVal = e.target.value
    setValue(currentVal);
    setCount({
      char: getCharCount(currentVal),
      word: getWordCount(currentVal)
    })
  }

  return (
    <div>
      <h2>Nombre de caractères: {count.char}</h2>
      <h2>Nombre de mots: {count.word}</h2>
      <input type="text" name="char" id="char" value={value} onChange={handleChange} />
    </div>
  )
}

export function Tabs() {
  const tabs = useRef(['Accueil', 'Profil', 'Paramètres']);
  const [current, setCurrent] = useState(tabs.current[0]);

  const handleNavigate = (name) => setCurrent(name);

  const tabItems = tabs.current.map((name, id) => <button onClick={() => handleNavigate(name)} key={id} type="button">{name}</button>);

  const headerStyle = {
    display: 'flex',
    columnGap: 16,
    marginBottom: 8
  }
  return (
    <div>
      <div style={headerStyle}>{tabItems}</div>
      <h1>{current}</h1>
    </div>
  )
}

export function PersistentForm() {
  const KEY = 'persistent-form';
  const [values, setValues] = useState({
    email: '',
    message: '',
  });

  const saveToLocalStorage = function (data) {
    localStorage.setItem(KEY, JSON.stringify(data));
  }

  const getLocalStorageData = function () {
    const data = localStorage.getItem(KEY);
    const parsedData = JSON.parse(data);
    return parsedData;
  }

  useEffect(() => {
    const data = getLocalStorageData();
    if (data) setValues(data);
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => {
      const currentValues = { ...prev, [name]: value }
      saveToLocalStorage(currentValues)
      return currentValues;
    });
  }

  return (
    <form>
      <label htmlFor="email">Email:</label><br />
      <input type="email" name="email" id="email" value={values.email} onChange={handleChange} /><br />
      <label htmlFor="message">Message:</label><br />
      <textarea name="message" id="message" cols="30" rows="10" value={values.message} onChange={handleChange} />
    </form>
  )
}