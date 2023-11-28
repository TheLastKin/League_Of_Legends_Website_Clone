'use client'
import React, { useEffect, useState } from 'react';
import '../css/campaign.css'
import { GoCircle, GoCode } from "react-icons/go";
import MarkerLine from './MarkerLine';
import MarkerCheckpoint from './MarkerCheckpoint';
import Marker from './Marker';
import GetStarted from './GetStarted';

const Campaign = () => {
    const [show, setShow] = useState(false)

    useEffect(() => {
        setShow(true)
    }, [])

    return (
        <div className='home_campaign'>
            <img src="/image/github/banner.webp" alt="" className='campaign_background' />
            <section>
                <Marker paddingTop={25}>
                    <MarkerCheckpoint show={show} marginVertical={5}>
                        <div className="circle"></div>
                    </MarkerCheckpoint>
                    <MarkerLine show={show} lineHeight={255} lineGradient='linear_purple'/>
                    <MarkerCheckpoint show={show} glowGradient='radial_purple'>
                        <GoCode className='code'/>
                    </MarkerCheckpoint>
                    <MarkerLine show={show} lineHeight={300} lineGradient='linear_purple_green'/>
                </Marker>
                <div className="content_flex">
                    <a href="" className='github_universe'>
                        <div className='button_left'>
                            <img src="/image/github/github_universe.png" alt="" />
                        </div>
                        <div className='button_middle'>
                            <h4>GitHub Universe: AI. Security. DevEx</h4>
                            <span>Register for free and join us on Nov 8-9</span>
                        </div>
                        <div className="button_right chevron">
                            <div className="chevron_line"></div>
                            <div className="chevron_arrow"></div>
                        </div>
                    </a>
                    <h1 className="slogan">Let's build from here</h1>
                    <span className="slogan_2">The world's leading AI-powered developer platform.</span>
                    <GetStarted marginTop={70}/>
                    <div className="trusted_orgs">
                        <span>Trusted by the world’s leading organizations</span>
                        <span>↘︎</span>
                    </div>
                    <div className="orgs">
                        <img src="/image/github/3m.svg" alt="" />
                        <img src="/image/github/kpmg.svg" alt="" />
                        <img src="/image/github/mercedes.svg" alt="" />
                        <img src="/image/github/pg.svg" alt="" />
                        <img src="/image/github/sap.svg" alt="" />
                        <img src="/image/github/telus.svg" alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Campaign;