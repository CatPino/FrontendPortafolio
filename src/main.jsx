import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { MantenerSesion } from "./componentes/MantenerSesion/MantenerSesion";
import { CarritoProvider } from "./componentes/Carrito/ContextCarrito.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CarritoProvider>
    <MantenerSesion>
      <App />
    </MantenerSesion>
    </CarritoProvider>
  </StrictMode>
);