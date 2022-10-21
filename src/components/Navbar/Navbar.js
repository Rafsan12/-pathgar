import { signOut } from 'firebase/auth';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase-init';
import CustomLink from '../../Pages/Share/CustomLink';


const Navbar = () => {

  const [user] = useAuthState(auth); 

  const logout = () => {
    signOut(auth);
  };

  const getData = useSelector((state) => state.BookReducer.carts);
  const navigate = useNavigate();
  const getCourseData = useSelector((state) => state.CourseReducer.carts);
  const courseNavigate = useNavigate();


  const menuItems = <>
    <li><CustomLink to="/">Home</CustomLink></li>
    <li><CustomLink to="/about">About</CustomLink></li>
    <li><CustomLink to='/all-books'>Books</CustomLink></li>

    {
      user ?

        <li><CustomLink onClick={logout} to="/login">Log Out</CustomLink></li>

        :
        <li><CustomLink to="/login">Log In</CustomLink></li>

    }

  </>

  const handleCartBook = () => {
    navigate('/cart-book');
  };

  const handleCartCourse = () => {
    courseNavigate("/cart")

  }

  return ( 
      <div className="navbar bg-gradient-to-r from-violet-300 to-fuchsia-300   sm:px-16 lg:px-24 py-4 text-white z-10 ">
        <div className="navbar-start ">
          <div className="dropdown ">
            <label tabIndex={0} className="btn btn-ghost lg:hidden ">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow-xl text-2xl  rounded-box w-52   text-black">
              {menuItems}
            </ul>
          </div>
          <p className='text-4xl text'>PATHAGAR</p>
        </div>
        <div className="navbar-center hidden lg:flex  text-white">
          <ul className="menu menu-horizontal p-0 text-2xl">
            {menuItems}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="indicator cursor-pointer" onClick={handleCartBook || handleCartCourse}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            <span className="badge badge-sm indicator-item badge-success">{getData.length}</span>
          </div>
          {/* <div className="avatar online">
            <div className="w-10 ml-6 rounded-full">
              <img src={user?.photoURL} />
            </div>
          </div> */}


        </div>
        {/* <div className="navbar-end p-4">
          <div className="indicator cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 invisible" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            <span className="badge badge-sm indicator-item badge-success invisible">{getCourseData.length}</span>
          </div>
        </div> */}
      </div> 
  );
};

export default Navbar;