'use client';

import { useEffect, useRef, useState } from 'react';
import '../css/content_champion.scss'
import SmallButton from './SmallButton';
import HeadingGroup from './HeadingGroup';
import LeftHeading from './LeftHeading';

const animations = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"];
const roles = ['ASSASSINS', 'FIGHTERS', 'MAGES', 'MARKMEN', 'SUPPORTS', 'TANKS'];
const champions = [{
    name: "Akali",
    calling: "The Rogue Assassin",
    role: "Assassin"
}, {
    name: "Yasuo",
    calling: "The Unforgiven",
    role: "Fighter"
}, {
    name: "Lux",
    calling: "The Luminous Lady",
    role: "Mage"
}, {
    name: "Jinx",
    calling: "The Loose Cannon",
    role: "Marksman"
}, {
    name: "Thresh",
    calling: "The Chain Warden",
    role: "Support"
}, {
    name: "Leona",
    calling: "The Radiant Dawn",
    role: "Tank"
}]

let animationIndex = 0;

const ChampionRolePreview = () => {
    const [roleIndex, setIndex] = useState(0)
    const indexRef = useRef(0)
    indexRef.current = roleIndex

    useEffect(() => {
        const roles = document.getElementsByClassName("role");
        const animatedCircle = (document.querySelector(".animated_circle") as HTMLElement);
        animatedCircle.onanimationiteration = () => {
            if (indexRef.current === 5) {
                onRoleClicked(0)()
            } else {
                onRoleClicked(indexRef.current + 1)()
            }
        }
        for (let i = 0; i < roles.length; i++) {
            roles[i].addEventListener("click", () => {
                animatedCircle.onanimationiteration = null
            })
        }
    }, [])

    const onRoleClicked = (index: number) => () => {
        if (indexRef.current === index) return;

        const background = (document.querySelector(".content_champion") as HTMLElement);

        background.style.backgroundImage = `linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url("/image/league/${champions[index].role}_icon_gray.jpg")`

        const yellowRing = document.getElementById("yellow_ring");
        const roles = document.getElementsByClassName("role");
        const yellowDot = document.getElementById("yellow_dot");
        const yellowLines = document.getElementsByClassName("yellow_line");

        yellowDot!.ontransitionstart = () => {
            for (let line of yellowLines) {
                line.className = "yellow_line remove_height"
            }
        }
        yellowDot!.ontransitionend = () => {
            yellowLines[index].className = "yellow_line add_height"
        }
        yellowRing!.style.left = `${90 * (index + 1) - 74}px`;
        yellowDot!.style.left = `${90 * (index + 1) - 50}px`;

        for (let i = 0; i < roles.length; i++) {
            const icon = (roles[i].childNodes[0] as HTMLElement);
            const text = (roles[i].childNodes[1] as HTMLElement);
            const dot = (roles[i].childNodes[2] as HTMLElement);
            if (i === index) {
                icon.style.backgroundSize = "30px 30px";
                icon.style.backgroundPosition = "50% 50%";
                icon.style.filter = "opacity(1)"
                text.style.color = "black"
                dot.style.backgroundColor = "black"
            } else {
                icon.style.backgroundSize = "25px 25px";
                icon.style.backgroundPosition = "50% 75%";
                icon.style.filter = "opacity(0.2)";
                text.style.color = "rgb(185, 185, 185)";
                dot.style.backgroundColor = "rgb(185, 185, 185)";
            }
        }

        const imgContainer = document.querySelector(".animated_circle");
        const imgFront = imgContainer?.childNodes[indexRef.current] as HTMLElement;
        const imgBack = imgContainer?.childNodes[index] as HTMLElement;
        const animationIndex = parseInt((Math.random() * 10).toString()) % 4;
        imgFront!.style.animation = `clear${animations[animationIndex]} 0.6s linear forwards`
        imgBack!.style.animation = `show${animations[animationIndex]} 0.6s linear 0.2s forwards`

        document.getElementById("champion_name")!.innerText = champions[index].name;
        document.getElementById("champion_calling")!.innerText = champions[index].calling;

        const introFront = (document.getElementById("class_intro_video_front") as HTMLVideoElement);
        const introBack = (document.getElementById("class_intro_video_back") as HTMLVideoElement);
        introBack.src = `/video/league/Class_Intro_Video_${index + 1}.webm`;
        introBack.currentTime = introFront.currentTime;
        introFront.style.opacity = "0";
        setTimeout(() => {
            introBack.id = "class_intro_video_front";
            introFront.id = "class_intro_video_back";
            introFront.style.opacity = "1";
        }, 200)

        setIndex(index)
    }

    return (
        <div className="content_champion">
            <LeftHeading style={{ top: "25%" }}>CHAMPIONS</LeftHeading>
            <HeadingGroup
                containerStyle={{ position: "absolute", top: "100px" }}
                firstHeadingText='CHOOSE YOUR'
                secondHeadingText='CHAMPIONS'
                thirdHeadingText={"Whether you like to dive straight into the fray, support your teammates, or \n something in between, there's a spot for you on the Rift."}
            />
            <div className="button_group">
                <SmallButton style={{ backgroundColor: 'rgb(238, 175, 15)' }}>DISCOVER MORE CHAMPIONS</SmallButton>
                <SmallButton>PLAY NOW</SmallButton>
            </div>
            <div className="champion_roles_small">
                <ul>
                    {
                        roles.map((role, index) => (
                            <li style={index === roleIndex ? { color: "black" } : { color: "rgb(204, 204, 204,0.8)" }} onClick={onRoleClicked(index)}>{role}</li>
                        ))
                    }
                </ul>
            </div>
            <div className="champion_preview">
                <div className="champion_roles">
                    <span className="line">
                        <div className="role_icons">
                            {
                                roles.map((role, index) => (
                                    <div key={role} className="role" onClick={onRoleClicked(index)}>
                                        <div className="role_icon"></div>
                                        <p>{role}</p>
                                        <span className="gray_dot"></span>
                                        <span className={`yellow_line ${index === roleIndex ? "add_height" : ""}`}></span>
                                    </div>
                                ))
                            }
                            <div id="yellow_ring">
                                <div id="inner_yellow_ring"></div>
                            </div>
                            <span id="yellow_dot"></span>
                        </div>
                        <div className="champion_preview_video">
                            <span></span>
                            <video id='class_intro_video_front' src="/video/league/Class_Intro_Video_1.webm" autoPlay muted loop></video>
                            <video id='class_intro_video_back' src="/video/league/Class_Intro_Video_2.webm" autoPlay muted loop></video>
                        </div>
                    </span>
                </div>
                <div className="animated_circle">
                    {
                        champions.map((champion, index) => (
                            <img src={`/image/league/Champion_${champion.name}.png`} alt="" />
                        ))
                    }
                    <p id='champion_name'>AKALI</p>
                    <p id='champion_calling'>The Rogue Assassin</p>
                </div>
            </div>
        </div>
    )
}

export default ChampionRolePreview