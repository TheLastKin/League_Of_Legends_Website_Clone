'use client'

import { useState } from 'react';
import '../css/content_gamemodes.css'
import HeadingGroup from "./HeadingGroup";
import LeftHeading from './LeftHeading';
import SmallButton from "./SmallButton";

const modes = [{
    name: "Summoner's Rift",
    image: "/image/Summoner_Rift_Temple_Small.png",
    calling: "The most popular game mode",
    description: "Clear your lane, dive into epic 5v5 team fights, and destroy the enemy nexus before they destroy yours.",
    video: "/video/SummonersRift_Video.mp4"
}, {
    name: "Aram",
    image: "/image/Aram_Image.jpg",
    calling: "All random, all mid",
    description: "Battle across an icy bridge as your team of random champions charge toward the enemy Nexus in this chaotically fun 5v5 game mode.",
    video: "/video/Aram_Video.mp4"
}, {
    name: "Team Fight Tactic",
    image: "/image/TFT_Image.jpg",
    calling: "A free-for-all war for supremacy",
    description: "Assemble a squad of champions that battle on your behalf. Outlast all seven of your opponents and become the last person standing.",
    video: "/video/TFT_Video.mp4"
}]

const GameModes = () => {
    const [modeIndex, setIndex] = useState(0)

    const changeGameMode = (index: number) => () => setIndex(index)

    return (
        <div className="content_game_modes">
            <LeftHeading style={{ top: "15%", color: "white" }}>GAME MODES</LeftHeading>
            <div className="game_modes_container">
                <div className="game_modes_headings">
                    <HeadingGroup
                        firstHeadingText="MULTIPLE WAYS TO"
                        secondHeadingText="PLAY"
                        textColor='white'
                    />
                    <SmallButton style={{ position: "absolute", bottom: "-30px", width: "150px" }}>PLAY NOW</SmallButton>
                </div>
                <div className="game_modes_container_border">
                    <div className="game_modes_choices_v">
                        {
                            modes.map((mode, index) => (
                                <div style={{ transform: `translateY(-${100 * modeIndex}px)` }} className="game_mode" onClick={changeGameMode(index)}>
                                    <p className={index === modeIndex ? "gm_text_active" : "gm_text_idle"}>{mode.name}</p>
                                    <span className={index === modeIndex ? "gm_background_active" : "gm_background_idle"}></span>
                                    <img className={index === modeIndex ? "gm_image_active" : "gm_image_idle"} src={mode.image} alt="" />
                                </div>
                            ))
                        }
                    </div>
                    <div className="game_modes_choices_h">
                        {
                            modes.map((mode, index) => (
                                <div style={{ transform: `translateX(-${100 * modeIndex}px)` }} className="game_mode" onClick={changeGameMode(index)}>
                                    <span className={index === modeIndex ? "gm_background_active" : "gm_background_idle"}>
                                        <p>{mode.name}</p>
                                    </span>
                                    <img className={index === modeIndex ? "gm_image_active" : "gm_image_idle"} src={mode.image} alt="" />
                                </div>
                            ))
                        }
                    </div>
                    <div className="game_modes_text">
                        {
                            modes.map((mode, index) => (
                                <>
                                    <p className={"game_modes_calling " + `${modeIndex === index ? "gm_calling_active" : "gm_calling_idle"}`}>{mode.calling}</p>
                                    <p className={"game_modes_description " + `${modeIndex === index ? "gm_description_active" : "gm_description_idle"}`}>{mode.description}</p>
                                </>
                            ))
                        }
                    </div>
                </div>
                <div className="game_modes_preview">
                    <span></span>
                    <svg>
                        <circle cx="50%" cy="50%" r="48%" strokeWidth="5px" strokeDasharray="1,8" stroke="rgba(245, 222, 179, 0.6)" fill="none"></circle>
                    </svg>
                    <div className="game_modes_video">
                        {
                            modes.map((mode, index) => (
                                <video className={modeIndex === index ? "gm_video_active" : "gm_video_idle"} src={mode.video} autoPlay muted loop></video>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameModes;