import { useParams } from 'react-router-dom';
import React from 'react';

export default function UserDetail() {
  const { id } = useParams();
  const baseUrl = 'https://jsonplaceholder.typicode.com/users/';
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError('');
    fetch(baseUrl+id, {
      signal: controller.signal,
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch user with id: ' + id);
        }
        return res.json()
      })
      .then(setUser)
      .catch(err => {
        if (err.name !== 'AbortError')
          setError(err.message)
      })
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <h2>Loading...</h2>;

  if (error) return <h2>Error: {error}</h2>;

  return <h1>{user?.name}</h1>
}
