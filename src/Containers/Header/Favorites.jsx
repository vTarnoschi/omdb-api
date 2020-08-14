import React, { memo, useCallback } from "react";
import { useDispatch } from "react-redux";

import Drawer from "../../Components/Drawer";
import Icon from "../../Components/Icon";

import { useGlobalContext } from "../../Context";

import { movieSagaActionsCreator } from "../../Sagas/movieSaga";

import { MovieListStyle } from "./style";

const Favorites = memo(({ visible, onClose }) => {
  const dispatch = useDispatch();

  const {
    state: { favoriteMovies },
    actions: { onRemoveFavorite },
  } = useGlobalContext();

  const handleOnClose = useCallback(() => onClose && onClose(), [onClose]);

  const handleGetById = useCallback(
    (movieId) => {
      dispatch(movieSagaActionsCreator().movieSagaId(movieId));

      handleOnClose();
    },
    [dispatch, handleOnClose]
  );

  const handleOnRemoveFavorite = useCallback(
    (movieId) => onRemoveFavorite(movieId),
    [onRemoveFavorite]
  );

  const getFavoriteMovies = useCallback(() => {
    if (favoriteMovies.length > 0) {
      return favoriteMovies.map((item) => (
        <MovieListStyle
          key={item.movieId}
          onClick={() => handleGetById(item.movieId)}
        >
          <span>{item.name}</span>
          <Icon
            type="fas fa-trash"
            onClick={() => handleOnRemoveFavorite(item.movieId)}
          />
        </MovieListStyle>
      ));
    }

    return null;
  }, [favoriteMovies, handleOnRemoveFavorite, handleGetById]);

  return (
    <Drawer
      title="Favorites"
      visible={visible}
      width={400}
      onClose={handleOnClose}
    >
      {getFavoriteMovies()}
    </Drawer>
  );
});

export default Favorites;
