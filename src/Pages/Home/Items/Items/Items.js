import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const Items = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);

    return (
        <div className="container my-24 px-6 mx-auto">

            <section className="mb-32 text-gray-800 text-center">

                <h2 className="text-3xl font-bold mb-12 pb-4 text-center">Latest Items</h2>

                <div className="grid lg:grid-cols-5 gap-6 xl:gap-12">
                    {
                        items.slice(0, 3).map((item, index) => <Item key={index} item={item} />)
                    }
                    {
                        items.slice(15, 18).map((item, index) => <Item key={index} item={item} />)
                    }
                    {
                        items.slice(21, 25).map((item, index) => <Item key={index} item={item} />)
                    }
                </div>
            </section>
        </div>
    );
};

export default Items;