import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import LoginAdministradores from "./pages/LoginAdministradores";
import RegistroAdministradores from "./pages/RegistroAdministradores";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<LoginAdministradores />} />
                <Route path="/registro" element={<RegistroAdministradores />} />
            </Routes>
        </Router>
    </React.StrictMode>
);
