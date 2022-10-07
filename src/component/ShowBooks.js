import React from 'react';

const ShowBooks = ({ book }) => {
    //console.log(book);
    return (
        <div>
            <figure className='pt-5'>
                <img src={book.image} className='h-44 mx-auto p-3 rounded' alt='' />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{book.name}</h2>
                <p>Price: {book.price}$</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>

    );
};

export default ShowBooks;