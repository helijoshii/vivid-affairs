import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ThemeContextProvider from "./context/ThemeContext.jsx";

import { PrimeReactProvider } from "primereact/api";

createRoot(document.getElementById("root")).render(
  <ThemeContextProvider>
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  </ThemeContextProvider>
);
