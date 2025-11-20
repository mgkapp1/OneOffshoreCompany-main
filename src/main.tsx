import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./globals.css";

try {
  const container = document.getElementById("root");
  if (!container) {
    throw new Error("Root element not found");
  }
  
  const root = createRoot(container);
  root.render(<App />);
  
  console.log("App successfully mounted");
} catch (error) {
  console.error("Failed to mount app:", error);
  
  // Show error message in the DOM
  const container = document.getElementById("root");
  if (container) {
    container.innerHTML = `
      <div style="padding: 20px; text-align: center; font-family: Arial, sans-serif;">
        <h1 style="color: #dc2626;">Application Error</h1>
        <p>Failed to load the application. Please refresh the page.</p>
        <p style="color: #6b7280; font-size: 14px;">Error: ${error instanceof Error ? error.message : 'Unknown error'}</p>
      </div>
    `;
  }
}