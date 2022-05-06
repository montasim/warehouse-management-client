import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MyProducts from './MyProducts/MyProducts';
import { RiAddBoxFill } from 'react-icons/ri';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Hooks/Firebase.Init';
import { signOut } from 'firebase/auth';
import axiosPrivate from '../../../API/axiosPrivate';
import SearchItems from '../../../Components/SearchItems/SearchItems';

const MyItems = () => {
    const [myItems, setMyItems] = useState([]);
    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    useEffect(() => {
        const getMyItems = async () => {
            const email = user?.email;
            const url = `https://posdash-server.herokuapp.com/my-items?email=${email}`;
            try {
                const { data } = await axiosPrivate.get(url);
                setMyItems(data);
            }
            catch (error) {
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
        getMyItems();
    }, [myItems]);

    return (
        <div className='mx-10 mt-32 mb-10'>
            <div className='mb-4 flex justify-between items-center'>
                <button onClick={() => navigate('/add-item')} type="button" className="flex items-center px-6 py-2.5 bg-indigo-600 text-white font-semibold text-xs leading-tight uppercase rounded-full shadow-md active:shadow-lg transition duration-150 ease-in-out">
                    <RiAddBoxFill className='mr-3 text-xl' />
                    Add New Item
                </button>
                <SearchItems />
            </div>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full">
                                <thead className="bg-indigo-300 text-white rounded-lg">
                                    <tr>
                                        <th scope="col" className="text-md font-medium text-gray-900 px-6 py-4 text-left">
                                            Serial
                                        </th>
                                        <th scope="col" className="text-md font-medium text-gray-900 px-6 py-4 text-left">
                                            Image
                                        </th>
                                        <th scope="col" className="text-md font-medium text-gray-900 px-6 py-4 text-left">
                                            Product Name
                                        </th>
                                        <th scope="col" className="text-md font-medium text-gray-900 px-6 py-4 text-left">
                                            Category
                                        </th>
                                        <th scope="col" className="text-md font-medium text-gray-900 px-6 py-4 text-left">
                                            Supplier
                                        </th>
                                        <th scope="col" className="text-md font-medium text-gray-900 px-6 py-4 text-left">
                                            Price
                                        </th>
                                        <th scope="col" className="text-md font-medium text-gray-900 px-6 py-4 text-left">
                                            Available
                                        </th>
                                        <th scope="col" className="text-md font-medium text-gray-900 px-6 py-4 text-left">
                                            Sold
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
                                        myItems.map((product, index) => <MyProducts key={index} product={product} index={index} />)
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