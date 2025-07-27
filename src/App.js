import './App.css';
import { Counter, FilterList, Hello, TodoList, Users } from './jour/Un';

function App() {
  return (
    <>
      <Hello name="Ibrahim" />
      <hr />
      <Counter />
      <hr />
      <TodoList />
      <hr />
      <FilterList />
      <hr />
      <Users />
    </>
  );
}

export default App;
