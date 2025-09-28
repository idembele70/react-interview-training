import { useContext } from 'react';
import AppContextProvider, { AppContext } from './AppContext';

function SettingsPanel() {
  const { theme, language, dispatch } = useContext(AppContext);

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

