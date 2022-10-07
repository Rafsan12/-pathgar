import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Footer from './Footer';
import Courses from './Pages/Home/Course/Courses';
import Drawing from './Pages/Draw/Drawing';

function App() {
  return (
    <div>
       <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/courses" element={<Courses></Courses>}></Route>
      <Route path="/drawing" element={<Drawing></Drawing>}></Route>
    </Routes>
    <Footer />
</div>
  )
}
export default App;
