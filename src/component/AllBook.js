import React, { useState } from 'react';
import Books from './Books';
import ShowBooks from './ShowBooks';

const AllBook = () => {
    const [books, setBook] = useState(Books);
    return (
        <div className='bg-green-100 py-3 mb-5'>
            <h1 className='font-bold text-center text-5xl p-2 my-5'>All Book</h1>
            <div className='grid md:grid-cols-4 grid-cols-1 gap-3 mx-10 my-5'>
                {
                    books.map(book =>
                        <div key={book.bid} className="card w-full shadow-xl bg-base-100 rounded">
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