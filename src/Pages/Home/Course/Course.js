import React from 'react';
import { Link } from 'react-router-dom';
import course_poster from "../../../Course_image/COURSE Poster.gif"

const Course = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={course_poster} className="max-w-sm rounded-lg shadow-2xl" alt='' />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <Link to="/courses"><button className="btn btn-primary">See our courses </button></Link>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Course;