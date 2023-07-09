'use client'

import React, { useEffect } from 'react';
import './css/general.css'
import TopBarMenu from './components/TopBarMenu';
import ParallaxContainer from './components/ParallaxContainer';
import Description from './components/Description';
import Design from './components/Design';
import Performance from './components/Performance';
import NewToMac from './components/NewToMac';
import Display from './components/Display';
import MagicKeyboardAndTouchID from './components/MagicKeyboardAndTouchID';
import Connectivity from './components/Connectivity';
import OtherContent from './components/OtherContent';
import Footer from './components/Footer';
import attachEvent from './function/DOMController';

const Home = () => {

    useEffect(() => {
        document.title = "Macbook Air"
        setTimeout(attachEvent, 1000)
    }, [])

    return (
        <div className="content_container">
            <ParallaxContainer />
            <div className="content">
                <TopBarMenu />
                <section className="filter_space"></section>
                <section className='content_section'>
                    <Description />
                    <Design />
                    <Performance />
                </section>
                <NewToMac />
                <section className='content_section'>
                    <Display />
                    <MagicKeyboardAndTouchID />
                    <Connectivity />
                </section>
                <section className='content_section_large'>
                    <OtherContent />
                </section>
                <Footer />
            </div>
        </div>
    );
};

export default Home;