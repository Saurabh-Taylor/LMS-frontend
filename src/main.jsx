// component imports

import App from "./App.jsx";

// Css Imports
import "./index.css";

// Libraries Import
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import store from "./Redux/store.js";


ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>

  <BrowserRouter>
    <App />
    <Toaster/>
  </BrowserRouter>
  
  </Provider>
);
