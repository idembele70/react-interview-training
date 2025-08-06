import './App.css';
import { DynamicList, FormValidator, Horloge, ScrollToTopButton, ToggleSwitch } from './jour/eight';

function App() {
  return (
    <>
      <ToggleSwitch />
      <hr />
      <ScrollToTopButton />
      <hr />
      <FormValidator />
      <hr />
      {/* <Horloge /> */}
      <hr />
      <DynamicList />
      <hr />
    </>
  );
}

export default App;
