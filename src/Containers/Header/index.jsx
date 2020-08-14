import React, { memo, useCallback, useState } from "react";
import { useDispatch } from "react-redux";

import Icon from "../../Components/Icon";
import Badge from "../../Components/Badge";
import Input from "../../Components/Input";

import { useGlobalContext } from "../../Context";

import { movieSagaActionsCreator } from "../../Sagas/movieSaga";

import Favoritos from "./Favorites";

import { HeaderStyle } from "./style";

const Header = memo(() => {
  const dispatch = useDispatch();

  const {
    state: { favoriteMovies },
  } = useGlobalContext();

  const [visible, setVisible] = useState(false);

  const getMovie = useCallback(
    (evt) => {
      const { key, target } = evt;

      if (key === "Enter") {
        const { value } = target;

        dispatch(movieSagaActionsCreator().movieSagaTitle(value));

        document.getElementById("movie-search").value = "";
      }
    },
    [dispatch]
  );

  const handleSetVisible = useCallback(() => setVisible((state) => !state), []);

  return (
    <React.Fragment>
      <HeaderStyle>
        <Input
          placeholder="Movie Title"
          onKeyPress={getMovie}
          id="movie-search"
        />
        <Badge count={favoriteMovies.length} className="favorite-badge">
          <Icon type="fas fa-star" onClick={handleSetVisible} />
        </Badge>
      </HeaderStyle>

      <Favoritos visible={visible} onClose={handleSetVisible} />
    </React.Fragment>
  );
});

export default Header;
