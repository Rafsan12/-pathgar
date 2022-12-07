import React, { useEffect, useState } from 'react'; 
import ShowBooks from './ShowBooks';
import bookCover from '../book images/book-image-cover.jpg';

const AllBook = () => {
    const [books, setBook] = useState([]);
    useEffect(() => {
        fetch('https://pathagar.onrender.com/books')
            .then(res => res.json())
            .then(data => setBook(data))
    }, [])
    return (
        <div className='bg-green-100 py-3 mb-5'>
            <div>
                <img src={bookCover} alt=''></img>
            </div>
            <h1 className='font-bold text-center text-5xl p-2 my-5'>All Book</h1>
            <div className='grid md:grid-cols-4 grid-cols-1 gap-3 mx-10 my-5'>
                {
                    books.map(book =>
                        <div key={book._id} className="card w-full shadow-xl bg-base-100 rounded">
                            <ShowBooks
                                book={book} 
                            ></ShowBooks>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default AllBook;