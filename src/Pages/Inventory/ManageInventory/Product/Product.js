import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AiFillDelete, AiFillEdit, AiFillPlusSquare } from 'react-icons/ai';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../Hooks/Firebase.Init';

const Product = ({ index, product }) => {
    const { _id, name, category, supplierName, img, description, price, stock } = product;
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
            const url = `https://posdash-server.herokuapp.com/${_id}`;
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

    const addMyItems = () => {

        const item = { name, category, supplierName, img, description, price, stock, email };

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
                toast(`${name} Added Successfully`);
            });

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
                <AiFillDelete onClick={() => itemDelete(_id)} className='text-2xl text-red-400 mr-3' />
                <AiFillPlusSquare onClick={() => addMyItems(_id)} className='text-2xl text-orange-400 mr-3' />
            </td>
        </tr>
    );
};

export default Product;