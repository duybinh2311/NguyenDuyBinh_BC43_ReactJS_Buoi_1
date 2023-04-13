import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h4 className="fw-bold text-white">Start Bootstrap</h4>
        </div>
        <nav>
          <a href="#" className="text-decoration-none text-white ms-5">
            Home
          </a>
          <a href="#" className="text-decoration-none text-white ms-5">
            About
          </a>
          <a href="#" className="text-decoration-none text-white ms-5">
            Services
          </a>
          <a href="#" className="text-decoration-none text-white ms-5">
            Contact
          </a>
        </nav>
      </div>
    )
  }
}
