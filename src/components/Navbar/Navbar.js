import React, { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from './../../App';
import auth from './../../firebase.init';
import { signOut } from 'firebase/auth';
import useAdmin from './../../hook/useAdmin';
import { MdMessage } from 'react-icons/md';
import { AiFillCaretDown } from 'react-icons/ai';
import GroupLearn from '../../Pages/Group-Learn/GroupLearn';
import CustomLink from '../../Pages/Share/CustomLink';
import './Navbar.css';



const Navbar = () => {


  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);


  const logout = () => {
    admin && navigate('/');
    signOut(auth);
    localStorage.removeItem('accessToken');
  };

  const navigate = useNavigate();
  const courseNavigate = useNavigate();

  const [cartData, setCartData] = useContext(UserContext);

  const menuItems = <>
    <li><CustomLink to="/">Home</CustomLink></li>
    <li> <CustomLink to='/all-books'>Books</CustomLink> </li>

    {/* {
      user && <li><Link to="/dashboard">Dashboard</Link></li>
    } */}
    {
      <li>{user ? <></> : <CustomLink to="/login">Login</CustomLink>}</li>}
  </>

  const handleCartBook = () => {
    navigate('/cart-book');
  };


  return (
    <div>
      <div className="navbar bg-gray-500 sm:px-16 lg:px-24 py-4 text-white z-40 ">
      <div className="navbar-start ">
        <div className="dropdown ">
          <label tabIndex={0} className="btn btn-ghost lg:hidden ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact bg-gradient-to-r from-violet-300 to-fuchsia-300 dropdown-content mt-3 p-2 font-bold  text-2xl  rounded-box">
            {menuItems}
          </ul>
        </div>
        <p className='text-yellow-300 italic lg:text-5xl text-2xl ml-2'>PATHAGAR</p>
      </div>
      <div className="navbar-center hidden  lg:flex text-black">
        <ul className="menu menu-horizontal font-bold p-0 text-xl">
          {menuItems}
        </ul>
      </div>
     
      {
        user ?
          <div className="navbar-end flex-none">
            <div className="dropdown dropdown-end">
              <label tabIndex={2} className="btn btn-ghost btn-circle sm:mr-2 lg:mr-4">
                <div className="indicator">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  <span className="badge badge-sm indicator-item">{cartData}</span>
                </div>
              </label>
              <div tabIndex={2} className="mt-3 card card-compact dropdown-content w-52 bg-gradient-to-r from-violet-300 to-fuchsia-300 shadow">
                <div className="card-body">
                  <span className="font-bold text-2xl text-black">{cartData} Books </span>
                  <div className="card-actions">
                    <button onClick={handleCartBook} className="btn btn-primary btn-block">View Orders</button>
                  </div>
                </div>
              </div>
            </div>
             
            <div>
              <label tabIndex={2} className="btn btn-ghost btn-circle sm:mr-2 lg:mr-4">
                <div className="indicator">
                  <Link to="/grouplearn"><span className='text-2xl'><MdMessage><GroupLearn></GroupLearn></MdMessage></span></Link>
                </div>
              </label>
            </div>

            <div className="dropdown dropdown-bottom dropdown-end sm:mr-2">
              <label tabIndex={2} className="items cursor-pointer ">
                <div>
                  <img className="logo" src={user?.photoURL} />
                  <div className='flex items-center'>
                    <span>Me</span>
                    <span><AiFillCaretDown></AiFillCaretDown></span>
                  </div>
                </div>
              </label>  
              <ul tabIndex={2} className="menu menu-compact text-black font-bold dropdown-content mt-3 p-2 shadow bg-gradient-to-r from-violet-300 to-fuchsia-300 rounded-box w-28">
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link onClick={logout}>Logout</Link></li>
              </ul>
            </div>
            <label htmlFor="my-drawer-2" className="btn btn-ghost btn-circle drawer-button lg:hidden"> <span><AiFillCaretDown></AiFillCaretDown></span></label>
          </div>
          :
          <></>
      }
    </div>
    </div>
  );
};

export default Navbar;