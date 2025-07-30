import React from 'react';

export function UseEffect() {
  const [state, setState] = React.useState(0);
  React.useEffect(() => {
    console.log('Render');
  })
  return (
    <>
    <h1>{state}</h1>
    <button onClick={(e)=> {setState(s=>s + 1)}} type="button">Click Me!</button>
    </>
  )
}

export const DefaultProps = ({name = "get", age = '12'}) => {

  return <h1>{name} - {age}</h1>
}

export const UserCard = ({name, age, job }) => {

  return (
    <>
    <h2>Nom : {name}</h2>
    <h2>Âge : {age}</h2>
    <h2>Métier : {job}</h2>
    </>
  )
}

export const LikeButton = () => {
  const [count, setCount] = React.useState(0);

  return (
  <>
    <h1>Like count {count}</h1>
    <button type='button' onClick={() => setCount(c => c + 1)}>❤️ Like</button>
  </>
  )
}

export function ShowPassword() {
  const [type, setType] = React.useState('password');

  return (
    <>
    <input type={type} />
    <button type="button" onClick={() => setType(t => t === 'password' ? 'text' : 'password')}>{type === 'password' ? 'Afficher' : 'Cacher'}</button>
    </>
  )
}

export function ColorBox ({color = 'gray'}) {
  const style = {
    height: 100,
    width: 100,
    backgroundColor: color
  }
  return <div style={style} />
}

export function Greeting() {
  const [name, setName] = React.useState('');

  return (
    <>
      {name && <h1>Bonjour, {name} !</h1>}
      <input type='text' placeholder='Entrez votre nom' value={name} onChange={(e) => setName(e.target.value)} />
    </>
  )
}