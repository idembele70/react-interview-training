import './App.css';
import { lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Counter from './level/mid/day-02/Counter';
import User from './level/mid/day-02/UserDetail';
import FormArray from './level/mid/day-02/FormArray';
import Theme from './level/mid/day-02/Theme';

const Users = lazy(() => import('./level/mid/day-02/UserList'));


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/users' element={<Users />} />
        <Route path='/users/:id' element={<User />} />
        <Route path='/home' element={<h1>Home page</h1>} />
        <Route path='counter' element={<Counter />} />
        <Route path='forms' element={<FormArray />} />
        <Route path='theme' element={<Theme />} />
      </Routes>
    </Router>
  )
}

export default App;
