import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AiFillDelete, AiFillEdit, AiFillPlusSquare } from 'react-icons/ai';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../Hooks/Firebase.Init';

const Product = ({ index, product }) => {
    const { _id, name, category, supplierName, img, description, price, stock, shipping } = product;
    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    let email;

    if (user !== null) {
        user.providerData.forEach((profile) => {
            email = profile?.email;
        });
    }

    const itemDelete = _id => {
        const confirm = window.confirm('Are You Sure?');

        if (confirm) {
            const url = `https://posdash-server.herokuapp.com/inventory/${_id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast(
                            <div className='flex'>
                                <img className='w-20' src={img} alt="" />
                                <p className='ml-4'>{name} deleted from inventory.</p>
                            </div>
                        );
                    }
                })
        }
    }

    const addMyItems = () => {

        const item = { name, category, supplierName, img, description, price, stock, shipping, email };

        // send data to server
        fetch('https://posdash-server.herokuapp.com/add-my-items', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                toast(
                    <div className='flex'>
                        <img className='w-20' src={img} alt="" />
                        <p className='ml-4'>{name} added to my items.</p>
                    </div>
                );
            });

    }

    return (
        <tr className="border-b hover:bg-indigo-100 hover:text-grey-700 justify-center">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                <img className='rounded-md w-16 lg:w-20' src={img} alt="" />
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {name.length > 25 ? name.slice(0, 21) + '...' : name}
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {category}
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
                {shipping}
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                $ {stock * price}
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap flex lg:mt-7 mt-2">
                <AiFillEdit onClick={() => navigate(`/inventory/${_id}`)} className='text-2xl text-indigo-500 mr-3' />
                <AiFillPlusSquare onClick={() => addMyItems(_id)} className='text-2xl text-gray-600 mr-3' />
                <AiFillDelete onClick={() => itemDelete(_id)} className='text-2xl text-red-500 mr-3' />
            </td>
        </tr>
    );
};

export default Product;