import './App.css';
import { DebouncedSearch, ExpensiveCalc, InputFocusTracker, InputFocusTrackerV2, Timer, TodoList } from './jour/Cinq';

function App() {
  return (
    <>
      <Timer />
      <hr />
      <TodoList />
      <hr />
      <InputFocusTracker />
      <hr />
      <ExpensiveCalc />
      <hr />
      <DebouncedSearch />
      <hr />
      <InputFocusTrackerV2 />
    </>
  );
}

export default App;
