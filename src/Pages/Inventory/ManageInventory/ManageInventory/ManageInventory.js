import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiAddBoxFill } from 'react-icons/ri';
import Product from '../Product/Product';

const ManageInventory = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://posdash-server.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div className='mx-10 mt-32 mb-10'>
            <div className='mb-4 flex justify-between items-center'>
                <button onClick={() => navigate('/add-item')} type="button" className="flex items-center px-6 py-2.5 bg-gray-800 text-white font-semibold text-xs leading-tight uppercase rounded-full shadow-md hover:bg-orange-200 hover:text-gray-700 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">
                    <RiAddBoxFill className='mr-3 text-xl' />
                    Add New Item
                </button>
                <div className="">
                    <div className="mb-3 xl:w-96">
                        <input
                            type="search"
                            className="
        form-control
        block
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
        focus:text-gray-700 focus:bg-white focus:border-blue-400 focus:outline-none
      "
                            id="exampleSearch"
                            placeholder="Search here..."
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full">
                                <thead className="bg-blue-400 text-white rounded-lg">
                                    <tr>
                                        <th scope="col" className="text-md font-medium text-gray-900 px-6 py-4 text-left">
                                            Serial
                                        </th>
                                        <th scope="col" className="text-md font-medium text-gray-900 px-6 py-4 text-left">
                                            Product Name
                                        </th>
                                        <th scope="col" className="text-md font-medium text-gray-900 px-6 py-4 text-left">
                                            Supplier Name
                                        </th>
                                        <th scope="col" className="text-md font-medium text-gray-900 px-6 py-4 text-left">
                                            Unit Price
                                        </th>
                                        <th scope="col" className="text-md font-medium text-gray-900 px-6 py-4 text-left">
                                            Available Quantity
                                        </th>
                                        <th scope="col" className="text-md font-medium text-gray-900 px-6 py-4 text-left">
                                            Total Price
                                        </th>
                                        <th scope="col" className="text-md font-medium text-gray-900 px-6 py-4 text-left">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        products.map((product, index) => <Product key={index} product={product} index={index} />)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageInventory;