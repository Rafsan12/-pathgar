import React from 'react'; 
import './DashBoard.css';
import { HiVideoCamera } from 'react-icons/hi';
import { MdMessage } from 'react-icons/md';
import { Link } from 'react-router-dom';


const DashBoard = () => {
    return (
        // <div>
        //     <div className="flex justify-center items-center h-screen">
        //         <div className="card p-20  bg-base-100 shadow-xl">
        //             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20'>
        //                 <Link to='/messagebox' className="card cards p-10 lg:w-80 shadow-2xl">
        <div className='boards'>
            <div className="flex justify-center items-center h-screen">
                <div className="card p-20  bg-base-100 shadow-xl">
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20'>
                        <Link to='/messagebox' className="card cardss p-10 w-80 shadow-xl">
                            <div className=''>
                                <div>
                                    <span className="text-7xl"><MdMessage className='icons pl-10'></MdMessage></span>
                                </div>
                                <div>
                                    <h4 className='lg:mt-10 mt-6 lg:text-xl font-bold'>Message Box</h4>
                                </div>
                            </div> 
                        </Link>
                        <Link to='/meeting' className="card cards p-10 lg:w-80 shadow-2xl"></Link>
                        <Link to='/meeting' className="card cardss p-10 w-80 shadow-xl"> </Link>
                        {/* <Link to='/join' className="card cards p-10 lg:w-80 shadow-2xl">
                            <div className=''>
                                <div>
                                    <span className="text-7xl"><HiVideoCamera className='icons pl-10'></HiVideoCamera></span>
                                </div>
                                <div>
                                    <h4 className='lg:mt-10 mt-6 lg:text-xl font-bold'>New Meeting</h4>
                                    <span className='font-bold text-gray-500'>set up new meeting</span>
                                </div>
                            </div> 
                        </Link> */}
                    </div>
                </div>
            </div>

        </div>
       
    );
};

export default DashBoard;