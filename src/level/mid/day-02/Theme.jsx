import { useState, createContext, useContext, useMemo } from 'react';

const ThemeContext = createContext(null);

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
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
