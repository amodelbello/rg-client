import React from "react";
import "./App.css";

import Header from "./components/layout/Header";
import Content from "./components/layout/Content";
import Footer from "./components/layout/Footer";

export default () => {
  return (
    <React.Fragment>
      <Header />
      <Content />
      <Footer />
    </React.Fragment>
  );
};
