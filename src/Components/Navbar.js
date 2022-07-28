import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              NewsMonkey
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link className="nav-link" aria-current="page" to="/">
                        Home
                      </Link>
                    </li>

                    <li className="nav-item"><Link className="nav-link" aria-current="page" to="/business">Business</Link></li>
                    <li className="nav-item"><Link className="nav-link" aria-current="page" to="/entertainment">Entertainment</Link></li>
                    <li className="nav-item"><Link className="nav-link" aria-current="page" to="/health">Health</Link></li>
                    <li className="nav-item"><Link className="nav-link" aria-current="page" to="/science">Science</Link></li>
                    <li className="nav-item"><Link className="nav-link" aria-current="page" to="/sports">Sports</Link></li>
                    <li className="nav-item"><Link className="nav-link" aria-current="page" to="/technology">Technology</Link></li>
                
              </ul>
            </div>
          </div>
        </nav>
        <div className=" mb-2 my-2">
        <h2 className="text-center text-white">Top-HeadLines News Daily Free</h2>
        </div>
      </div>
      
    );
  }
}

export default Navbar;
