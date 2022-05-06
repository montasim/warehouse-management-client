import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Item from '../Item/Item';
import { RiCheckboxMultipleBlankLine } from 'react-icons/ri';
import { MdOutlineInventory2 } from 'react-icons/md';
import Loading from '../../../../Components/Loading/Loading';

const Items = () => {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://posdash-server.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);

    return (<section>
        <div className="max-w-screen-xl px-4 py-8 mx-auto">
            <div className="relative max-w-3xl mx-auto text-center">
                <span className="absolute inset-x-0 h-px -translate-y-1/2 bg-black/10 top-1/2"></span>

                <h2 className="relative inline-block px-4 text-4xl sm:text-3xl font-bold text-center bg-white">
                    <span className='flex items-center'>
                        <MdOutlineInventory2 className='mr-3' />
                        Inventory Items
                    </span>
                </h2>
            </div>

            <div className="grid grid-cols-1 mt-14 lg:grid-cols-3 md:grid-cols-2 gap-x-4 gap-y-8">
                {
                    items ? items.slice(0, 6).map((item, index) => <Item key={index} item={item} />) : <Loading />
                }
            </div>

            <button onClick={() => navigate('/inventory')} type="button" className="flex items-center mx-auto mt-20 px-6 py-2.5 bg-indigo-600 text-white font-semibold text-xs leading-tight uppercase rounded-full shadow-md transition duration-150 ease-in-out">
                <RiCheckboxMultipleBlankLine className='mr-3 text-xl' />
                Manage Inventories
            </button>
        </div>
    </section>
    );
};

export default Items;