import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [bgColor, setBgColor] = useState("light");
  const [txtColor, setTxtColor] = useState("black");
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  // const toggleMode = () => {
  //   if (mode === "light") {
  //     setMode("dark");
  //     document.body.style.backgroundColor = "#032134";
  //     showAlert("Dark Mode is Enabled", "success");
  //   } else {
  //     setMode("light");
  //     document.body.style.backgroundColor = "white";
  //     showAlert("Light Mode is Enabled", "success");
  //   }
  // };
  const removeBodyClasses = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-warning");
  };
  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add("bg-" + cls);
    // if (mode === "light") {
    //   setMode("dark");
    //   document.body.style.backgroundColor = "#032134";
    //   showAlert("Dark Mode is Enabled", "success");
    // } else {
    //   setMode("light");
    //   document.body.style.backgroundColor = "white";
    //   showAlert("Light Mode is Enabled", "success");
    // }
    const newMode = "bg-" + cls;
    if (newMode === "bg-dark") {
      setMode("light");
      setTxtColor("white");
      setBgColor("#174c6e");
      document.body.classList.remove("bg-dark");
      document.body.style.backgroundColor = "#032134";
      showAlert("Dark Mode is Enabled", "success");
    } else if (newMode === "bg-light") {
      setMode("light");
      setTxtColor("black");
      setBgColor("white");
      document.body.classList.remove("bg-light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is Enabled", "success");
    } else if (newMode === "bg-primary") {
      setMode("light");
      setTxtColor("white");
      setBgColor("#2323cf");
      document.body.classList.remove("bg-primary");
      document.body.style.backgroundColor = "blue";
      showAlert("Primary Mode is Enabled", "success");
    } else if (newMode === "bg-success") {
      setMode("light");
      setTxtColor("white");
      setBgColor("#4ab181");
      document.body.classList.remove("bg-success");
      document.body.style.backgroundColor = "#198754";
      showAlert("Success Mode is Enabled", "success");
    } else if (newMode === "bg-danger") {
      setMode("light");
      setTxtColor("black");
      setBgColor("#a71c29");
      document.body.classList.remove("bg-danger");
      document.body.style.backgroundColor = "#dc3545";
      showAlert("Danger Mode is Enabled", "success");
    } else if (newMode === "bg-warning") {
      setMode("light");
      setTxtColor("black");
      setBgColor("#bf9517");
      document.body.classList.remove("bg-warning");
      document.body.style.backgroundColor = "#ffc107";
      showAlert("Warning Mode is Enabled", "success");
    } else if (newMode === "bg-info") {
      setMode("light");
      setTxtColor("black");
      setBgColor("#38a8bf");
      document.body.classList.remove("bg-info");
      document.body.style.backgroundColor = "#0dcaf0";
      showAlert("Info Mode is Enabled", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
        {/* <Navbar /> */}
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route
              exact
              path="/about"
              element={
                <About mode={mode} txtColor={txtColor} bgColor={bgColor} />
              }
            />
            <Route
              exact
              path="/contact"
              element={<Contact mode={mode} txtColor={txtColor} />}
            />
            <Route
              exact
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter your text to Analyze"
                  mode={mode}
                  bgColor={bgColor}
                  txtColor={txtColor}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
