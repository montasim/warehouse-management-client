import React, { useEffect, useState } from 'react';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import { MdOutlineBrandingWatermark, MdOutlineLocalShipping } from 'react-icons/md';
import { FcRating } from 'react-icons/fc';
import { AiOutlineDollar, AiOutlineStock } from 'react-icons/ai';
import { ImPriceTag } from 'react-icons/im';
import { RiCheckboxMultipleBlankLine } from 'react-icons/ri';
import { toast } from 'react-toastify';

const Inventory = () => {
    const _id = useParams();
    const [product, setProduct] = useState([]);
    const navigate = useNavigate();
    let location = useLocation();

    <Navigate state={{ from: location }} replace />

    useEffect(() => {
        fetch(`https://posdash-server.herokuapp.com/inventory/${_id?.id}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [product]);

    const { category, name, description, supplierName, price, stock, ratings, ratingsCount, img, shipping, quantity } = product;

    const update = event => {
        event.preventDefault();

        const stock = event.target.stock.value;

        const newStock = { stock };

        // update data to server
        fetch(`http://localhost:5000/inventory/${_id?.id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newStock)
        })
            .then(res => res.json())
            .then(data => {
                toast(`${name}'s Stock Updated Successfully`);
            });
    }

    return (
        <div className='d-block mx-auto p-12'>
            <h2 className="text-3xl font-bold uppercase">Details Of {name}</h2>

            <button onClick={() => navigate('/inventory')} type="button" className="flex items-center px-6 py-2.5 mt-8 bg-gray-800 text-white font-semibold text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-600 hover:text-white hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">
                <RiCheckboxMultipleBlankLine className='mr-3 text-xl' />
                Manage Inventories
            </button>

            <div className="container mt-16 px-6 mx-auto">
                <section className="text-gray-800 text-center md:text-left">
                    <div className="block rounded-lg shadow-lg bg-white">
                        <div className="flex flex-wrap items-center">
                            <div className="grow-0 shrink-0 basis-auto block lg:flex w-full lg:w-6/12 xl:w-4/12">
                                <img src={img} alt="Trendy Pants and Shoes"
                                    className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
                            </div>
                            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
                                <div className="px-6 py-12 md:px-12">
                                    <h2 className="text-3xl font-bold pb-2">{name}</h2>
                                    <h4 className='text-xl pb-2'> Supplier: {supplierName}</h4>
                                    <p className="text-gray-500 mb-6 pb-2">
                                        {description}
                                    </p>
                                    <div className="flex flex-wrap mb-6">
                                        <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                                            <p className="flex items-center justify-center md:justify-start">
                                                <MdOutlineBrandingWatermark className='mr-3' /> Category: {category}
                                            </p>
                                        </div>
                                        <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                                            <p className="flex items-center justify-center md:justify-start">
                                                <ImPriceTag className='mr-3' />
                                                Unit Price: {price}
                                            </p>
                                        </div>
                                        <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                                            <p className="flex items-center justify-center md:justify-start">
                                                <AiOutlineStock className='mr-3' />
                                                In Stock: {stock}
                                            </p>
                                        </div>
                                        <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                                            <p className="flex items-center justify-center md:justify-start">
                                                <FcRating className='mr-3' />
                                                Ratings: 5 / {ratings}
                                            </p>
                                        </div>
                                        <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                                            <p className="flex items-center justify-center md:justify-start">
                                                <AiOutlineDollar className='mr-3' />
                                                Total Price: {stock * price}
                                            </p>
                                        </div>
                                        <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                                            <p className="flex items-center justify-center md:justify-start">
                                                <MdOutlineLocalShipping className='mr-3' />
                                                Shipped: {shipping}
                                            </p>
                                        </div>
                                    </div>
                                    <button type="button"
                                        className="inline-block px-7 py-3 bg-gray-800 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">
                                        Delivered
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div >

            <div class="block mx-auto mt-20 p-6 rounded-lg shadow-lg bg-white max-w-md">
                <h2 className='text-2xl text-gray-800 mb-4'>Update The Item Stock Quantity</h2>
                <form onSubmit={update}>
                    <div class="form-group mb-6">
                        <input type="number" class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="stock"
                            placeholder="Add Stock Quantity" name='stock' />
                    </div>
                    <button type='submit' class="
      w-full
      px-6
      py-2.5
      bg-gray-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-lg
      hover:bg-orange-200 hover:text-gray-800 hover:shadow-lg
      focus:bg-orange-200 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-orange-200 active:shadow-lg
      transition
      duration-150
      ease-in-out">Update Stock</button>
                </form>
            </div>
        </div >
    );
};

export default Inventory;