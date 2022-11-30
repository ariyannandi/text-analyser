// import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert(
      {
        message: message,
        type: type,
      },
      setTimeout(() => {
        setAlert(null);
      }, 1500)
    );
  };

  const DarkMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#343a40";
      showAlert("Mode has been enabled", "dark");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Mode has been enabled", "light");
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          title="Text Analyser"
          about="About us"
          mode={mode}
          toggleMode={DarkMode}
        />
        <Alert alert={alert} />

        <Routes>
          <Route
            path="/"
            element={<TextForm mode={mode} showAlert={showAlert} />}
          />
          <Route path="/about" element={<About mode={mode} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
