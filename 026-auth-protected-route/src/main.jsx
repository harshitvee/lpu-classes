import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
ReactDOM.createRoot(document.getElementById("root")).render(
    <Auth0Provider
        domain="dev-4c84yn73vhrv3vyf.us.auth0.com"
        clientId="W8DmMSC4xAjaHgLkrB7nNsYYFsJnJFrK"
        authorizationParams={{
            redirect_uri: window.location.origin,
        }}
    >
        <App />
    </Auth0Provider>
);
