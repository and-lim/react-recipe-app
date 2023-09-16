import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg d-flex justify-content-center">
      <div className="container mx-auto">
        <a className="navbar-brand text-white ps-lg-5" href="/">Recipe APP</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-lg-auto gap-5 fw-bold justify-content-start">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/recipe">Find Recipe</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
    </>
  )
}

export default Navbar