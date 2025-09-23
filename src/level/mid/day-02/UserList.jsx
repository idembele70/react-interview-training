import { Suspense, useState, useEffect, useMemo, use } from 'react';

const DELAY = 3_000;

async function fetchUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/');

  if (!response.ok) throw new Error('Failed to fetch users');

  await new Promise(resolve => setTimeout(resolve, DELAY));

  return response.json();
}

const userResource = (() => {
  let promise;
  let data;
  return {
    read() {
      if (data) return data;
      if (!promise)
        promise = fetchUsers().then(res => (data = res));
      throw promise;
    }
  }
})();

function UserList() {
  const users = userResource.read();

  const userItems = useMemo(() => users.map(user => <li key={user.id}>{user.name}</li>), [users]);
  return (
    <ul>
      {userItems}
    </ul>
  )
}

function Loading() {
  return <h2>Loading users...</h2>
}

export default function () {
  return (
    <Suspense fallback={<Loading />}>
      <UserList />
    </Suspense>
  );
}
