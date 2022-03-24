import React from 'react'
import CartWidget from '../CartWidget'
import './styles.css'
function NavBar() {
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/#">eCommerceSG</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse centerNavbar" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="/#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">Celulares</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">Computadoras</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">Electrodomesticos</a>
        </li>
      </ul>
      <div className="d-flex">
        <CartWidget cantidadItems="0"/>
      </div>
    </div>
  </div>
</nav>
  )
}

export default NavBar