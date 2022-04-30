import React from 'react';
import DashHeader from '../../Components/DashHeader/DashHeader';
import Sidebar from '../../Components/Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div className='grid'>
            <Sidebar />
            <div className='ml-60'>
                <DashHeader />
            </div>
        </div>
    );
};

export default Dashboard;