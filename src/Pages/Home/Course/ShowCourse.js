import React from 'react';

const ShowCourse = ({course}) => {
    return (
        <div>
        <figure className='pt-5'>
            <img src={course.image} className='h-44 mx-auto p-3 rounded' alt=''/>
            </figure>
        <div className="card-body">
            <h2 className="card-title">{course.name}</h2>
            <p>Price: ${course.price}</p>
            <div className="card-actions justify-end">
                <button className="btn btn-primary">Add to Cart</button>
            </div>
        </div>
    </div>
    );
};

export default ShowCourse;