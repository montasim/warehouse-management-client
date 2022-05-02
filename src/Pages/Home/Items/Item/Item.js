import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineStock } from 'react-icons/ai';

const Item = ({ item }) => {
    const { _id, category, name, description, supplierName, price, stock, ratings, ratingsCount, img, shipping, quantity } = item;
    const navigate = useNavigate();

    const naviagateToItems = _id => {
        navigate(`/inventory/${_id}`);
    }

    return (
        <div className="mb-6 lg:mb-0">
            <div className="relative block bg-white rounded-lg shadow-lg">
                <div className="flex">
                    <div
                        className="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                        data-mdb-ripple="true" data-mdb-ripple-color="light">
                        <img src={img} className="w-full" />
                        <a href="#!">
                            <div
                                className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                        </a>
                    </div>
                </div>
                <div className="p-6">
                    <h5 className="font-bold text-lg mb-3">{name}</h5>
                    <div className="text-gray-500 mb-4 flex justify-between">
                        <p className='text-lg text-black'><span className='text-2xl'>$</span>{price}</p>
                        <p className='text-xl text-black'> <span className='text-black mr-1'>Qty:</span>{stock}</p>
                    </div>
                    <p className="text-gray-500 mb-4">
                        <small>
                            <a href="" className="text-gray-900"><span className='font-semibold'>Supplier:</span> {supplierName}</a>
                        </small>
                    </p>
                    <p className="mb-4 pb-2">
                        {description}
                    </p>
                    <button onClick={() => naviagateToItems(_id)} data-mdb-ripple="true" data-mdb-ripple-color="light"
                        className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center">
                        <AiOutlineStock className='mr-3 text-lg' />
                        Update Stock
                    </button>
                    <p className="text-gray-500 mt-4">
                        <small>Added <u>13.01.2022</u></small>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Item;