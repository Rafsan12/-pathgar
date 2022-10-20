import React from 'react';
import "./PaymentCard.css"

const PaymentCard = () => {
    return (
        <div>
            <div class="bg-base-200 py-10  ">
                <div class="card-wraper">
                    <div class="card w-full max-w-md my-7  bg-base-100 shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title">Pay price of the book</h2>
                            <p class="text-xl"> Please pay:00$ </p>

                        </div>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                        <div class="card-body">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentCard;