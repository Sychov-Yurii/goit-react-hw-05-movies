import React, { useState } from 'react';
import { searchMovies } from 'components/Api/Api';
import SearchForm from '../components/SearchForm/SearchForm';
import { Link } from 'react-router-dom';

const Movies = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async query => {
    const results = await searchMovies(query);
    setSearchResults(results);
  };

  return (
    <>
      <SearchForm submit={handleSearch} />
      <div>
        {searchResults.length > 0 ? (
          <ul>
            {searchResults.map(movie => (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>No search results found.</p>
        )}
      </div>
    </>
  );
};

export default Movies;
