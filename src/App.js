import { Route, Routes } from 'react-router-dom';
import Home from "../src/Pages/Home/Home"
import Courses from './Pages/Home/Course/Courses';

function App() {
  return (
    <div >
   <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/courses' element={<Courses></Courses>}></Route>
   </Routes>

    </div>
  );
}

export default App;
