'use client'

import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import '../css/articles.css'
import { useEffect } from 'react';
import LeftHeading from './LeftHeading';

let isDown = false;
let startX: number;
let scrollLeft: number;

const Articles = () => {

    useEffect(() => {
        const slider = document.querySelector('section');
        slider!.addEventListener('mousedown', (e) => {
            isDown = true;
            slider!.classList.add('active');
            startX = e.pageX - slider!.offsetLeft;
            scrollLeft = slider!.scrollLeft;
          });
          slider!.addEventListener('mouseleave', () => {
            isDown = false;
            slider!.classList.remove('active');
          });
          slider!.addEventListener('mouseup', () => {
            isDown = false;
            slider!.classList.remove('active');
          });
          slider!.addEventListener('mousemove', (e) => {
            if(!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider!.offsetLeft;
            const walk = (x - startX) * 1; //scroll-fast
            slider!.scrollLeft = scrollLeft - walk;
            console.log(walk);
          });
    }, [])

    return (
        <div className="articles">
            <LeftHeading containerStyle={{ display: "flex" }}>FEATURED NEWS</LeftHeading>
            <section>
                <article className="article_box_1">
                    <div className="article_outline_container">
                        <div className="article_outline"></div>
                    </div>
                    <img src="/image/league/Article_Image_1.jpg" alt=""></img>
                    <p>GAME UPDATES</p>
                    <a href="" className="article_title">Support Esports teams with Conqueror Nautilus!</a>
                    <p>Conqueror Nautilus is hitting the rift</p>
                </article>
                <article className="article_box_2">
                    <div className="article_outline_container">
                        <div className="article_outline"></div>
                    </div>
                    <img src="/image/league/Article_Image_2.jpg" alt=""></img>
                    <p>MEDIA</p>
                    <a href="" className="article_title">The Path, An Ionian Myth</a>
                    <p>Every myth carries a seed of truth. A slain swordman must decide if he</p>
                </article>
                <article className="article_box_3">
                    <div className="article_outline_container">
                        <div className="article_outline"></div>
                    </div>
                    <img src="/image/league/Article_Image_3.jpg" alt=""></img>
                    <p>DEV</p>
                    <a href="" className="article_title">Quick Gameplay Thoughts: July 10!</a>
                    <p>Disruptive Behavior Reduction, Any-</p>
                </article>
            </section>
            <a href="" className="view_all">VIEW ALL <HiOutlineArrowNarrowRight className='arrow_right' /></a>
        </div>
    );
};

export default Articles;