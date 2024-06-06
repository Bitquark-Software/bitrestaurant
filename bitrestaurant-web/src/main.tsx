import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import LoginAdmnistradores from "./pages/LoginAdministradores";
import RegistroAdmnistradores from "./pages/RegistroAdministradores";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RegistroAdmnistradores/>

    </React.StrictMode>,
);
