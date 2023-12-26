import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Cast from '../pages/Cast';
import MovieDetails from '../pages/MovieDetails';
import Movies from '../pages/Movies';
// import Reviews from '../pages/Reviews';
import Layout from '../Layout/Layout';

const Reviews = lazy(() => import('../pages/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />} />
        
        <Route path="movies/:movieId/cast" element={<Cast />} />
        <Route
          path="movies/:movieId/reviews"
          element={
            <Suspense fallback={<>loading...</>}>
              <Reviews />
            </Suspense>
          }
        />
      </Route>
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
};
