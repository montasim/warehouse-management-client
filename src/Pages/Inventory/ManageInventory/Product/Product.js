import React, { useEffect, useState } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Product = ({ index, product }) => {
    const { _id, name, supplierName, price, stock } = product;
    const navigate = useNavigate();

    const itemDelete = _id => {
        const confirm = window.confirm('Are You Sure?');

        if (confirm) {
            console.log(_id);
            const url = `https://posdash-server.herokuapp.com/inventory/${_id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast(`Deleted Successfully: ${_id}`);
                    }
                })
        }
    }

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
                <AiFillEdit onClick={() => navigate(`/inventory/${_id}`)} className='text-2xl text-blue-400 mr-3' />
                <AiFillDelete onClick={() => itemDelete(_id)} className='text-2xl text-red-400' />
            </td>
        </tr>
    );
};

export default Product;