import React from "react";
import { ConverToNetemb } from "./import";

const App = () => {
  return (
    <div>
      <h1>Hello from Webpack + React!</h1>
      <ConverToNetemb iframeURL="https://core.order.dev.graphxserver.io/Order/ConvertToOrderOrQuoteFromAIAttachment?AttachmentId=63920&ConvertType=1" />
    </div>
  );
};

export default App;
