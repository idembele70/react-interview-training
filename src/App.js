import './App.css';
import { AutoResetCounter, FocusInput, NameForm, ProgressBar, SimpleTodoList } from './jour/six';

function App() {
  return (
    <>
      <AutoResetCounter />
      <hr />
      <NameForm />
      <hr />
      <SimpleTodoList />
      <hr />
      <ProgressBar />
      <hr />
      <FocusInput />
    </>
  );
}

export default App;
