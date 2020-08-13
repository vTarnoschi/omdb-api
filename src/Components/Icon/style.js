import styled, { css } from "styled-components";

const IconStyle = styled.div`
  ${({ styles }) => {
    const { color, size, cursor } = styles;

    return css`
      color: ${color};
      font-size: ${size}px;
      cursor: ${cursor};
    `;
  }}
`;

export default IconStyle;
