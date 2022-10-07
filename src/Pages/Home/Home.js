import React from 'react';
import BookList from '../../component/BookList';
import Course from './Course/Course';

const Home = () => {
    return (
        <div>
            <Course></Course>
            <BookList></BookList>
        </div>
    );
};

export default Home;