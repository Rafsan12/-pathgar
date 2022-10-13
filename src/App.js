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
import CartBook from './component/CartBook';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/courses" element={<Courses></Courses>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path='/book' element={<BookList></BookList>}></Route>
        <Route path='/all-books' element={<AllBook></AllBook>}></Route>
        <Route path="/cart-book" element={<CartBook></CartBook>}></Route>
        <Route path="/drawing" element={<Drawing></Drawing>}></Route>
      </Routes>
      <Footer />
    </div>
  )
}
export default App;
