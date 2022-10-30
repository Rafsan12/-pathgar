import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import poster from "../../banner/Untitled design.gif"

const Banner = () => {
  return (
    <div className="hero min-h-screen w-full">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img className='sm:w-3/4 md:w-2/3 lg:w-2/4' src={poster} alt="" />
        <div className='w-full'>
          <h1 className="lg:text-4xl text-2xl ">Welcome to <span className=' lg:text-6xl text-4xl font-bold italic underline decoration-zinc-200'>PATHAGAR</span></h1>
          <h1 className='lg:text-2xl text-lg font-bold'>
            <span style={{ color: 'violet', fontWeight: 'bold' }}>

              <Typewriter
                words={['Upto 10% off in our courses.', ' Upto 20% off our book product.']}
                loop={true}
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}

              />
            </span>
          </h1>
          {/* <p className="text-lg pt-2">Upto 10% off in our courses.</p>
          <p className="text-lg pt-2">Upto 20% off our book product.</p> */}
          <button className="btn btn-primary hover:italic">EXPLORE NOW</button>

        </div>
      </div>
    </div>
  );
};

export default Banner;