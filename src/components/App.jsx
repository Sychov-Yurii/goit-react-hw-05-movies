import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Cast from '../pages/Cast';
import MovieDetails from '../pages/MovieDetails';
import Movies from '../pages/Movies';
import Reviews from '../pages/Reviews';
import MoviesList from './MoviesList/MoviesList';

export const App = () => {
  return (
    <>
      <MoviesList />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cast" element={<Cast />} />
        <Route path="/moviedetails" element={<MovieDetails />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </>
  );
};
