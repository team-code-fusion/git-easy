import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

function App() {
  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    await invoke("greet", { name });
  }

  return (
    <div className="container">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
