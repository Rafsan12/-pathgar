import React, { useEffect, useState } from 'react';
import Books from './Books';
import ShowBooks from './ShowBooks';

const BookList = () => {

    const [books, setBook] = useState(Books);
    const [categoryBooks, setCategoryBooks] = useState([]);

    const handleProgrammingBook = () => {
        setCategoryBooks(books.filter(book => book.category === 'programming'));
    }

    const handleStoryBook = () => {
        setCategoryBooks(books.filter(book => book.category === 'story'));
    }
    const handleScienceBook = () => {
        setCategoryBooks(books.filter(book => book.category === 'science'));
    }


    return (
        <div>
            <div className='bg-orange-100 py-3 mb-5'>
                <h1 className='font-bold text-center text-5xl p-2 my-5'>BookList</h1>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 mx-10 my-5'>
                    {
                        books.slice(0, 4).map(book =>
                            <div key={book.bid} className="card w-full shadow-xl bg-base-100 rounded">
                                <ShowBooks
                                    book={book}
                                ></ShowBooks>
                            </div>
                        )
                    }
                </div>
            </div>
            <h1 className='font-bold text-center text-4xl p-2 mt-24 mb-8'>Category of Books</h1>
            <div className='grid grid-cols-3 gap-5 py-3 w-3/4 mx-auto mb-5'>
                <div className='rounded bg-lime-600 flex flex-col items-center justify-center text-white p-2 h-44 cursor-pointer' onClick={handleProgrammingBook}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                    </svg>

                    <h2 className='text-2xl'>Programming Book</h2>
                </div>
                <div className='rounded bg-lime-600 flex flex-col items-center justify-center text-center text-white p-2 h-44 cursor-pointer' onClick={handleStoryBook}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                    </svg>

                    <h2 className='text-2xl'>Story Book</h2>
                </div>
                <div className='rounded bg-lime-600 flex flex-col items-center justify-center text-center text-white p-2 h-44 cursor-pointer' onClick={handleScienceBook}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                    </svg>

                    <h2 className='text-2xl '>Science Fiction Book</h2>
                </div>
            </div>

            {
                categoryBooks.length ?
                    <div className='grid grid-cols-4 gap-5 w-full mx-auto px-6 py-3'>
                        {
                            categoryBooks.map(book =>
                                <div key={book.bid} className="card w-full shadow-xl bg-green-100 rounded">
                                    <ShowBooks
                                        book={book}
                                    ></ShowBooks>
                                </div>
                            )
                        }
                    </div> : ""
            }

        </div>
    );
};

export default BookList;