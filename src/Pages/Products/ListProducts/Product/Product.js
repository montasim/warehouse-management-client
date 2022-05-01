import React from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

const Product = ({ index, product }) => {
    const { name, supplierName, price, stock } = product;

    return (
        <tr className="border-b hover:bg-orange-100 hover:text-grey-700">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {name}
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {supplierName}
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                $ {price}
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {stock}
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                $ {stock * price}
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap flex">
                <AiFillEdit className='text-2xl text-blue-400 mr-3' />
                <AiFillDelete className='text-2xl text-red-400' />
            </td>
        </tr>
    );
};

export default Product;