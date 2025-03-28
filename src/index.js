import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
// import reportWebVitals from "./reportWebVitals";
import store from './store/store';
import { Provider } from "react-redux";
import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { Auth0Provider } from "@auth0/auth0-react";




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-mrhjia4uz567rqcl.us.auth0.com"
    clientId="eHFy6F4nHjApEpt9ouH69onSZUn2VnIS"
    // redirectUri={window.location.origin}
    redirectUri={window.location.hostname === "localhost" ? "http://localhost:3000" : "https://danielu96.github.io/my-react/"}
    cacheLocation="localstorage">

    <React.StrictMode>
      <Provider store={store}>
        <ProductsProvider>
          <FilterProvider>
            <App />
          </FilterProvider>
        </ProductsProvider>
      </Provider>
    </React.StrictMode>
  </Auth0Provider>
);


