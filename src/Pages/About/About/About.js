import React from 'react';
import Connect from '../Connect/Connect';
import Header from '../Header/Header';
import Speciality from '../Speciality/Speciality';
import Stats from '../Stats/Stats';

const About = () => {
    return (
        <section>
            <Header />

            <Speciality />

            <Stats />

            <Connect />
        </section>
    );
};

export default About;