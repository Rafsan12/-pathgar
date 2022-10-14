import React from 'react';
import { Link } from 'react-router-dom';
import './GroupLearn.css'

const GroupLearn = () => {
    return (
        <div className="hero" style={{ backgroundImage: `url("https://globaluniversity.edu/wp-content/uploads/2020/03/multiethnic-group-young-people-studying-together.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="hello mb-5 font-bold ">Hello Dear</h1>
                    <p className="learn mb-5 font-bold ">If you want to learn in a team with your friends, Then clink the "Let's Learn" button.</p>
                    <Link to="/dashboard" className="btn btn-primary font-bold">Let's Learn</Link>
                </div>
            </div>
        </div>
    );
};

export default GroupLearn;