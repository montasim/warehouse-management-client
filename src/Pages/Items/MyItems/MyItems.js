import axios from 'axios';
import { getAuth } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import MyProducts from './MyProducts/MyProducts';

const MyItems = () => {
    const [products, setProducts] = useState([]);
    const auth = getAuth();
    const [user] = useAuthState(auth);

    let currentUserEmail;

    if (user !== null) {
        user.providerData.forEach((profile) => {
            console.log("Sign-in provider: " + profile.providerId);

            const splitEmail = profile?.uid.split('@');

            currentUserEmail = splitEmail[0];
        });
    }

    useEffect(() => {
        const getProducts = async () => {
            const url = `https://posdash-server.herokuapp.com/my-items?userEmail=${currentUserEmail}`
            const { data } = await axios.get(url);
            setProducts(data);
        }
        getProducts();
    }, [products]);

    return (
        <div className='mx-10 mt-32 mb-10'>
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
                                        products.map((product, index) => <MyProducts key={index} product={product} index={index} />)
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

export default MyItems;