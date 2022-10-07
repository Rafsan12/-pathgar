import { Route, Routes } from 'react-router-dom';
import './App.css';
import Courses from './Pages/Home/Course/Courses';

import Home from './Pages/Home/Home';

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/courses" element={<Courses></Courses>}></Route>
    </Routes>
</div>
  )
}
export default App;
