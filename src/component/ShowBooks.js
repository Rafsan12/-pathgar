import React from 'react';
import { useDispatch } from 'react-redux';
import { AddItem } from '../redux/Reducer/BookSlice';

const ShowBooks = ({ book }) => {
    //console.log(book);
    const dispatch = useDispatch();


    const AddToCart = (book) => {
        dispatch(AddItem(book));

    }



    return (
        <div>
            <figure className='pt-5'>
                <img src={book.image} className='h-44 mx-auto p-3 rounded' alt='' />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{book.name}</h2>
                <p>Price: {book.price}$</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={() => AddToCart(book)}>Order Now</button>
                </div>
            </div>
        </div>

    );
};

export default ShowBooks;