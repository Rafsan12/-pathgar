import React from 'react';
import BookList from '../../component/BookList';
import Banner from '../../components/Banner/Banner'; 
// import GroupLearn from '../Group-Learn/GroupLearn';
import To_Drawing from '../To_Drawing/To_Drawing';
import Course from './Course/Course';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Course></Course>
            <BookList></BookList>
            <To_Drawing></To_Drawing>
        </div>
    );
};

export default Home;