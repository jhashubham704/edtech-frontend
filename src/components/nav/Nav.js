import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './Nav.css'

export default function Nav() {
  return (
    <div>
      <div>
        <div className="head-main">
          <div className="head-lf">
            <h2>Edtech</h2>
          </div>
          <div className="head-mid">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/courses">Courses</Link>
              </li>
              <li>
                <Link to="/notes">Notes</Link>
              </li>
              <li>
                <Link to="/blogs">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li></li>
            </ul>
          </div>
          <div className="head-rt">
            <button><Link to="/register">Register</Link></button>
            <button><Link to="/login">Login</Link></button>
          </div>
        </div>

      </div>
    </div>
  );
}
