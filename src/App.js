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
import DashBoard from './Pages/Group-Learn/DashBoard/DashBoard';
import MessageBox from './Pages/Group-Learn/DashBoard/MessageBox/MessageBox';
// import Meeting from './Pages/Group-Learn/DashBoard/Meeting/Meeting';

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
import About from './Pages/About/About';

export const UserContext = React.createContext([]);

function App() {

  const [cartData, setCartData] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  return (
    <UserContext.Provider value={[cartData, setCartData, totalPrice, setTotalPrice]}>
      <div className=''>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/courses" element={<Courses></Courses>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path='/book' element={<BookList></BookList>}></Route>
          <Route path='/grouplearn' element={<GroupLearn></GroupLearn>}></Route>
          <Route path='/dashboards' element={<DashBoard></DashBoard>}></Route>
          <Route path='/messagebox' element={<MessageBox></MessageBox>}></Route>
          {/* <Route path='/meeting' element={<Meeting></Meeting>}></Route> */}
          <Route path='/all-books' element={<AllBook></AllBook>}></Route>
          <Route path="/cart-book" element={<CartBook></CartBook>}></Route>
          <Route path="/drawing" element={<Drawing></Drawing>}></Route>


          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>

          <Route path='dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
            <Route index element={<Userprofile></Userprofile>}></Route>
            <Route path='myOrders' element={<MyOrders></MyOrders>}></Route>
            <Route path='allusers' element={<RequireAdmin><AllUsers></AllUsers></RequireAdmin>}></Route>
          </Route>

          <Route path='/payment' element={<Payment></Payment>}></Route>
          <Route path='paymentcard' element={<PaymentCard></PaymentCard>}></Route>
          <Route path='about' element={<About></About>}></Route>

        </Routes>
        <Footer></Footer>

      </div>
    </UserContext.Provider>
  )
}
export default App;
