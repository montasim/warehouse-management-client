import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const _id = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch(`https://posdash-server.herokuapp.com/inventory/${_id?.id}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, []);

    console.log(_id.id);

    return (
        <div>
            <h2>Inventory {product.name}</h2>
        </div>
    );
};

export default Inventory;