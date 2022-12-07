import React, { useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { UserContext } from '../App';
import { AddCart, AddItem } from '../Redux/Reducer/BookSlice';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../firebase.init';

const ShowBooks = ({ book }) => {


    //const dispatch = useDispatch();
    const [cartData, setCartData] = useContext(UserContext);
    const [user] = useAuthState(auth);
    // console.log(user.email);

    const AddToCart = async (book) => {
        //dispatch(AddItem(book));
        const response = await fetch('https://pathagar.onrender.com/carts');
        const carts = await response.json();
        setCartData(carts.length + 1);
        const check = carts.filter(oldBook => oldBook.name === book.name);

        if (check.length <= 0) {
            const data = {
                name: book.name,
                price: book.price,
                quantity: 1,
                image: book.image,
                email: user.email

            }

            fetch("https://pathagar.onrender.com/cart", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },

                body: JSON.stringify(data),
            })
                .then((res) => res.json())
                .then((data) => {
                    //console.log(data);
                });

            // carts.map(book => dispatch(AddCart(book)));
        }


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