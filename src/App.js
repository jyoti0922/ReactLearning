import "./App.css";
import Practicestate from "./components/Practicestate";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About";
import { useState } from "react";
import Nav from "./components/Nav";
import Alert from "./components/Alert";
import { Route, Routes } from "react-router-dom";
import ContactUs from "./components/ContactUs";

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
  // const removeBodyClasses = () => {
  //   document.body.classList.remove("bg-light");
  //   document.body.classList.remove("bg-dark");
  //   document.body.classList.remove("bg-success");
  //   document.body.classList.remove("bg-danger");
  //   document.body.classList.remove("bg-warning");
  // };
  const toggleMode = (cls) => {
    // console.log(cls);
    // removeBodyClasses();
    // document.body.classList.add("bg-" + cls);
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      <Nav
        title="TextUtils"
        aboutText="About TextUtils"
        contactText="Contact TextUtils"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Practicestate
              heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces"
              mode={mode}
              showAlert={showAlert}
            />
          }
        />
        <Route exact path="/about" element={<About mode={mode} />} />
        <Route exact path="/contact us" element={<ContactUs mode={mode} />} />
      </Routes>
    </>
  );
}

export default App;
