import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../bootstrap-5.3.5-dist/css/bootstrap.css";
import "../bootstrap-5.3.5-dist/js/bootstrap.bundle.js";
import "../font-awesome-4.7.0/css/font-awesome.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import App from "./App.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

