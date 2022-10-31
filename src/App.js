import "./App.css";
import Navbar from "./Navbar.js";
import Alert from "./Alert.js";
import TextForm from "./TextForm.js";
import About from "./About.js"
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
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
  const [labelText, setlabelText] = useState("Enable Dark mode");
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2e2d2d";
      setlabelText("Disable Dark mode");
      showAlert("Dark Mode enabled!!!!", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setlabelText("Enable Dark mode");
      showAlert("Dark Mode disabled!!!!", "success");
    }
  };
  return (
    <>
          <Router>
        <Navbar
          title="Textutils"
          mode={mode}
          labelText={labelText}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
          <Route path="/about" element={<About mode={mode}/>} />

          <Route path="/" element={<TextForm heading = 'Enter text to Analyze below' mode={mode} setAlert={setAlert}/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
