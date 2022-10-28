import React from 'react';
import { Link } from 'react-router-dom';
import course_poster from "../../../Course_image/COURSE Poster.gif"

const Course = () => {
  return (
    <div>
      <div className="hero min-h-screen w-full my-12">
        <div className="hero-content flex-col lg:flex-row">
          <img src={course_poster} className="lg:max-w-sm w-full rounded-lg shadow-2xl" alt='' />
          <div className=' w-1/2 mx-auto'>
            <h1 className="text-2xl lg:text-5xl">Join Our Course and Improve your skills with us</h1>
            <Link to="/courses"><button className="btn btn-primary m-4">See our courses </button></Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Course;