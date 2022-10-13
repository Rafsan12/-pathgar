import React from 'react';
import BookList from '../../component/BookList';
import Banner from '../../components/Banner/Banner';
import Course from './Course/Course';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h1 className='text-center'>hi</h1>
            <Course></Course>
            <BookList></BookList>
        </div>
    );
};

export default Home;