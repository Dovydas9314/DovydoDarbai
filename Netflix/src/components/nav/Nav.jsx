
import React from 'react'
import './style.css'

const Nav = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <div className="navbar-brand">
                    <img className='logo' src="/logo.svg" alt="log" />
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <div className="nav-link btn btn-primary text-white" aria-current="page">Sign in</div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Nav