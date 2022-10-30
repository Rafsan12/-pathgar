import React from 'react';
import back from "../../Course_image/hand-drawn-abstract-landscape-cover-collection_23-2149016271.webp"

const About = () => {
    return (
        <div className='mt-2 mb-2'>
        <div className="card  bg-base-100 shadow-xl image-full">
  <figure><img src={back}alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text-center text-5xl">About Pathagar</h2>
    <p>Our project will be a course and book sale website. When users visit our website, they can see our courses and books. They can purchase books and courses, but without login/sign-in, they can't buy a book or course.</p>
  </div>
</div>
        </div>
    );
};

export default About;