import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
