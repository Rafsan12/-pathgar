import React from 'react';
import { useDispatch } from 'react-redux';
import { AddItem } from '../../Redux/CourseSlice';
const ShowCourse = ({course}) => {
const dispatch = useDispatch();


const AddToCart = (course) => {
    dispatch(AddItem(course));

}


    return (
        <div>
        <figure className='pt-5'>
            <img src={course.image} className='h-44 mx-auto p-3 rounded' alt=''/>
            </figure>
        <div className="card-body">
            <h2 className="card-title">{course.name}</h2>
            <p>Price: ${course.price}</p>
            <div className="card-actions justify-end">
                <button className="text-white text-xl btn btn-primary  hover:bg-[#293661] duration-500 rounded-lg px-8 py-3.5 flex items-center" 
                onClick={() => AddToCart(course)}
                >Add To Cart</button>
            </div>
        </div>
    </div>
    );
};

export default ShowCourse;