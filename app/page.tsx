// pages/index.tsx
"use client";
import Navbar from '../components/Navbar/Navbar'; // Adjusted path to match the file location
import { FC } from 'react';

const Home: FC = () => {
  const movies = [
    {
      title: 'Inception',
      overview: 'A thief who enters the dreams of others to steal secrets from their subconscious is given the inverse task of planting an idea into the mind of a CEO.',
      poster: '/images/R.jpg'
    },
    {
      title: 'The Matrix',
      overview: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
      poster: '/images/OIP.jpg'
    },
    {
      title: 'Interstellar',
      overview: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
      poster: '/images/img.jpg'
    }
  ];

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="title">Movie Recommendations</h1>
        <div className="movie-grid">
          {movies.map((movie, index) => (
            <div key={index} className="movie-card">
              <img src={movie.poster} alt={movie.title} className="movie-poster" />
              <h2 className="movie-title">{movie.title}</h2>
              <p className="movie-overview">{movie.overview}</p>
            </div>
          ))}
        </div>
        <style jsx>{`
          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
          }
          .title {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 20px;
          }
          .movie-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
          }
          .movie-card {
            background: #fff;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            max-width: 300px;
            text-align: center;
            padding: 10px;
          }
          .movie-poster {
            width: 100%;
            height: auto;
            border-bottom: 1px solid #ddd;
          }
          .movie-title {
            font-size: 1.25rem;
            margin: 10px 0;
          }
          .movie-overview {
            font-size: 1rem;
            color: #555;
          }
        `}</style>
      </div>
    </div>
  );
}

export default Home;
