import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../../Course_image/Fearless.gif"
import { UserContext } from './../../App';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { signOut } from 'firebase/auth';
import useAdmin from './../../hook/useAdmin';


const Navbar = () => {

  //const getData = useSelector((state) => state.BookReducer.carts);

  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);


  const logout = () => {
    admin && navigate('/');
    signOut(auth);
    localStorage.removeItem('accessToken');
  };

  const navigate = useNavigate();
  const getCourseData = useSelector((state) => state.CourseReducer.carts);
  const courseNavigate = useNavigate();

  const [cartData, setCartData] = useContext(UserContext);


  const menuItems = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li> <Link to='/all-books'>Books</Link> </li>
    {/* <li><Link to="/login">Login</Link></li> */}
    {
      user && <li><Link to="/dashboard">Dashboard</Link></li>
    }
    <li>{user ? <button className="btn btn-ghost" onClick={logout} >Sign Out</button> : <Link to="/login">Login</Link>}</li>


  </>

  const handleCartBook = () => {
    navigate('/cart-book');
  };

  const handleCartCourse = () => {
    courseNavigate("/cart")

  }

  return (
    <div>
      <div className="navbar bg-primary text-white z-10 ">
        <div className="navbar-start ">
          <div className="dropdown ">
            <label tabIndex={0} className="btn btn-ghost lg:hidden ">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow   rounded-box w-52   text-black">
              {menuItems}
            </ul>
          </div>
          <img className='w-20' src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex  text-white">
          <ul className="menu menu-horizontal p-0">
            {menuItems}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="indicator cursor-pointer" onClick={handleCartBook}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            <span className="badge badge-sm indicator-item badge-success">{cartData}</span>
          </div>
          <div className="navbar-end">
            <label tabIndex="1" htmlFor="my-drawer-2" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>

          </div>
        </div>
        {/* <div className="navbar-end p-4">
          <div className="indicator cursor-pointer" onClick={handleCartCourse}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 invisible" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            <span className="badge badge-sm indicator-item badge-success invisible">{getCourseData.length}</span>
          </div>
        </div> */}
      </div>

    </div>
  );
};

export default Navbar;