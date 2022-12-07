import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import CheckoutForm from "../../Payment/CheckoutForm";
import auth from './../../firebase.init';


const queryClient = new QueryClient();
const MyOrders = () => {

    const [user] = useAuthState(auth);
    const userUrl = `https://pathagar.onrender.com/booking/email/${user.email}`;
    const {
        data: orders,
        isLoading,
        refetch,
    } = useQuery(["usersOrders"], () => fetch(userUrl).then((res) => res.json()));

    const handleDltOrder = (id) => {
        const url = `https://pathagar.onrender.com/booking/dlt/${id}`;
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this product!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                await fetch(url, {
                    method: "DELETE",
                    headers: {
                        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                    },
                })
                    .then((res) => res.json())
                    .then((data) => {
                        Swal.fire("Deleted!", "Product has been deleted.", "success");
                        refetch();
                    });
            }
        });
    };

    const navigate = useNavigate()
    const checkout = () => {
        navigate(`/payment`)
    }
    return (
        <div>
            <h1 className="text-accent text-lg font-bold text-center my-5">
                {" "}
                Total number of order : {orders?.length}
            </h1>
            <div className="overflow-x-auto">
                <table className="table w-3/4 sm:w-4/4 flex justify-center items-center mx-auto">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Quantity</th> 
                            <th>Price</th> 
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders?.map((order, index) => {
                            return <tr key={order._id}>
                                <th className="text-accent text-base">{index + 1}</th>
                                <td className="text-accent text-base">{order?.name}</td>
                                <td className="text-accent text-base">{order?.quantity}</td>
                                <td className="text-accent text-base">{order?.price}</td>


                                <td> 
                                    <button onClick={() => handleDltOrder(order._id)} className="btn btn-square bg-red-500">
                                        x
                                    </button>
                                    

                                </td>
                            </tr>;
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

// export default MyOrders;

export default function Wraped() {
    return (<QueryClientProvider client={queryClient}>
        <MyOrders />
    </QueryClientProvider>
    );

}