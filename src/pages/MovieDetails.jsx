import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getMovieDetails } from '../components/Api/Api';
// import { useSearchParams } from 'react-router-dom';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  console.log('movieDetails', movieDetails);
  const { movieId } = useParams();

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieData = await getMovieDetails(movieId); // о фильме
        setMovieDetails(movieData);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setMovieDetails(null);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <p>Loading...</p>;
  }
  const genres = movieDetails.genres.map(genre => genre.name).join(', ');
  // const [searchParams, setSearchParams] = useSearchParams()

  const handleBack = () => {
    navigate(location.state ? '/movies' : '/', { state: '' });
  };
  return (
    <div>
      <button onClick={handleBack}>back</button>
      <h1>{movieDetails.title}</h1>
      <p>Overview: {movieDetails.overview}</p>
      <p>Genres: {genres}</p> {}
      <img
        src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
        alt=""
      />
    </div>
  );
};

export default MovieDetails;
