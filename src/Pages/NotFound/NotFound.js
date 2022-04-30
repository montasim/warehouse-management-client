import React from 'react';
import { useNavigate } from 'react-router-dom';
import e404 from '../../Media/Image/e404.png';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className='p-24'>
            <h2 className='text-center text-3xl uppercase text-grey-600'>The page you are looking is not found!</h2>
            <button onClick={() => navigate('/')} type="button" class="block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs rounded-full mx-auto mt-8 mb-16">Back to Home</button>
            <img src={e404} class="max-w-full h-auto mx-auto" alt="e404 image" />
        </div>
    );
};

export default NotFound;