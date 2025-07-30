import './App.css';
import { ColorBox, DefaultProps, Greeting, LikeButton, ShowPassword, UseEffect, UserCard } from './jour/Quatre';

function App() {
  return (
    <>
      <UseEffect />
      <hr />
      <DefaultProps />
      <hr />
      <UserCard name='Ibrahim' age={24} job='Développeur' />
      <hr />
      <LikeButton />
      <hr />
      <ShowPassword />
      <hr />
      <ColorBox color='red' />
      <hr />
      <Greeting />
    </>
  );
}

export default App;
