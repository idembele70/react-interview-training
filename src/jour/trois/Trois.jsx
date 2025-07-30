import React, { useState } from 'react';
import './Trois.css'

export const ButtonEventBubbling = () => {
  return (
    <div onClick={() => console.log('Clicked Parent')}>
      <button onClick={(e) => {
        console.log('Clicked Child');
        // e.stopPropagation();
      }}>Child</button>
    </div>
  )
}

export const Button = function (props) {
  return <button type="button" onClick={props.onClick}>{props.label}</button>
}

export const Counter = function (props) {
  return (
    <>
      <h1>{props.count}</h1>
      <button onClick={props.onClick}>{props.children}</button>
    </>
  )
}

export const DoubleCounter = () => {
  const [count, setCount] = React.useState(0);

  const handleIncrement = () => {
    setCount(c => c + 1);
  }
  const style = {
    display: 'flex',
    gap: 30,
    border: '1px solid green'
  }
  return (
    <div style={style}>
      <Counter count={count} onClick={handleIncrement}>Counter One</Counter>
      <Counter count={count} onClick={handleIncrement}>Counter Two</Counter>
    </div>
  )
}

export const AlertBox = function (props) {

  return (
    <div style={{ border: '1px solid red' }}>
      {props.children}
    </div>
  )
}

export const ButtonList = () => {
  const labels = ['Ok', 'Cancel', 'Retry'];

  const buttonItems = labels.map(
    (label, idx) => <button type="button" onClick={() => alert(label)} key={idx}>{label}</button>
  )

  return buttonItems
}

export const ThemeSwitcher = function() {
  const [theme, setTheme] = useState('light');

  const handleSwitchTheme = () => {
    if(theme === 'light')
      setTheme('dark');
    else
      setTheme('light');
  }

  const clsx = (names) => names.join(' ')

  return <>
    <div className={clsx([theme, 'box'])}>{theme}</div>
    <button type="button" onClick={handleSwitchTheme}>Switch theme</button>
  </>
}