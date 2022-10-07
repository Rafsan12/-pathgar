import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div>
       <div className="navbar text-zinc-800">
  <div className="navbar-start ">
    <div className="dropdown ">
      <label tabIndex={0} className="btn btn-ghost lg:hidden ">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52  bg-gray-900 text-white">
        <li ><Link  to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </div>
    <p className='text-4xl text'>PATHAGAR</p>
  </div>
  <div className="navbar-center hidden lg:flex  bg-gray-900 text-white">
    <ul className="menu menu-horizontal p-0">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/login">Login</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
  </div>
</div>

        </div>
    );
};

export default Navbar;