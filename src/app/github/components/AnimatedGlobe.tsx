import React, { useEffect } from 'react';
import '../css/animated_globe.css';
import initScene from '../functions/globe';


const AnimatedGlobe = () => {

    useEffect(() => {
        const container = document.querySelector(".globe") as HTMLElement;
        const globeCanvas = initScene({ width: 900, height: 900 });
        if(container.childNodes.length === 0){
            container.appendChild(globeCanvas)
        }else{
            container.removeChild(container.childNodes[0]);
            container.appendChild(globeCanvas)
        }
    }, [])

    return (
        <div className="github_globe">
            <section>
                <div className="content_dflex globe">
                    
                </div>
            </section>
        </div>
    );
};

export default AnimatedGlobe;