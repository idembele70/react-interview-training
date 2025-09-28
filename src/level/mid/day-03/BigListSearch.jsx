import { useEffect, useState, useTransition, useMemo, memo } from 'react';

export default function() {
    const url = 'data/users.json';
  const [users, setUsers] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isPending, startTransition] = useTransition();

  const fetchUsers = async (url, searchTerm) => {
    const res = await fetch(url);

    if (!res.ok) return [];

    const data = await res.json();
    if (searchTerm)
      return data.results.slice(0,500).filter(u => u.name.first.toLowerCase().includes(searchTerm.toLowerCase()));
    return data.results.slice(0,500);
  }

  async function loadUsers(isMounted) {
    const data = await fetchUsers(url, searchTerm);
    if (isMounted)
      startTransition(() => setUsers(data));
  }

  useEffect(() => {
    let isMounted = true;
    loadUsers(isMounted)

    return () => { isMounted = false }
  }, [url, searchTerm])

  const userItem = useMemo(() => users?.map(user => <UserItem key={user.login.uuid}>{user.name.first}</UserItem>), [users, searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <div>
      <input type='text' name='search' autoComplete='off' value={searchTerm} onChange={handleSearch} />
      { isPending || users === null
        ? <h1>Loading...</h1>
        : !users?.length ? <h2>Users not found</h2>
        : <ul>{userItem}</ul>
      }
    </div>
  );
}

function User({ children }) {

  return (
    <li>{children}</li>
  )
}

const UserItem = memo(User);
