import React from 'react';
import Header from '../../Components/Header/Header';
import Sidebar from '../../Components/Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div className='grid'>
            <Sidebar />
            <div className='ml-60'>
                <Header />
            </div>
        </div>
    );
};

export default Dashboard;