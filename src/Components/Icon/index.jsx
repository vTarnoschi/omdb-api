import React, { memo, useCallback } from "react";

import IconStyle from "./style";

const Icon = memo(({ type, color, size, onClick, ...props }) => {
  const getCursor = useCallback(() => (onClick ? "pointer" : "initial"), [
    onClick,
  ]);

  return (
    <IconStyle {...props} onClick={onClick} styles={{ color, size, cursor: getCursor }}>
      <i className={type} />
    </IconStyle>
  );
});

export default Icon;
