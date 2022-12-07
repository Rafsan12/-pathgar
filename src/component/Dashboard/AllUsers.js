import { async } from "@firebase/util";
import React, { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import Swal from "sweetalert2";
import { toast } from 'react-toastify';
import Loading from './../Shared/Loading';

const queryClient = new QueryClient();

const AllUsers = () => {



    const userUrl = ` https://pathagar.onrender.com/allusers`;
    const {
        data: users,
        isLoading,
        refetch,
    } = useQuery(["users"], () => fetch(userUrl).then((res) => res.json()));

    if (isLoading) {
        <Loading></Loading>;
    }

    const handleDlt = async (email) => {
        const url1 = ` https://pathagar.onrender.com/allusers/dlt/${email}`;
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this user!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                await fetch(url1, {
                    method: "DELETE",
                    headers: {
                        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                    },
                })
                    .then((res) => res.json())
                    .then((data) => {
                        Swal.fire("Deleted!", "User has been deleted.", "success");
                        refetch();
                    });
            }
        });
    };

    const handleAdmin = async (user) => {
        const email = user.email;
        const url1 = ` https://pathagar.onrender.com/allusers/makeadmin/${email}`;
        Swal.fire({
            title: "Are you sure?",
            text: `${user?.name ? user.name : ''} promot to admin`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
        }).then(async (result) => {
            if (result.isConfirmed) {
                await fetch(url1, {
                    method: "PUT",
                    headers: {

                        authorization: `Bearer ${localStorage.getItem("accessToken")}`
                    }
                })
                    .then((res) => {
                        if (res.status === 403) {
                            toast.error('Failed to make admin');
                        }
                        res.json()
                    })

                    .then((data) => {
                        Swal.fire(
                            'Admin made',
                            `Email ${user.email}`,
                            'success'
                        );
                        refetch();

                    });
            }
        });

    };

    return (
        <div className="">
            <h1 className="text-accent text-lg font-bold text-center my-5">
                {" "}
                Total number of user : {users?.length}
            </h1>
            <div className="overflow-x-auto">
                <table className="table w-3/4 flex justify-center items-center mx-auto">
                    <thead>
                        <tr>
                            <th></th>

                            <th>Email</th>

                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map((user, index) => {
                            return (
                                <tr key={user._id}>
                                    <th className="text-accent text-base">{index + 1}</th>

                                    <td className="text-accent text-base">{user.email}</td>

                                    <td>
                                        <button
                                            className="btn btn-xs mx-1"
                                            onClick={() => handleDlt(user.email)}
                                        >
                                            Delete
                                        </button>
                                        {
                                            (user.role !== 'admin') && <button
                                                className="btn btn-xs mx-1"
                                                onClick={() => handleAdmin(user)}
                                            >
                                                Make admin
                                            </button>
                                        }
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div >
        </div >
    );
};

// export default AllUsers;
export default function Wraped() {
    return (<QueryClientProvider client={queryClient}>
        <AllUsers />
    </QueryClientProvider>
    );

}