import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
  const [course,setCourse]= useState({});
  // console.log(course);
  const {coursesId} = useParams();
  // console.log(coursesId);

  useEffect(() =>{
    const url =`course.json/${coursesId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setCourse(data));
},[]);
    return (
        <div>
            <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    {/* <img src={} className="max-w-sm rounded-lg shadow-2xl" alt='' /> */}
    <div>
      <h1 className="text-5xl font-bold">{course.name}</h1>
      <p className="py-6"></p>
      {/* <button onClick={handleBuy} className="btn btn-primary">Buy Know</button> */}
    </div>
  </div>
</div>
        </div>
    );
};

export default CourseDetails;