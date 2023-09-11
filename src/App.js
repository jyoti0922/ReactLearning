import "./App.css";
import Practicestate from "./components/Practicestate";
import "bootstrap/dist/css/bootstrap.min.css";
import Practiceuseeffect from "./components/Practiceuseeffect";
import About from "./components/About";
import { useAccordionButton } from "react-bootstrap";
import { useState } from "react";
import Nav from "./components/Nav";
import Alert from "./components/Alert";
import { Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.title = "TextUtil-Dark Mode";
      showAlert("Dark mode has been enabled", "success");
      // setInterval(() => {
      //   document.title = "TextUtil is Amazing  Mode";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtil Now";
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "TextUtil-Light Mode";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      <Nav
        title="TextUtils"
        aboutText="About TextUtils"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />

      {/* <Practiceuseeffect /> */}

      <Routes>
        <Route
          exact
          path="/"
          element={
            <Practicestate
              heading="Enter the text to analyze below"
              mode={mode}
              showAlert={showAlert}
            />
          }
        />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
