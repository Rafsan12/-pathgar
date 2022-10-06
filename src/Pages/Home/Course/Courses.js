import React from 'react';
import courses_poster from "../../../Course_image/Online Course Banner.png"

const Courses = () => {
    return (
        <div>
           <div>
           <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-screen">
    <img src={courses_poster} className="w-full" alt='' />
  </div> 
  </div>
           </div>
           <h1 className='text-5xl mt-4 text-cyan-400 text-center'> Our Online Courses</h1>
        </div>
    );
};

export default Courses;