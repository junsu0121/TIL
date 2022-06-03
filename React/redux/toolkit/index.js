import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
//provider 사용 위해 임포트
import store from "./redux/store";
//store 사용위해 임포트

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    {/* provider로 app.js 감싸주기, store도 함께 */}
    {/* 툴킷에서도 같음 여기는 */}
    <App />
  </Provider>
);
