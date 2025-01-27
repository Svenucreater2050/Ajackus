import React from 'react';
import { Link } from 'react-router-dom';

function UserList({ users }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name.split(' ')[0]}</td>
            <td>{user.name.split(' ')[1]}</td>
            <td>{user.email}</td>
            <td>
              <Link to={`/edit/${user.id}`}>Edit</Link>
              <button
                onClick={() => alert(`Delete user with ID: ${user.id}`)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserList;
