import React from 'react';
import "./PaymentCard.css";
import {loadStripe} from '@stripe/stripe-js';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
  } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
  

const stripePromise = loadStripe('pk_test_51LuvjID4so4eq6Yp8JZQAnoqQfHXMljMCHcqDzuvYhgV0oG7Jm5rOohqJGaQNbvbwJZchrq93J0ZiLH6UKpwXJJa00c5bXyePM');

const PaymentCard = () => {
    return (
        <div>
            <div class="bg-base-200 py-10  ">
                <div class="card-wraper">
                    <div class="card w-full max-w-md my-7  bg-base-100 shadow-xl">
                        <div class="card-body font-bold">
                            <h2 class="card-title font-bold"> Pay price of the book</h2>
                            <p class="text-xl"> Please pay :  $00 </p>

                        </div>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                        <div class="card-body">

                            <Elements stripe={stripePromise}>
                                <CheckoutForm />
                            </Elements>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentCard;