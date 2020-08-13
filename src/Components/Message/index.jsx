import React, { memo, useCallback, useEffect } from "react";
import ReactDOM from "react-dom";

import Icon from "../Icon";

import MessageStyle from "./style";

const types = {
  error: {
    type: "fas fa-times-circle",
    color: "#c10303",
  },
};

const Message = ({ message, type, visible }) => {
  const getIconType = useCallback(() => {
    if (types[type]) {
      return <Icon type={types[type].type} color={types[type].color} />;
    }

    return null;
  }, [type]);

  const getVisible = useCallback(() => (visible ? "flex" : "none"), [visible]);


  return (
    <MessageStyle styles={{ display: getVisible() }}>
      <div className="message">
        {getIconType()}
        {message}
      </div>
    </MessageStyle>
  );
};

Message.error = ({ message }) => (
  <Message type="error" message={message} visible />
);

export default Message;
