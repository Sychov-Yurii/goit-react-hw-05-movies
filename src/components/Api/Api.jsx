import axios from 'axios';

export const API_KEY = '76c27c3a423231198130bdfb1ad095ef';
export const BASE_URL = 'https://api.themoviedb.org/3';

const getTrendingMovies = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    return [];
  }
};

const searchMovies = async query => {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
    );
    return response.data.results;
  } catch (error) {
    console.error('Error searching movies:', error);
    return [];
  }
};

const getMovieDetails = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null;
  }
};

// актерский состав
const getMovieCredits = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching movie credits:', error);
    return null;
  }
};

// ревью
const getMovieReviews = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching movie reviews:', error);
    return null;
  }
};

export {
  getTrendingMovies,
  searchMovies,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
};
