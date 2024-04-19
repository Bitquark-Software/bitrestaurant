import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import LoginAdmnistradores from "./pages/LoginAdministrador";
import RegistroAdmnistradores from "./pages/RegistroMeseros";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RegistroAdmnistradores/>

    </React.StrictMode>,
);
