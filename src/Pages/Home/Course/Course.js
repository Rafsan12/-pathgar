import React from 'react';
import { Link } from 'react-router-dom';
import course_poster from "../../../Course_image/COURSE Poster.gif"

const Course = () => {
    return (
        <div>
            <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img src={course_poster} className="max-w-sm rounded-lg shadow-2xl" alt='' />
    <div>
      <h1 className="text-5xl ">Join Our Course and Improve your skills with us</h1>
      <Link to="/courses"><button className="btn btn-primary mt-8 mx-48 ">See our courses </button></Link>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Course;