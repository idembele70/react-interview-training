import './App.css';
import { AlertBox, Button, ButtonEventBubbling, ButtonList, DoubleCounter, ThemeSwitcher } from './jour/trois/Trois';

function App() {
  return (
    <>
      <ButtonEventBubbling />
      <hr />
      <Button label='Click Me!' onClick={() => console.log('Clicked')} />
      <hr />
      <DoubleCounter />
      <hr/>
      <AlertBox>Attention : action irréversible</AlertBox>
      <hr />
      <ButtonList />
      <hr />
      <ThemeSwitcher />
    </>
  );
}

export default App;
