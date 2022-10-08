import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Footer from './Footer';
import Courses from './Pages/Home/Course/Courses';
import BookList from './component/BookList';
import AllBook from './component/AllBook';
import Drawing from './Pages/Draw/Drawing'; 
import GroupLearn from './Pages/Group-Learn/GroupLearn';
import DashBoard from './Pages/Group-Learn/DashBoard/DashBoard';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/courses" element={<Courses></Courses>}></Route>
        <Route path='/book' element={<BookList></BookList>}></Route>
        <Route path='/allbooks' element={<AllBook></AllBook>}></Route>
        <Route path='/grouplearn' element={<GroupLearn></GroupLearn>}></Route>
        <Route path='/dashboard' element={<DashBoard></DashBoard>}></Route>
        <Route path="/drawing" element={<Drawing></Drawing>}></Route>
      </Routes>
      <Footer />
    </div>
  )
}
export default App;
