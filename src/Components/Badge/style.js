import styled from "styled-components";

const BadgeStyle = styled.div`
  position: relative;

  .badge {
    position: absolute;
    top: -8px;
    right: -5px;
    padding: 1px 5px;
    border-radius: 50%;
    background: red;
    color: white;
    font-size: 15px;
  }
`;

export default BadgeStyle;
