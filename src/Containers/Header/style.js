import styled from "styled-components";

export const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;

  .favorite-badge {
    align-self: center;
    font-size: 24px;
    color: #ffdf00;

    :hover {
      color: #fdcc0d;
    }
  }
`;

export const MovieListStyle = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid #f3f3f3;
  display: flex;
  justify-content: space-between;

  span {
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;
    transition: 0.1s;

    :hover {
      opacity: 0.5;
    }
  }

  div {
    align-self: center;
  }

  i {
    transition: 0.1s;

    :hover {
      opacity: 0.5;
    }
  }
`;
