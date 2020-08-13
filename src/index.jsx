import React, { useEffect, useCallback, useState } from "react";
import ReactDOM from "react-dom";

import { useDispatch, useSelector } from "react-redux";

import { Provider } from "react-redux";

import styled from "styled-components";

import { movieSagaActionsCreator } from "./Sagas/movieSaga";

import Icon from "./Components/Icon";
import Badge from "./Components/Badge";
import Input from "./Components/Input";
import Drawer from "./Components/Drawer";
import CardMovie from "./Components/CardMovie";

import configureStore from "./Store";

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .content-width {
    width: 980px;

    .header-content {
      display: flex;
      justify-content: space-between;

      .favorite-badge {
        align-self: center;
        font-size: 24px;
        color: #ffdf00;

        :hover {
          cursor: pointer;
          color: #fdcc0d;
        }
      }
    }
  }
`;

const List = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid #f3f3f3;
  display: flex;

  span {
    flex: 1;
    font-weight: 500;
    font-size: 18px;
    cursor: pointer;
  }
`;

const App = () => {
  const { movie, error, loading } = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [drawer, setDrawer] = useState(false);

  useEffect(() => {
    dispatch(movieSagaActionsCreator().movieSagaTitle("Interstellar"));
  }, []);

  const onSetFavorite = useCallback(
    (movieId, name) => {
      if (!favoriteMovies.some((favorite) => favorite.movieId === movie.imdbID))
        setFavoriteMovies((state) => [...state, { movieId, name }]);
      else
        setFavoriteMovies((state) =>
          state.filter((item) => item.movieId !== movieId)
        );
    },
    [favoriteMovies, movie]
  );

  const isMovieFavorite = useCallback(
    () => favoriteMovies.some((favorite) => favorite.movieId === movie.imdbID),
    [movie, favoriteMovies]
  );

  const handleSetDrawer = useCallback(() => setDrawer((state) => !state), []);

  const getCardMovie = useCallback(
    () => (
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
        onSetFavorite={onSetFavorite}
        id={movie.imdbID}
        favorite={isMovieFavorite()}
        error={error}
      />
    ),
    [movie, loading, onSetFavorite, isMovieFavorite, error]
  );

  const onRemoveFavorite = useCallback((movieId) => {
    setFavoriteMovies((state) =>
      state.filter((item) => item.movieId !== movieId)
    );
  }, []);

  const getMovie = useCallback(
    (evt) => {
      const { key, target } = evt;

      if (key === "Enter") {
        const { value } = target;

        dispatch(movieSagaActionsCreator().movieSagaTitle(value));
      }
    },
    [dispatch]
  );

  const handleGetById = useCallback(
    (movieId) => {
      dispatch(movieSagaActionsCreator().movieSagaId(movieId));

      handleSetDrawer();
    },
    [dispatch]
  );

  return (
    <React.Fragment>
      <Content>
        <div className="content-width">
          <div className="header-content">
            <Input placeholder="Movie Title" onKeyPress={getMovie} />
            <Badge count={favoriteMovies.length} className="favorite-badge">
              <Icon type="fas fa-star" onClick={handleSetDrawer} />
            </Badge>
          </div>
          {getCardMovie()}
        </div>
      </Content>

      <Drawer visible={drawer} width={400} onClose={handleSetDrawer}>
        {favoriteMovies.length > 0 &&
          favoriteMovies.map((item) => (
            <List
              key={item.movieId}
              onClick={() => handleGetById(item.movieId)}
            >
              <span>{item.name}</span>
              <Icon
                type="fas fa-trash"
                onClick={() => onRemoveFavorite(item.movieId)}
              />
            </List>
          ))}
      </Drawer>
    </React.Fragment>
  );
};

const root = document.getElementById("root");
ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  root
);
