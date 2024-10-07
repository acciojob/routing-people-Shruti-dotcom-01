
// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import UserList from './UserList';
import UserDetails from './UserDetails';

const App = () => {
  const users = [
    { id: 1, name: 'John Doe',  email: 'john@example.com' , username:'john', phone: '012-692-6953' , website: 'ramiro@info' },
    { id: 2, name: 'Jane Smith',  email: 'jane@example.com' ,username:'john', phone: '562-312-1234' , website: 'jane@info'},
    { id: 3, name: 'Alice Johnson',  email: 'alice@example.com',username:'john', phone: '932-512-7875' , website: 'alice@info' },
    { id: 4, name: 'Leanee Grahnam', email: 'Leanee@example.com',username:'john', phone: '932-512-7875' , website: 'alice@info' },
    { id: 5, name: 'Chersley Dietrech',  email: 'chersley@example.com',username:'john', phone: '932-512-7875' , website: 'alice@info' },
    { id: 6, name: 'Glienna Retrech', email: 'glienna@example.com',username:'john', phone: '932-512-7875' , website: 'alice@info' },
    { id: 7, name: 'Alice Johnson',  email: 'alice@example.com',username:'john', phone: '932-512-7875' , website: 'alice@info' },
    { id: 8, name: 'Ervin Howell', email: 'ervin@example.com',username:'john', phone: '932-512-7875' , website: 'alice@info' },
    { id: 9, name: 'Clementine Bleech', email: 'clementine@example.com',username:'john', phone: '932-512-7875' , website: 'alice@info' },
    { id: 10, name: 'Alice Johnson',email: 'alice@example.com', username:'john',phone: '932-512-7875' , website: 'alice@info' },
  ];

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<UserList users={users} />} />
          <Route path="/users/:id" element={<UserDetails users={users} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

