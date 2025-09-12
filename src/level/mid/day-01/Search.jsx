import React from 'react';
import useFetch from './hooks/useFetch';
import { useSearchParams } from 'react-router-dom';

export default function Search() {
  const pathname = 'posts';
  const { data, error, loading } = useFetch(pathname);
  const [searchTerm, setSearchTerm] = useSearchParams();

  const query = searchTerm.get('q') ?? '';
  const filteredItems = React.useMemo(() => data?.filter(item => item.title.includes(query.toLowerCase())), [query, data]);

  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>error</h1>


  function handleSearch(e) {
    setSearchTerm({ q: e.target.value });
  }

  return (
    <div>
    <input type="text" autocomplete="off" name="search" value={searchTerm.get('q')} onChange={handleSearch} />
      {
        !!filteredItems?.length &&
        <ul>
         {filteredItems?.map(item => <li key={item.id}>{item.title}</li>)}
        </ul>
        }
        { !filteredItems?.length && <h1>No items was Found</h1>}
    </div>
  )
}
