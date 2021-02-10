import React from 'react';
import { Link } from 'react-router-dom';

// Rendered when an invalid page is accessed
const Error = () => (
  <div className="container">
    <h1>Oops. An error was encountered!</h1>
    <p className='text-danger'>You are trying to access an invalid page or creating a duplicate entry.</p>
    <Link to="/">
      Go Home
    </Link>
  </div>
);

export default Error;