import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header">
      <h1>TodoList </h1>
      <Link className="links" to="/">
        Home
      </Link>{' '}
      |{' '}
      <Link className="links" to="/about">
        About
      </Link>
    </div>
  );
}
