import React, { useState } from 'react';
import courses_poster from "../../../Course_image/Online Course Banner.png"
import CourseData from './CourseData';
import ShowCourse from './ShowCourse';

const Courses = () => {
    const [courses] = useState(CourseData)
    return (
        <div>
           <div>
           <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-screen  ">
    <img src={courses_poster} className="w-full mx-8 mt-2 container" alt='' />
  </div> 
  </div>
           </div>
           <div>
            <h1 className='text-5xl mt-4 text-cyan-400 text-center'> Our Online Courses</h1>
           </div>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-10 my-5'>
                    {
                        courses.map(course =>
                            <div key={course._id} className="card w-full shadow-xl bg-base-100 rounded">
                                <ShowCourse
                                    course={course}
                                ></ShowCourse>
                            </div>
                        )
                    }
                </div>
           
        </div>
    );
};

export default Courses;