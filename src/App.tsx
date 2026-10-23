import { HashRouter, Routes, Route, Navigate } from "react-router";

import Home from "./pages/Home";
import ProjectDetailPage from "./pages/ProjectDetailPage";

import "./App.css";

function App() {
  return (
    <HashRouter>
      <div className="relative min-h-screen">
        {/* Fondo global */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="lava lava-1" />
          <div className="lava lava-2" />
          {/* <div className="lava lava-3"></div> */}
        </div>

        {/* Contenido según la ruta */}
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/proyectos"
              element={<Home />}
            />

            <Route
              path="/proyectos/:id"
              element={<ProjectDetailPage />}
            />

            <Route
              path="*"
              element={<Navigate to="/" replace />}
            />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;