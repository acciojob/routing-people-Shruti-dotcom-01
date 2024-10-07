// UserDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = ({ users }) => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating an API call
    const fetchUser = () => {
      const fetchedUser = users.find((user) => user.id === parseInt(id));
      setUser(fetchedUser);
      setLoading(false);
    };

    setTimeout(fetchUser, 1000); // Simulate network delay
  }, [id, users]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <h2>User not found</h2>;
  }

  return (
    <div>
      <h2>User Details</h2>
      <p><b>Name:</b> {user.name}</p>
      <p><b>Username:</b> {user.username}</p>
      <p><b>Email:</b> {user.email}</p>
      <p><b>Phone:</b> {user.phone}</p>
      <p><b>Website:</b> {user.website}</p>
    </div>
  );
};

export default UserDetails;
