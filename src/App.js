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
import Meeting from './Pages/Group-Learn/DashBoard/Meeting/Meeting';
import Login from './Pages/auth/Login';
import Register from './Pages/auth/Register';
import CartBook from './component/CartBook';
import Payment from './Payment/Payment';
import PaymentCard from './Payment/PaymentCard';
import AllReiw from './Pages/reviews/AllReiw';

import NotFound from './Pages/NotFound';
import About from './Pages/About';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/courses" element={<Courses></Courses>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path='/book' element={<BookList></BookList>}></Route>
        <Route path='/allbooks' element={<AllBook></AllBook>}></Route>
        <Route path='/grouplearn' element={<GroupLearn></GroupLearn>}></Route>
        <Route path='/dashboard' element={<DashBoard></DashBoard>}></Route>
        <Route path='/messagebox' element={<MessageBox></MessageBox>}></Route>
        <Route path='/meeting' element={<Meeting></Meeting>}></Route>
        <Route path='/all-books' element={<AllBook></AllBook>}></Route>
        <Route path="/cart-book" element={<CartBook></CartBook>}></Route>
       <Route path='/payment' element={<Payment></Payment>}></Route>
       <Route path='paymentcard' element={<PaymentCard></PaymentCard>}></Route>
        <Route path="/drawing" element={<Drawing></Drawing>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/reviews" element={<AllReiw />}></Route>
         <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
      
       
     
    </div>
  )
}
export default App;
