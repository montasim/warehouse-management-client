import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';

const Home = () => {
    return (
        <div>
            <Sidebar />
            <h1 className="text-3xl font-bold text-center underline">
                Hello world!
            </h1>
        </div>
    );
};

export default Home;