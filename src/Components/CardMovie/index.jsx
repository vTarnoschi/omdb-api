import React, { memo, useCallback } from "react";

import Icon from "../Icon";
import Loading from "../Loading";

import CardMovieStyle from "./style";

const CardMovie = memo(
  ({
    image,
    title,
    plot,
    director,
    actors,
    loading,
    metascore,
    genre,
    year,
    rated,
    writer,
    onSetFavorite,
    id,
    favorite,
    error,
  }) => {
    const handleOnSetFavorite = useCallback(() => {
      if (onSetFavorite) onSetFavorite(id, title);
    }, [onSetFavorite, id]);

    const getIconType = useCallback(
      () => (favorite ? "fas fa-star" : "far fa-star"),
      [favorite]
    );

    const getReturn = () => {
      if (loading)
        return (
          <div className="card-loading">
            <Loading />
          </div>
        );

      if (error && error !== "")
        return (
          <div className="movie-error">
            <span>{error}</span>
          </div>
        );

      return (
        <React.Fragment>
          <img src={image} className="movie-poster" />

          <div className="movie-details">
            <div className="movie-metascore">
              {!Number.isNaN(Number(metascore)) && (
                <React.Fragment>
                  <span>Metascore</span>
                  <div>{metascore}</div>
                </React.Fragment>
              )}
            </div>

            <div className="movie-title">
              <span>{title}</span>
              <Icon
                type={getIconType()}
                className="favorite"
                onClick={handleOnSetFavorite}
              />
            </div>

            <div className="movie-tags">
              <span>{rated}</span>
              <span>{year}</span>
              <span>{genre}</span>
            </div>

            <div className="movie-plot">
              <span>{plot}</span>
            </div>

            <div className="movie-writer">
              <div>Writen by</div>
              <span>{writer}</span>
            </div>

            <div className="movie-director">
              <div>Diricted by</div>
              <span>{director}</span>
            </div>

            <div className="movie-actors">
              <div>Actors</div>
              <span>{actors}</span>
            </div>
          </div>
        </React.Fragment>
      );
    };

    return (
      <CardMovieStyle styles={{ metascore }}>{getReturn()}</CardMovieStyle>
    );
  }
);

export default CardMovie;
