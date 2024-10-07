// UserDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = ({ users }) => {
  const { id } = useParams();
  const user = users.find((user) => user.id === parseInt(id));

  if (!user) {
    return <h2>User not found</h2>;
  }

  return (
    <div>
      <h1>User Details</h1>
      <p><b>Name:</b> {user.name}</p>
      <p><b>Username:</b> {user.username}</p>
      <p><b>Email:</b> {user.email}</p>
      <p><b>Phone:</b> {user.phone}</p>
      <p><b>Website:</b> {user.website}</p>
    </div>
  );
};

export default UserDetails;
