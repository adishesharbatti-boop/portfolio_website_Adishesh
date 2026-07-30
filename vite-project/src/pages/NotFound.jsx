import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '100px 20px' }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '10px' }}>404</h1>
      <h2>Page Not Found</h2>
      <p style={{ margin: '20px 0', color: 'var(--text-secondary, #666)' }}>
        Oops! The page you are looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn btn-primary" style={{ display: 'inline-block', marginTop: '10px' }}>
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;