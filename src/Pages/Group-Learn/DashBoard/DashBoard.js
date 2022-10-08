import React from 'react';
import './DashBoard.css';
import { HiVideoCamera } from 'react-icons/hi';
import { MdMessage } from 'react-icons/md';


const DashBoard = () => {
    return (
        <div className='board'>
            <div className="flex justify-center items-center h-screen">
                <div className="card p-20  bg-base-100 shadow-xl">
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20'>
                        <a href='/#' className="card cards p-10 w-80 shadow-xl">
                            <div className=''>
                                <div>
                                    <span className="text-7xl"><HiVideoCamera className='icon pl-10'></HiVideoCamera></span>
                                </div>
                                <div>
                                    <h4 className='mt-10 text-xl font-bold'>Join Meeting</h4>
                                </div>
                            </div> 
                        </a>
                        <a href='/#' className="card cards p-10 w-80 shadow-xl">
                            <div className=''>
                                <div>
                                    <span className="text-7xl"><MdMessage className='icon pl-10'></MdMessage></span>
                                </div>
                                <div>
                                    <h4 className='mt-10 text-xl font-bold'>Message Box</h4>
                                </div>
                            </div> 
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DashBoard;