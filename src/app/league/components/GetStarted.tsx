import React from 'react';
import LargeButton from './LargeButton';
import '../css/content_get_started.css'
import HeadingGroup from './HeadingGroup';
import LeftHeading from './LeftHeading';

const GetStarted = () => {
    return (
        <div className="content_get_started">
            <LeftHeading style={{ color: "white" }}>HOW TO PLAY</LeftHeading>
            <img src="/image/league/Summoner_Rift.png" alt="" />
            <div className="get_started_text">
                <HeadingGroup
                    firstHeadingText='START YOUR'
                    secondHeadingText='LEGEND'
                    thirdHeadingText="New to League? Get a rundown on the basics for the most popular game mode."
                    textColor='white'
                />
                <div className="get_started_buttons">
                    <LargeButton containerStyle={{ marginRight: "20px" }} backgroundColor='rgb(208, 168, 92)'>GET STARTED</LargeButton>
                    <LargeButton containerStyle={{ marginLeft: "20px" }}>PLAY FOR FREE</LargeButton>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;