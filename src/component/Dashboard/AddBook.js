import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddBook = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm();

    const imgStorageKey = "d23a6e9b7f3595e3ffcd281bc8851864";

    const addProduct = (data) => {
        const img = data.productImg[0];
        const formData = new FormData();
        formData.append("image", img);
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.success) {
                    const img = result.data.url;
                    const product = {
                        name: data.productName,
                        price: data.productPrice,
                        image: img,
                        category: data.category
                    };
                    fetch("https://pathagar.onrender.com/book", {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                        },
                        body: JSON.stringify(product),
                    })
                        .then((res) => res.json())
                        .then((x) => {
                            if (x?.acknowledged) {
                                Swal.fire("Good job!", "Product has been added", "success");
                            }
                        });
                }
            });
        reset();
    };

    return (
        <div className="lg:w-1/2 sm:w-3/4 px-5 mx-auto py-2">
            <h1 className="text-accent font-bold text-2xl mx-auto mt-5 text-center">
                Add new product
            </h1>
            <form onSubmit={handleSubmit(addProduct)}>
                <div className="form-control">
                    <label className="label text-accent font-semibold">
                        Product Name
                    </label>
                    <input
                        type="text"
                        placeholder="Product Name"
                        className="py-2 px-3 border border-accent rounded-lg w-full text-accent"
                        {...register("productName")}
                    />
                    <label className="label text-accent font-semibold">
                        Product Category
                    </label>
                    <input
                        type="text"
                        placeholder="Product Name"
                        className="py-2 px-3 border border-accent rounded-lg w-full text-accent"
                        {...register("category")}
                    />

                    <label className="label text-accent font-semibold">
                        Product Price
                    </label>
                    <input
                        type="number"
                        placeholder="Product Price"
                        className="py-2 px-3 border border-accent rounded-lg w-full text-accent"
                        {...register("productPrice")}
                    />

                    <label className="label text-accent font-semibold">
                        Product Image
                    </label>
                    <input
                        type="file"
                        placeholder="Product Image"
                        className="py-2 px-3 border border-accent rounded-lg w-full text-accent"
                        {...register("productImg")}
                    />
                    <input
                        type="submit"
                        value="Add product"
                        className="btn btn-nutral mt-3"
                    />
                </div>
            </form>
        </div>
    );
};

export default AddBook;