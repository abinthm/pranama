import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LandingPage } from "./screens/LandingPage";
import { ThemeProvider } from "./contexts/ThemeContext";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <ThemeProvider>
      <LandingPage />
    </ThemeProvider>
  </StrictMode>,
);