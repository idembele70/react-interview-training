import { Routes, Route } from 'react-router';
import Search from './Search';

export default function Router() {
  return (
    <Routes>
      <Route path="search" element={<Search />} />
    </Routes>
  )
}
