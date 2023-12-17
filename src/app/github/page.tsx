"use client";
import React, { useEffect } from 'react';
import './css/general.css'
import NavBar from './components/NavBar';
import Campaign from './components/Campaign';
import Productivity from './components/Productivity';
import Security from './components/Security';
import Collaboration from './components/Collaboration';
import AnimatedGlobe from './components/AnimatedGlobe';

const Home = () => {
    
    useEffect(() => {
        document.title = "GitHub"
    }, [])

    return (
        <div className='wrapper'>
            <NavBar/>
            <div className="body">
                <Campaign/>
                <Productivity/>
                <Security/>
                <Collaboration/>
                <AnimatedGlobe/>
            </div>
        </div>
    );
};

export default Home;