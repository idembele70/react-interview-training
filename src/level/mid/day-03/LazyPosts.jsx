import { useEffect, useState, useMemo } from 'react';

export default function LazyPosts() {
  const url = 'https://jsonplaceholder.typicode.com/posts/';
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchPosts(url, signal) {
    const response = await fetch(url, { signal });
    if (!response.ok) return [];
    await new Promise(r => setTimeout(r, 2000));
    return await response.json();
  }

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    fetchPosts(url, controller.signal)
      .then(data => setData(data))
      .catch((err) => {
        console.log('Error during fetch:', err);
        setData([]);
      })
      .finally(() => setLoading(false));
  }, [url]);

  const postItems = useMemo(() => data.map(post => <li key={post.id}>{post.title}</li>), [data]);

  if (loading) return <Loading />
  
  return (
    <ul>
      {postItems}
    </ul>
  )
}

export function Loading() {
  return <h2>Loading posts...</h2>
}
