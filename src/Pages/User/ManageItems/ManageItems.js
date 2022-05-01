import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ManageItems = () => {
    const { _id } = useParams();
    const [items, setItems] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3000/inventory/${_id}`)
            .then(res => res.json())
            .then(data => setItems(data));
    }, [_id]);

    console.log(items);

    return (
        <div className='w-50 mx-auto'>
            <h2>Please Order: {_id}</h2>

        </div>
    );
};

export default ManageItems;