'use client'

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Banner from "./Banner";

const pages = 5

const ParallaxContainer = () => {

    return (
        <div className="parallax_container">
            <Parallax pages={pages} id='parallax'>
                <ParallaxLayer sticky={{ start: 0, end: 4 }}>
                    <Banner />
                </ParallaxLayer>
            </Parallax>
        </div>
    );
};

export default ParallaxContainer;