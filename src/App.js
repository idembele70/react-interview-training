import './App.css';
import { LimitedCounter, RemovableList, ThemeSwitcher, AutoResetCounter, LiveSearch } from './jour/nine.jsx'

function App() {
  return (
    <>
      <LimitedCounter />
      <hr />
      <RemovableList />
      <hr />
      <ThemeSwitcher />
      <hr/>
      <AutoResetCounter />
      <hr />
      < LiveSearch />
    </>
  );
}

export default App;
