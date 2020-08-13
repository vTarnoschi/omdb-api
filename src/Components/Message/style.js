import styled, { css } from "styled-components";

const MessageStyle = styled.div`
  ${({ styles }) => {
    const { display } = styles;

    return css`
      display: ${display};
      justify-content: center;

      .message {
        z-index: 9;
        position: fixed;
        background: #fff;
        padding: 5px;
        border-radius: 3px;
        box-shadow: 2px 2px 10px #aaa;
        top: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        animation: fadeInTop ease-in-out 500ms;

        i {
          margin-right: 5px;
        }
      }

      @keyframes fadeInTop {
        0% {
          opacity: 0;
          top: -40px;
        }
        100% {
          opacity: 1;
          top: 10px;
        }
      }
    `;
  }}
`;

export default MessageStyle