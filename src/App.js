import { Route, Routes } from 'react-router-dom';
import './App.css';
// import CourseDetails from './Pages/Home/Course/CourseDetails';
import Courses from './Pages/Home/Course/Courses';

import Home from './Pages/Home/Home';

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/courses" element={<Courses></Courses>}></Route>
      {/* <Route path="/course/:coursesId" element={<CourseDetails></CourseDetails>}></Route> */}
      {/* <Route path="/courseDetail" element={<CourseDetails></CourseDetails>}></Route> */}
    </Routes>
    </div>
  );
}

export default App;
