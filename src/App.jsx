import React from "react";
import { ConverToNetemb } from "./import";

const App = () => {
  return (
    <div>
      <h1>Hello from Webpack + React!</h1>
      <ConverToNetemb iframeURL="https://en.wikipedia.org/wiki/Art" />
    </div>
  );
};

export default App;
