import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import NavBar from "./pages/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import { useState, useEffect } from "react";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLogged");
    if (loggedIn === "true") {
      setIsLogged(true);
    }
  }, []);

  const updateIsLogged = (loggedIn) => {
    setIsLogged(loggedIn);
    localStorage.setItem("isLogged", loggedIn);
  };

  return (
    <>
      {!isLogged ? (
        <Login isLogged={isLogged} setIsLogged={updateIsLogged} />
      ) : (
        <BrowserRouter>
          <NavBar isLogged={isLogged} setIsLogged={updateIsLogged} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
