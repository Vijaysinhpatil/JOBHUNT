import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import { Toaster } from "./components/ui/sonner";
import { Provider } from "react-redux";
import store from "./redux/store";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-f76uob6h5b1gg7gq.us.auth0.com"
      clientId="At16DWKQs42eWQofFm3Mjqnpu830oNXY"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Provider store={store}>
        <App />
      </Provider>
      <Toaster />
    </Auth0Provider>
  </StrictMode>
);
