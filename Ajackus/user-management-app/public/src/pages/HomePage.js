import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserList from '../components/UserList';

function HomePage() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
      .catch(() => setError('Failed to fetch users'));
  }, []);

  return (
    <div>
      <h1>User Management App</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <UserList users={users} />
    </div>
  );
}

export default HomePage;
