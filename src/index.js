import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
// import reportWebVitals from "./reportWebVitals";
import store from './store/store';
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-mrhjia4uz567rqcl.us.auth0.com"
    clientId="eHFy6F4nHjApEpt9ouH69onSZUn2VnIS"
    redirectUri={window.location.origin}
    cacheLocation="localstorage">

    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
