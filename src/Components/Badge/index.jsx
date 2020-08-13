import React, { memo } from "react";

import BadgeStyle from "./style";

const Badge = memo(({ count, children, ...props }) => (
  <BadgeStyle {...props}>
    {children}
    {count > 0 && <span className="badge">{count}</span>}
  </BadgeStyle>
));

export default Badge;
