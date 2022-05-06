import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineStock } from 'react-icons/ai';

const Item = ({ item }) => {
    const { _id, name, description, supplierName, price, stock, img } = item;
    const navigate = useNavigate();

    return (
        <div
            className="relative block mx-auto border border-gray-100 rounded-xl w-5/6"
        >
            <button
                type="button"
                name="wishlist"
                className="absolute p-2 text-white bg-indigo-600 rounded-full right-4 top-4"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
            </button>

            <img
                loading="lazy"
                alt="Build Your Own Drone"
                className="object-contain w-full"
                src={img}
            />

            <div className="p-6">
                <div className='flex justify-between'>
                    <p className="text-xl font-medium text-gray-600">
                        $ {price}
                    </p>
                    <p className="text-xl font-medium text-gray-600">
                        Q {stock}
                    </p>
                </div>

                <h5 className="mt-1 text-lg font-bold">
                    {name.length > 25 ? name.slice(0, 22) + ' ...' : name}
                </h5>

                <h6 className='text-lg my-2'>{supplierName}</h6>

                <p>{description.length > 75 ? description.slice(0, 70) + ' ...' : description}</p>

                <button onClick={() => navigate(`/inventory/${_id}`)}
                    name="add"
                    type="button"
                    className="flex items-center justify-center w-full px-4 py-2 mt-6 bg-indigo-600 rounded-lg"
                >
                    <span className="text-sm text-white font-medium">
                        Update Stock
                    </span>

                    <AiOutlineStock className='ml-3 text-xl text-white' />
                </button>

                <h6 className='mt-4 text-center text-xs'>Added on: 10/02/2022</h6>
            </div>
        </div>
    );
};

export default Item;