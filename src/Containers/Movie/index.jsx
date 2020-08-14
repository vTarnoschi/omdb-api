import React, { memo, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CardMovie from "../../Components/CardMovie";

import { movieSagaActionsCreator } from "../../Sagas/movieSaga";

import { useGlobalContext } from "../../Context";

const Movie = memo(() => {
  const { movie, error, loading } = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  const {
    state: { favoriteMovies },
    actions: { onSetFavorite },
  } = useGlobalContext();

  useEffect(() => {
    dispatch(movieSagaActionsCreator().movieSagaTitle("Interstellar"));
  }, []);

  const isMovieFavorite = useCallback(
    () => favoriteMovies.some((favorite) => favorite.movieId === movie.imdbID),
    [movie, favoriteMovies]
  );

  const handleOnSetFavorite = useCallback(
    (movieId, name) => {
      let values = [...favoriteMovies];

      if (
        !favoriteMovies.some((favorite) => favorite.movieId === movie.imdbID)
      ) {
        values = [...values, { movieId, name }];
      } else {
        values = values.filter((item) => item.movieId !== movieId);
      }

      onSetFavorite(values);
    },
    [onSetFavorite, favoriteMovies, movie]
  );

  return (
    <CardMovie
      title={movie.Title}
      image={movie.Poster}
      plot={movie.Plot}
      director={movie.Director}
      actors={movie.Actors}
      year={movie.Year}
      genre={movie.Genre}
      metascore={movie.Metascore}
      rated={movie.Rated}
      writer={movie.Writer}
      loading={loading}
      onSetFavorite={handleOnSetFavorite}
      id={movie.imdbID}
      favorite={isMovieFavorite()}
      error={error}
    />
  );
});

export default Movie;
