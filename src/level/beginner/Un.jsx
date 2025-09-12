import React, { useEffect, useMemo, useRef, useState } from "react";

export const Hello = function ({ name }) {
  return `Hello, ${name}`;
}

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count => count + 1);
  }
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>+</button>
    </>
  )
}

export function TodoList() {
  const [todos, setTodos] = React.useState(['Manger', 'Coder', 'Dormir']);
  const todoItems = todos.map((todo, idx) => <li key={idx}>{todo}</li>)

  return (
    <ul>{todoItems}</ul>
  )
}

export const FilterList = () => {
  const names = ['Alice', 'Bob', 'Charlie'];
  const [nameList, setNameList] = useState(names);
  const [value, setValue] = useState('');

  const handleFilter = function (e) {
    setValue(e.target.value);
    const newList = names.filter(name => name.includes(e.target.value));
    setNameList(newList)
  }

  const nameItems = nameList.map((name, id) => <li key={id}>{name}</li>)

  return (
    <>
      <input type="search" name="search" id="search" value={value} onChange={handleFilter} />
      <ul>{nameItems}</ul>
    </>
  )
}

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const timeout = useRef(null);
  const TIME = 2000;

  useEffect(() => {
    timeout.current = setTimeout(()=> {
      const usersFetch = ['John', 'Jane', 'Jack'];
      setUsers(usersFetch)
      setLoading(false);
    }, TIME);
  }, [])
  const userItems = users.map((user, idx) => <li key={idx}>{user}</li>)

  if(loading) return <p>Chargement...</p>
  return <ul>{userItems}</ul>
}