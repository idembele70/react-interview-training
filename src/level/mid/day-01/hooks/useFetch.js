import { useState, useEffect } from 'react';

  const initialState = {
    data: null,
    loading: false,
    error: null,
  };

export default function useFetch(pathname) {
  const baseUrl = 'https://jsonplaceholder.typicode.com/'
  const url = new URL(pathname, baseUrl);

  const [state, setState] = useState(initialState);

  useEffect(() => {
    const controller = new AbortController();
    setState(prev => ({ ...prev, loading: true, error: null }));

    fetch(url.href, { signal: controller.signal })
      .then(res => {
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
        return res.json()
    })
    .then(data => setState({ data, loading: false, error: null }))
    .catch(err => {
      if (err.name !== 'AbortError')
        setState({ data: null, loading: false, error: err.message});
    })

      return () => controller.abort();
  }, [pathname]);

  return state;
}
