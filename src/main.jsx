import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Challenge2 from "./challenge/tip/challenge.jsx";
import Challenge from "./challenge/challenge.jsx";
import FlashCards from "./challenge/flashcard.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <h2 style={{ margin: "100px 100px" }}> Challenge</h2>
    <FlashCards />
    <Challenge />
    <Challenge2 />
  </StrictMode>
);
