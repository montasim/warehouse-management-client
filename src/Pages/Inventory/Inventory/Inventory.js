import React, { useEffect, useState } from 'react';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import { MdOutlineBrandingWatermark, MdOutlineLocalShipping } from 'react-icons/md';
import { FcRating } from 'react-icons/fc';
import { AiOutlineDollar, AiOutlineStock } from 'react-icons/ai';
import { ImPriceTag } from 'react-icons/im';
import { RiCheckboxMultipleBlankLine } from 'react-icons/ri';
import { toast } from 'react-toastify';
import SearchItems from '../../../Components/SearchItems/SearchItems';

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

    const { category, name, description, supplierName, price, stock, ratings, img, shipping } = product;

    const oldStock = stock;

    const update = (event) => {
        event.preventDefault();

        const userStock = parseInt(event.target.stock.value);

        if (userStock > 0) {
            const stock = userStock + parseInt(oldStock);
            const newStock = { stock };

            // update data to server
            fetch(`https://posdash-server.herokuapp.com/inventory/${_id?.id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newStock)
            })
                .then(res => res.json())
                .then(data => {
                    toast(
                        <div className='flex'>
                            <img className='w-20' src={img} alt="" />
                            <p className='ml-4'>{name}'s stock increased {userStock}.</p>
                        </div>
                    );
                });

            event.target.reset();
        }
        else {
            toast('Invalid stock input');
        }
    }

    const deliver = (stock) => {
        const newStock = { stock };

        // update data to server
        fetch(`https://posdash-server.herokuapp.com/inventory/${_id?.id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newStock)
        })
            .then(res => res.json())
            .then(data => {
                toast(
                    <div className='flex'>
                        <img className='w-20' src={img} alt="" />
                        <p className='ml-4'>{name}'s stock decreased 1.</p>
                    </div>
                );
            });
    }

    return (
        <div className='d-block mx-auto p-12'>
            <div className='mb-4 p-4 flex justify-between items-center'>
                <button onClick={() => navigate('/inventory')} type="button" className="flex items-center px-6 py-2.5 bg-indigo-600 text-white font-semibold text-xs leading-tight uppercase rounded-full shadow-md transition duration-150 ease-in-out">
                    <RiCheckboxMultipleBlankLine className='mr-3 text-xl' />
                    Manage Inventories
                </button>
                <SearchItems />
            </div>

            <h2 className="text-3xl font-bold uppercase mt-16">Details Of {name}</h2>

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
                                                Sold: {shipping}
                                            </p>
                                        </div>
                                    </div>
                                    <button onClick={() => deliver(stock - 1)} type="button"
                                        className="inline-block px-7 py-3 bg-indigo-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                                        Delivered
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div >

            <div className="block mx-auto mt-20 p-6 rounded-lg shadow-lg bg-white max-w-md">
                <h2 className='text-2xl text-gray-800 mb-4'>Update The Item Stock Quantity</h2>
                <form onSubmit={update}>
                    <div className="form-group mb-6">
                        <input type="number" className="form-control block
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
        focus:text-indigo-600 focus:bg-white focus:border-indigo-600 focus:outline-none" id="stock"
                            placeholder="Add Stock Quantity" name='stock' />
                    </div>
                    <button type='submit' className="
      w-full
      px-6
      py-2.5
      bg-indigo-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-lg active:shadow-lg
      transition
      duration-150
      ease-in-out">Update Stock</button>
                </form>
            </div>
        </div >
    );
};

export default Inventory;