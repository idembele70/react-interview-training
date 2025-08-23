import './App.css';
import { Counter, SortableList, LiveSearch, ThemeSwitcher, Accordion } from './jour/ten.jsx';

function App() {
  return (
    <>
      <Counter />
      <hr />
      <SortableList />
      <hr />
      <LiveSearch />
      <hr />
      <ThemeSwitcher />
      <hr />
      <Accordion />
    </>
  );
}

export default App;
