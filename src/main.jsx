import React from "react";
import ReactDOM from "react-dom/client";
import store from "./redux/index.js";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { Toaster } from "react-hot-toast";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
    <Toaster
      position="top-center"
      toastOptions={{
        style: {
          background: "#010101",
          color: "#fff",
        },
      }}
    />
  </Provider>
);
