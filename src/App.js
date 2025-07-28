import './App.css';
import { AutoCounter, FocusInput, LoginForm, ToggleText, WelcomeBox } from './jour/Deux';

function App() {
  return (
    <>
      <LoginForm />
      <hr />
      <WelcomeBox isLoggedIn={true} />
      <hr />
      <ToggleText />
      <hr />
      <AutoCounter />
      <hr />
      <FocusInput />
      <hr />
    </>
  );
}

export default App;
