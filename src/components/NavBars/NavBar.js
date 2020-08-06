import React from 'react';
import '../../css/NavBar.css';

function NavBar() {
  return (
    <div className='navbar w3-container'>
       <a href="/" className='nav-item'>My Projects</a>
       <div className="w3-right ">
        <a href="https://www.linkedin.com/in/prodanradu/">LinkedIn</a>&nbsp;
        <a href="https://github.com/radu200">GitHub </a> 
       </div>
    </div>
  );
}

export default NavBar;
