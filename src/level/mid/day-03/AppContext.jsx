import { createContext, useReducer, useMemo } from 'react';

export const AppContext = createContext(null);

const initialStore = {
  theme: 'light',
  language: 'fr',
};

const reducer = (state, action) =>  {
  switch(action.type) {
    case 'TOGGLE_THEME':
      const nextTheme = state.theme === 'light' ? 'dark' : 'light';
      return { ...state, theme: nextTheme };
    
    case 'SET_LANGUAGE':
      return { ...state, language: action.language };

    default:
      return state;
  }
}

const AppContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialStore);
  const values = useMemo(() => ({ ...value, dispatch }), [value]);

  return (
    <AppContext.Provider value={values}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider;
