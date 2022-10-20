import React from 'react';
import { motion } from "framer-motion";
import bookNotFond from "../img/book-not-found.jpg"
const NotFound = () => {
    return (
        <div className=" p-3">
            <div className="hero min-h-screen " style={{ backgroundImage: `url(${bookNotFond})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Not Found</h1>
                   
                </div>
            </div>
             </div>
        </div>
    );
};

export default NotFound;