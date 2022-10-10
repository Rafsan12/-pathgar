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
import MessageBox from './Pages/Group-Learn/DashBoard/MessageBox/MessageBox';
import Meeting from './Pages/Group-Learn/DashBoard/Meeting/Meeting';

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
        <Route path='/messagebox' element={<MessageBox></MessageBox>}></Route>
        <Route path='/meeting' element={<Meeting></Meeting>}></Route>

        <Route path="/drawing" element={<Drawing></Drawing>}></Route>
      </Routes>
      <Footer />
    </div>
  )
}
export default App;
