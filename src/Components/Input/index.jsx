import React, { memo } from "react";

import InputStyle from "./style";

const Input = memo(({ ...props }) => (
  <InputStyle>
    <input {...props} />
  </InputStyle>
));

export default Input;
