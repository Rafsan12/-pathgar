import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../../components/loading/Loading';
import ReviewModal from './ReviewModal';

const AllReiw = () => {
    const [addreview, setAddReview] = useState('');
    // Get Reviews
    const { data: reviews, isLoading, error, refetch } = useQuery('reviews', () => fetch('http://localhost:5000/review', {
        method: "GET",
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    console.log(reviews)
    if (isLoading) {
        return <Loading></Loading>
    }
    if (error) {
        console.log(error);
    }
    
    // Post review
    const reviewHandle = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const rating = e.target.rating.value;
        
        const comment = e.target.comment.value
        console.log(name, email, rating, comment);
        // const reviewData = { name, email, rating, comment }
        // fetch('http://localhost:5000/review', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(reviewData)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         if (data.acknowledged === true) {
        //             toast.success('Review is Added')
        //         } else {
        //             toast.error('something wrong')
        //         }
        //         setAddReview('')
        //     })

    }
    return (
        <div className='mt-3 p-3'>
            {/* Add Review */}
            <div className='mt-3 mb-3'>
                <label htmlFor="my-modal-3" className="btn modal-button btn-primary">Add Review</label>


                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <form onSubmit={reviewHandle} className='ml-5'>
                            <label class="label">
                                <span class="label-text"> name</span>

                            </label>
                            <input type="text" name='name' class="input input-bordered w-full max-w-xs" required />



                            <label class="label">
                                <span class="label-text">Email</span>

                            </label>
                            <input type="text" name='email' class="input input-bordered w-full max-w-xs" required />

                            <label class="label">
                                <span class="label-text">Ratings</span>

                            </label>
                            <input type="number" placeholder="Type here" name='rating' class="input input-bordered w-full max-w-xs" min="1" max="5" required />
                            <label class="label">
                                <span class="label-text">Comments</span>

                            </label>
                            {/* <input type="text" placeholder="Comment here" name='comment' class=" textarea textarea-primary" required /> */}
                            <textarea type="text" name='comment' className="textarea textarea-primary" placeholder="Comment here" required></textarea>

                            <br />
                            <input className="btn btn-wide  mt-3 btn-primary " type="submit" value='Post' />
                        </form>
                    </div>
                </div>
            </div>
            {/* Get Reviews */}
            <div>
                <h1 className='text-3xl font-bold m-5'>Reviews</h1>
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-2 justify-items-center'>
                    {
                        reviews.map(review => {
                            <div key={review._id} class="card w-64 bg-base-100 shadow-xl">
                            <div class="card-body">
                                <h2 class="card-title">Name:{review.name}</h2>
                                <p>Email: {review.email}</p>
                                <p>Comments: {review.comment}</p>
                                <p>rating: {review.rating}</p>
                            </div>
                        </div>
                        }
                        )
                    }

                </div>
            </div>

           

           
           </div>
    );
};

export default AllReiw;