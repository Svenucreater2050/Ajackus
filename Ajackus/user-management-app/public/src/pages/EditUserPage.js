import React from 'react';
import { useParams } from 'react-router-dom';
import UserForm from '../components/UserForm';

function EditUserPage() {
  const { id } = useParams();

  return (
    <div>
      <h1>Edit User</h1>
      <UserForm userId={id} />
    </div>
  );
}

export default EditUserPage;
