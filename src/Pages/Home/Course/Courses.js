import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import courses_poster from "../../../Course_image/Online Course Banner.png"
import GroupLearn from '../../Group-Learn/GroupLearn';
import { fetchCourse } from '../../Redux/ApiSlice';
import CourseData from './CourseData';
import ShowCourse from './ShowCourse';

const Courses = () => {
    const [courses,setCourses] = useState([])

    useEffect(() =>{
        fetch("course.json")
        .then(res => res.json())
        .then(data => setCourses(data));
    },[]);


    // const {isLoading,courses,error} = useSelector((state) => console.log(state))
    // const dispatch = useDispatch();

    // // const fetchCourse = async () =>{
    // //     const response = await axios.get('course.json')
    // //     .catch((error) =>{
    // //         console.log(error);
    // //     });
    // //     console.log(response);
    // // };

    // useEffect(() => {
    //     dispatch(fetchCourse());
    //     console.log(dispatch)
    // },[]);

    return (
        <div>
            <div>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-screen  ">
                        <img src={courses_poster} className="w-full mx-8 mt-2 container" alt='' />
                    </div>
                </div>
            </div>
          
            <div>
                <h1 className='text-5xl mt-20 mb-10 font-bold text-cyan-400 text-center'> Our Online Courses</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-10 my-5'>
                {
                    courses.map(course =>
                        <div key={course._id} className="card w-full shadow-xl bg-base-100 rounded">
                            <ShowCourse
                                course={course}
                            ></ShowCourse>
                        </div>
                    )
                }
            </div>
           <div className="pb-8">
           <GroupLearn></GroupLearn>
           </div>
        </div>
    );
};

export default Courses;