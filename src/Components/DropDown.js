import React from 'react'
import {Link} from 'react-router-dom';
export default function DropDown() {
  return (
    <div>
      <div class="dropdown-container">
        <div class="dropdown" id="myDropdown">
          <button class="dropdown-btn" onclick="toggleDropdown()">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-list" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
          </button>
          <div class="dropdown-content">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/project">Projects</Link>
            <Link to="/contact">Contact</Link>
            <Link to="https://drive.google.com/file/d/1B0uzj08NxAxJrKDLlFb9ZpQRx66MnS4D/view?usp=drive_link" target="_blank" rel="noopener noreferrer" >Resume</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
