import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './pages/Login';
import NavBar from './pages/NavBar';
import Home from "./pages/Home"
import About from "./pages/About"
import { useState } from 'react';


function App() {
  const [isLogged, setIsLogged] = useState(false)
 
  return (
    <> 
    
    {!isLogged ? <Login isLogged={isLogged} setIsLogged={setIsLogged} /> : 
    <BrowserRouter>
    <NavBar isLogged={isLogged} setIsLogged={setIsLogged}/>
    <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path='/about' element={<About/>}/>
    </Routes>
 
    </BrowserRouter>
    }
    </>
  );
}

export default App;
