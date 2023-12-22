import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL, API_KEY } from '../components/Api/Api';
import axios from 'axios';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
        );
        setTrendingMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
        setTrendingMovies([]);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <p>Trending today:</p>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
