import React, { useMemo, useRef } from 'react';
import styles from '../css/animated_card.module.css'

type AnimatedCardProps = {
    children?: React.ReactNode,
    className?: string,
    glowGradient: string
}

const AnimatedCard = ({ children, className, glowGradient }: AnimatedCardProps) => {
    const content = useRef<HTMLDivElement | null>(null)
    const glow = useRef<HTMLDivElement | null>(null)
    const providedClass = useMemo(() => className ? className + " " : "", [])

    const onMouseEnter = () => {
        if(glow.current){
            glow.current.style.animation = "scaleFadeIn 0.8s ease-out forwards"
        }
        // if(content.current){
        //     content.current.style.transition = "transform 0.1s linear"
        // }
    }

    const onMouseMove = (e: React.MouseEvent) => {
        if(glow.current && content.current){
            let bounds = content.current.getBoundingClientRect()
            let relativeX = e.nativeEvent.clientX - bounds.left
            let relativeY = e.nativeEvent.clientY - bounds.top
            let centerP = glow.current.clientWidth/2;
            glow.current.style.left = `${Math.min(Math.max(relativeX - centerP, -centerP + 40), bounds.width - centerP - 40)}px`
            glow.current.style.top = `${Math.min(Math.max(relativeY - centerP - 50, -centerP + 40), bounds.height - centerP - 40)}px`

            let anchorX = bounds.width/2
            let anchorY = bounds.height/2
            let liftX = -2 * ((anchorY - relativeY)/anchorY)
            let liftY = 1 * ((anchorX - relativeX)/anchorX)
            content.current.style.transform = `rotateX(${liftX}deg) rotateY(${liftY}deg)`
        }
    }

    const onMouseLeave = () => {
        if(glow.current){
            glow.current.style.animation = "scaleFadeOut 0.4s ease-out forwards"
        }
        if(content.current){
            content.current.style.transition = "transform 0.15s linear"
            content.current.style.transform = "rotateX(0deg) rotateY(0deg)"
        }
    }

    const onTransitionEnd = () => {
        if(content.current){
            content.current.style.transition = ""
        }
    }

    return (
        <div className={styles.animated_card} onMouseEnter={onMouseEnter} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
            <div ref={content} className={providedClass + styles.card_content} onTransitionEnd={onTransitionEnd}>
                {children}
                <div ref={glow} className={glowGradient + " " + styles.glow}></div>
            </div>
        </div>
    );
};

export default AnimatedCard;