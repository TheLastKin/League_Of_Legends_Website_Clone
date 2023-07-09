'use client';

import { useEffect, useRef, useState } from 'react';
import '../css/content_champion_skin.css'
import SmallButton from './SmallButton';
import HeadingGroup from './HeadingGroup';
import LeftHeading from './LeftHeading';

let skinIndex = 2;
let velX = 0;
let velY = 0;

const ChampionSkin = () => {

    useEffect(() => {
        const box = (document.getElementsByClassName("skin_box")[0] as HTMLElement);
        box.onanimationiteration = changeSkin
        spawnMulti()
    }, [])

    const changeSkin = () => {
        const imgFront = (document.getElementById("skin_image_front") as HTMLImageElement);
        const imgBack = document.getElementById("skin_image_back");
        imgFront!.style.animation = "clearSkin 0.5s linear forwards";
        imgBack!.style.animation = "showSkin 0.5s linear forwards";
        setTimeout(() => {
            imgFront!.style.zIndex = "1";
            imgBack!.style.zIndex = "2";
            imgFront!.style.animation = "";
            imgBack!.style.animation = "";
            imgFront!.id = "skin_image_back";
            imgBack!.id = "skin_image_front";
            skinIndex = skinIndex === 3 ? 1 : skinIndex + 1
            imgFront!.src = `/image/league/Skinned_Akali_${skinIndex}.png`
        }, 500)
    }

    const trackPointer = (e: React.MouseEvent) => {
        const bg1 = (document.querySelector(".forest_background_1") as HTMLElement);
        const bg2 = (document.querySelector(".forest_background_2") as HTMLElement);
        const text = (document.querySelector(".champion_skin_description") as HTMLElement);
        const box = (document.querySelector(".skin_box") as HTMLElement);
        velX = (e.pageX / window.innerWidth);
        velY = (e.clientY / 1200);
        bg1!.style.translate = `-${3*velX}px ${2*velY}px`
        bg2!.style.translate = `${7*velX}px ${5*velY}px`
        text!.style.translate = `-${15*velX}px ${3*velY}px`
        box!.style.translate = `${3*velX}px 0px`
    }

    const spawnParticle = () => {
        const particle = document.createElement("div");
        const sideLength = ((Math.random() * 10) % 3) + 3;
        const posX = ((Math.random() * 100) % 91) + 5;
        particle.style.width = `${sideLength}px`;
        particle.style.height = `${sideLength}px`;
        particle.style.borderRadius = "50%";
        particle.style.position = "absolute";
        particle.style.bottom = "0";
        particle.style.left = `${posX}%`;
        particle.style.translate = "25px 0"
        particle.style.backgroundColor = "rgba(233, 142, 100, 0.9)";
        particle.style.transition = "opacity 0.2s ease, bottom 1.5s ease-out, translate 0.5s ease-out";
        particle.ontransitionend = (e) => {
            if(e.propertyName === "opacity"){
                document.querySelector(".content_skin")?.removeChild(particle)
            }
        }
        document.querySelector(".content_skin")?.appendChild(particle);
        setTimeout(() => {
            particle.style.bottom = `${((Math.random() * 100) % 6) + 95}%`;
        }, 10)
        setTimeout(() => {
            particle.style.translate = `${velX*50}px 0`
        }, 1000)
        setTimeout(() => {
            particle.style.opacity = "0"
        }, 1310)
    }

    const spawnMulti = () => {
        const intervalTime = ((Math.random() * 1000) % 241) + 160;
        setInterval(spawnParticle, intervalTime)
    }

    return (
        <div onMouseMove={trackPointer} className="content_skin">
            <LeftHeading style={{ color: "white" }}>CHAMPION SKINS</LeftHeading>
            <img className='forest_background_1' src="/image/league/Forest_1.png" alt="" />
            <img className='forest_background_2' src="/image/league/Forest_2.png" alt="" />
            <div className="champion_skin">
                <div className="skin_box">
                </div>
                <img id='skin_image_front' src="/image/league/Skinned_Akali_3.png" alt=""></img>
                <img id='skin_image_back' src="/image/league/Skinned_Akali_2.png" alt=""></img>
            </div>
            <div className="champion_skin_description">
                <HeadingGroup
                    firstHeadingText='SLAY WITH'
                    secondHeadingText='STYLE'
                    firstHeadingStyle={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                    secondHeadingStyle={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                    thirdHeadingText={"Make it personal by changing the look of your favorite \n champions with skins."}
                    textColor='white'
                />
                <SmallButton style={{ position: "absolute", width: "180px", bottom: "90px" }}>PLAY NOW</SmallButton>
            </div>
        </div>
    );
};

export default ChampionSkin;   