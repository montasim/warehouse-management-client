import React from 'react';
import { toast } from 'react-toastify';
import { AiFillDelete } from 'react-icons/ai';

const MyProducts = ({ index, product }) => {
    const { _id, name, category, supplierName, img, price, stock, shipping: shipping = 0 } = product;

    const deleteMyItems = _id => {
        const confirm = window.confirm('Are You Sure?');

        if (confirm) {
            const url = `https://posdash-server.herokuapp.com/my-items/${_id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast(
                            <div className='flex'>
                                <img className='w-20' src={img} alt="" />
                                <p className='ml-4'>{name} deleted from my items.</p>
                            </div>
                        );
                    }
                })
        }
    }

    return (
        <tr className="border-b hover:bg-indigo-100 hover:text-grey-700">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                <img className='rounded-md w-16 lg:w-20' src={img} alt="" />
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {name}
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
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <AiFillDelete onClick={() => deleteMyItems(_id)} className='text-2xl text-red-500 mr-3' />
            </td>
        </tr>
    );
};

export default MyProducts;