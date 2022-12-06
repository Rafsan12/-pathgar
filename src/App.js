import { Route, Routes } from 'react-router-dom';
import './App.css';
import Courses from './Pages/Home/Course/Courses';
import Cart from "./Pages/Home/Course/Cart"
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Footer from './Footer';
import BookList from './component/BookList';
import AllBook from './component/AllBook';
import Drawing from './Pages/Draw/Drawing';
import GroupLearn from './Pages/Group-Learn/GroupLearn';  
import CartBook from './component/CartBook';
import React, { useState } from 'react';
import Login from './component/Auth/Login';
import Signup from './component/Auth/SignUp';
import RequireAuth from './component/Auth/RequireAuth';
import Dashboard from './component/Dashboard/Dashboard';
import Userprofile from './component/Dashboard/Userprofile';
import AllUsers from './component/Dashboard/AllUsers';
import RequireAdmin from './component/Auth/RequireAdmin';
import MyOrders from './component/Dashboard/MyOrders';
import Payment from './Payment/Payment';
import PaymentCard from './Payment/PaymentCard';  
import MessageBox from './Pages/Group-Learn/MessageBox/MessageBox';
import Chat from './Pages/Group-Learn/MessageBox/Chat';
// import About from './Pages/About/About';
import AddBook from './component/Dashboard/AddBook';

export const UserContext = React.createContext([]);

function App() {

  const [cartData, setCartData] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  return (
    <UserContext.Provider value={[cartData, setCartData, totalPrice, setTotalPrice]}>
      <div>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/courses" element={<Courses></Courses>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path='/book' element={<BookList></BookList>}></Route>
          <Route path='/grouplearn' element={<RequireAuth><GroupLearn></GroupLearn></RequireAuth>}></Route> 
          <Route  path="chat/:roomId" element={<RequireAuth><Chat></Chat></RequireAuth>}></Route> 
          <Route path='/messagebox' element={<RequireAuth><MessageBox></MessageBox></RequireAuth>}></Route> 
          <Route path='/all-books' element={<RequireAuth><AllBook></AllBook></RequireAuth>}></Route>
          <Route path="/cart-book" element={<RequireAuth><CartBook></CartBook></RequireAuth>}></Route>
          <Route path="/drawing" element={<Drawing></Drawing>}></Route>


          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>

          <Route path='dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
            <Route index element={<Userprofile></Userprofile>}></Route>
            <Route path='myOrders' element={<MyOrders></MyOrders>}></Route>
            <Route path='allusers' element={<RequireAdmin><AllUsers></AllUsers></RequireAdmin>}></Route>
            <Route path='addbook' element={<RequireAdmin><AddBook></AddBook></RequireAdmin>}></Route>
          </Route>

          <Route path='/payment' element={<RequireAuth><Payment></Payment></RequireAuth>}></Route>
          <Route path='paymentcard' element={<RequireAuth><PaymentCard></PaymentCard></RequireAuth>}></Route>


        </Routes>
        <Footer></Footer>

      </div>
    </UserContext.Provider>
  )
}
export default App;
