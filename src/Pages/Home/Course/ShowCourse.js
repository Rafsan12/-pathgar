import React from 'react';
import {  useNavigate } from 'react-router-dom';
const ShowCourse = (props) => {
    const {_id,image,name,price} = props.course;
    const navigate = useNavigate
const navigateCourseDetails = id =>{
    navigate(`/course/${id}`)
}
    return (
        <div>
        <figure className='pt-5'>
            <img src={image} className='h-44 mx-auto p-3 rounded' alt=''/>
            </figure>
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>Price: ${price}</p>
            <div className="card-actions justify-end">
                <button onClick={() => navigateCourseDetails(_id)} className="text-white text-xl btn btn-primary  hover:bg-[#293661] duration-500 rounded-lg px-8 py-3.5 flex items-center'">Add To Cart</button>
            </div>
        </div>
    </div>
    );
};

export default ShowCourse;