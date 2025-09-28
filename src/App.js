import './App.css';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BigListSearch from './level/mid/day-03/BigListSearch';
import { Loading } from './level/mid/day-03/LazyPosts';
import DynamicForm from './level/mid/day-03/DynamicForm';
import SettingsPanel from './level/mid/day-03/SettingsPanel';
import Products from './level/mid/day-03/Products';

const LazyPosts = lazy(() => import('./level/mid/day-03/LazyPosts'));

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='search' element={<BigListSearch />} />
        <Route path='posts' element={<Suspense fallback={<Loading />}><LazyPosts /></Suspense>} />
        <Route path='forms' element={<DynamicForm />} />
        <Route path='setting' element={<SettingsPanel />} />
        <Route path='products' element={<Products />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
