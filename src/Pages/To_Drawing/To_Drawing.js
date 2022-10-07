import React from 'react';
import { Link } from 'react-router-dom';
import art from "../../Course_image/Making art.gif"

const To_Drawing = () => {
    return (
        
       <div>
             <h1 className='text-center text-4xl font-bold mt-8'> Drawing </h1>
         <div className="hero min-h-screen">
            
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={art} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Start Your Drawing!</h1>
                   
                    <Link to="/drawing" className="btn btn-primary mt-8 mx-48">Do Drawing</Link>
                </div>
            </div>
        </div>
       </div>
    );
};

export default To_Drawing;