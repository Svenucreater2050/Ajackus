import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserForm({ userId }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  useEffect(() => {
    if (userId) {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => {
          const [firstName, lastName] = response.data.name.split(' ');
          setFormData({
            firstName,
            lastName,
            email: response.data.email,
          });
        })
        .catch(() => alert('Failed to load user details'));
    }
  }, [userId]);

  const handleSubmit = e => {
    e.preventDefault();
    const method = userId ? 'put' : 'post';
    const url = `https://jsonplaceholder.typicode.com/users${userId ? `/${userId}` : ''}`;
    axios[method](url, {
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
    })
      .then(() => alert('User saved successfully!'))
      .catch(() => alert('Failed to save user'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          value={formData.firstName}
          onChange={e => setFormData({ ...formData, firstName: e.target.value })}
          required
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          value={formData.lastName}
          onChange={e => setFormData({ ...formData, lastName: e.target.value })}
          required
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={formData.email}
          onChange={e => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </label>
      <br />
      <button type="submit">Save</button>
    </form>
  );
}

export default UserForm;
