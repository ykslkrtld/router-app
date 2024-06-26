import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({isLogged, setIsLogged}) => {
  return (
    <nav className="navbar navbar-expand bg-body-tertiary">
  <div className="container bg-warning rounded-2 my-2 py-2">
    <a className="navbar-brand" href="/">Yksl</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link to="" className="nav-link" onClick={()=>setIsLogged(!isLogged)}>Logout</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default NavBar