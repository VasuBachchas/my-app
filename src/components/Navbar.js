import React from 'react'
import PropTypes from 'prop-types'
import {

  Link
} from "react-router-dom";
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li>


          </ul>
          {/*<form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-primary" type="submit">Search</button>
  </form>*/}

          <div className="btn-toolbar mx-2" role="toolbar" aria-label="Toolbar with button groups">
            <div className="btn-group mr-2" role="group" aria-label="First group">
              <button type="button" id="primary" onClick={props.colorD} className="btn btn-primary">1</button>
              <button type="button" id="success" onClick="{props.colorD(this)}" className="btn btn-success">2</button>
              <button type="button" id="danger" onClick={props.colorD} className="btn btn-danger">3</button>
              <button type="button" id="secondary" onClick={props.colorD} className="btn btn-secondary">4</button>
            </div>
            
          </div>
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" for="flexSwitchCheckDefault">Enable Darkmode</label>
          </div>
        </div>
      </div>
    </nav>
  );
}
Navbar.prototype = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string
}
Navbar.defaultProps = {
  title: 'Set title',
  aboutText: 'Set about'

}