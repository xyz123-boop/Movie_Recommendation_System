"use client";

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Search for:", searchQuery);
    // Implement search functionality here
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="left-links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </div>

        <div className="search-bar">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </div>

        <div className="right-links">
          <button>Login</button>
          <button>Signup</button>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          background: #333;
          padding: 10px 0;
          color: white;
        }
        .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .left-links, .right-links {
          display: flex;
          gap: 15px;
        }
        .left-links a, .right-links button {
          color: white;
          text-decoration: none;
          font-size: 1rem;
          background: none;
          border: none;
          cursor: pointer;
          padding: 5px 10px;
        }
        .left-links a:hover, .right-links button:hover {
          text-decoration: underline;
        }
        .search-bar {
          flex-grow: 1;
          display: flex;
          justify-content: center;
        }
        .search-bar input {
          padding: 5px;
          font-size: 1rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          margin-right: 5px;
          width: 300px;
        }
        .search-bar button {
          padding: 5px 10px;
          background-color: #555;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        .search-bar button:hover {
          background-color: #777;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
