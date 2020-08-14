import styled, { css } from "styled-components";

const metaScoreColors = {
  green: "#6c3",
  orange: "#fc3",
  red: "#f00",
};

function getMetaScoreColor(score) {
  const scoreNumber = Number(score);

  if (scoreNumber <= 39) return metaScoreColors.red;
  else if (scoreNumber >= 40 && scoreNumber <= 60)
    return metaScoreColors.orange;
  else return metaScoreColors.green;
}

const CardMovieStyle = styled.div`
  ${({ styles }) => {
    const { metascore } = styles;

    return css`
      box-shadow: 0px 0px 20px 3px rgba(191, 191, 191, 0.56);
      border-radius: 10px;
      padding: 15px;
      display: flex;
      max-width: 670px;
      min-width: 670px;
      min-height: 300px;

      .movie-poster {
        width: 200px;
      }

      .movie-details {
        display: flex;
        flex-direction: column;
        flex: 1;
        margin-left: 20px;

        div {
          flex: 1;
        }

        .movie-metascore {
          align-self: flex-end;
          display: flex;
          align-items: center;

          span {
            margin-right: 10px;
          }

          div {
            padding: 6px;
            color: #ffffff;
            background: ${getMetaScoreColor(metascore)};
          }
        }

        .movie-plot {
          font-size: 16px;
          margin-bottom: 8px;
        }

        .movie-title {
          display: flex;
          align-items: center;

          span {
            font-size: 20px;
            font-weight: 600;
            margin-right: 10px;
          }

          .favorite {
            color: #ffdf00;
            flex: 0;

            :hover {
              color: #fdcc0d;
            }
          }
        }

        .movie-tags {
          display: flex;
          margin-bottom: 8px;

          span {
            margin-right: 12px;
            color: darkgrey;
            font-size: 12px;
          }
        }

        .movie-writer,
        .movie-director,
        .movie-actors {
          margin-bottom: 8px;
          font-size: 16px;

          div {
            font-weight: 600;
          }

          span {
          }
        }
      }

      .movie-error,
      .card-loading {
        display: flex;
        justify-content: center;
        align-self: center;
        flex: 1;
      }

      .movie-error {
        span {
          font-size: 20px;
          font-weight: 600;
        }
      }
    `;
  }}
`;

export default CardMovieStyle;
