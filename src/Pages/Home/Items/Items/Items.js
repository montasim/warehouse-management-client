import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Item from '../Item/Item';
import { RiCheckboxMultipleBlankLine } from 'react-icons/ri';
import { MdOutlineInventory2 } from 'react-icons/md';

const Items = () => {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://posdash-server.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);

    return (
        <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500" className="container my-24 px-6 mx-auto">

            <section className="mb-32 text-gray-800 text-center">

                <h2 className="text-3xl font-bold mb-12 pb-4 text-center flex items-center justify-center">
                    <MdOutlineInventory2 className='mr-3' />
                    Inventory Items
                </h2>

                <div className="grid lg:grid-cols-3 md:grid-cols-3 gap-6 xl:gap-12">
                    {
                        items.slice(0, 6).map((item, index) => <Item key={index} item={item} />)
                    }
                </div>
                <button onClick={() => navigate('/inventory')} type="button" className="flex items-center mx-auto mt-20 px-6 py-2.5 bg-gray-800 text-white font-semibold text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-600 hover:text-white hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">
                    <RiCheckboxMultipleBlankLine className='mr-3 text-xl' />
                    Manage Inventories
                </button>
            </section>
        </div>
    );
};

export default Items;