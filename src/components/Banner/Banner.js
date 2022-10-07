import React from 'react';
import poster from "../../banner/Untitled design.gif"

const Banner = () => {
  return (
    <div>
     <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img className='w-2/4' src={poster} alt="" />
    <div>
      <h1 className="text-3xl ">Welcome to <span className=' text-5xl font-bold '>PATHAGAR</span></h1>
      <p className="py-6">Upto 10% off in our courses.</p>
      <p className="py-6">Upto 20% off our book product.</p>
      <button className="btn btn-primary">EXPLORE NOW</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default Banner;