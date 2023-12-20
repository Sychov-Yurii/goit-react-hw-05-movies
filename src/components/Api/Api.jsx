import axios from 'axios';

const API_KEY = '76c27c3a423231198130bdfb1ad095ef'; // API-ключ
const BASE_URL = 'https://api.themoviedb.org/3';

// Функція для отримання списку найпопулярніших фільмів на сьогодні
const getTrendingMovies = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
    );
    return response.data.results; // Повертаємо список фільмів
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    return []; // Повертаємо порожній масив у випадку помилки
  }
};

// Функція для пошуку фільмів за ключовим словом
const searchMovies = async query => {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
    );
    return response.data.results; // Повертаємо список знайдених фільмів
  } catch (error) {
    console.error('Error searching movies:', error);
    return []; // Повертаємо порожній масив у випадку помилки
  }
};

// Функція для отримання повної інформації про фільм за його ID
const getMovieDetails = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
    );
    return response.data; // Повертаємо повну інформацію про фільм
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null; // Повертаємо null у випадку помилки
  }
};

// ... (інші функції для отримання акторського складу, оглядів тощо)

export { getTrendingMovies, searchMovies, getMovieDetails };
