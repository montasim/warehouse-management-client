import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Item from '../Item/Item';

const Items = () => {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://posdash-server.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);

    return (
        <div className="container my-24 px-6 mx-auto">

            <section className="mb-32 text-gray-800 text-center">

                <h2 className="text-3xl font-bold mb-12 pb-4 text-center">Latest Items</h2>

                <div className="grid lg:grid-cols-4 gap-6 xl:gap-12">
                    {
                        items.slice(0, 2).map((item, index) => <Item key={index} item={item} />)
                    }
                    {
                        items.slice(15, 17).map((item, index) => <Item key={index} item={item} />)
                    }
                    {
                        items.slice(21, 23).map((item, index) => <Item key={index} item={item} />)
                    }
                </div>

                <button onClick={() => navigate('/manage-inventory')} type="button" class="inline-block mt-20 px-6 py-2.5 bg-orange-200 text-gray-600 font-semibold text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:text-white hover:shadow-lg focus:bg-blue-700 focus:text-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-lg transition duration-150 ease-in-out">Manage Inventories</button>
            </section>
        </div>
    );
};

export default Items;