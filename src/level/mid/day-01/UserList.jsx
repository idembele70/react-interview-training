import { useState, useRef, useMemo, useEffect } from 'react';

export default function() {
  const realUrl = 'https://randomuser.me/api/?results=5000'
  const backUpUrl = 'https://dummyjson.com/users'
  const backUpOfBackUpUrl ='data/users.json'
  const { data, error, loading } = useFetch(backUpOfBackUpUrl);
  const [searchTerm, setSearchTerm] = useState('');
  const [searching, setSearching] = useState(false);
  let timeout = useRef(null);

  const handleSearch = function(e) {
    if (loading || error) return;
    setSearchTerm(e.target.value.toLowerCase());
    setSearching(true)
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      setSearching(false)
    }, 500)
  }

  const users = useMemo(
    () => data.filter(u =>
      u.login.username.toLowerCase().includes(searchTerm.toLowerCase())
    ),
    [data, searchTerm]
  );

  return (
    <div>
      <input type="text" name="search" value={searchTerm} onChange={handleSearch} placeholder="Search username" disabled={loading || error} autoComplete='off' />
     
       {loading || searching ? <h1>Loading...</h1>
          : error ? <h1>{error}</h1>
          : users.length ? <pre>{JSON.stringify(users, null, 2)}</pre>
          : <h1>No users found</h1>}
    </div>
  )
}

function useFetch(url) {
  //const baseUrl = 'https://jsonplaceholder.typicode.com/'
  //const urlObject = new URL(url);

  const [state, setState] = useState({
    data: [],
    loading: false,
    error: '',
  });

  useEffect(() => {
    const controller = new AbortController();

    setState({ ...state, loading: true });
    fetch(url, { signal: controller.signal })
      .then(res => {
        if (!res.ok)
          throw new Error('url not found');
        return res.json()
    })
    .then(data => setState(prev => ({ ...prev, data: data.results })))
      .catch(err => {
        setState(prev =>({ ...prev, error: err.message}))
      })
      .finally(() => {
        setState(prev => ({ ...prev, loading: false }))
       });

      return () => {
        //controller.abort();
      }
  }, [url]);

  return state;
}
