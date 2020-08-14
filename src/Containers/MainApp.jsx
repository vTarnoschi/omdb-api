import React, { memo } from "react";

import Movie from "./Movie";
import Header from "./Header";

import Content from "./style";

const MainApp = memo(() => (
  <Content>
    <div className="content-width">
      <Header />
      <Movie />
    </div>
  </Content>
));

export default MainApp;
