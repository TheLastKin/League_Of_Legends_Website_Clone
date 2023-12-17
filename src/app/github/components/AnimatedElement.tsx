'use client'
import React, { useEffect, useRef } from 'react';

type AnimatedElementProps = {
    children?: any,
    /** The threshold that triggers the animation when the element is intersecting in the viewport */
    threshold?: number,
    className?: string,
    animatedClassName: string,
    onAnimate?: (show: boolean) => void,
    playAnimation?: boolean,
    rootMargin?: string,
    style?: React.CSSProperties
}

const AnimatedElement = ({ children, threshold, className, animatedClassName, playAnimation, onAnimate, rootMargin = "0px", style }: AnimatedElementProps) => {
    const containerRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if(typeof(playAnimation) === "boolean" && containerRef.current){
            if(playAnimation) containerRef.current.classList.add(animatedClassName)
            if(!playAnimation) containerRef.current.classList.remove(animatedClassName)
        }
    }, [playAnimation])

    useEffect(() => {
        let subscribe: IntersectionObserver | null;
        if(containerRef.current && threshold){
            subscribe = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if(entry.isIntersecting && entry.intersectionRatio >= threshold){
                        if(onAnimate !== undefined){
                            onAnimate(true)
                        }else{
                            entry.target.classList.add(animatedClassName)
                        }
                    }
                    if(!entry.isIntersecting && entry.intersectionRatio === 0){
                        if(onAnimate !== undefined){
                            onAnimate(false)
                        }else{
                            entry.target.classList.remove(animatedClassName)
                        }
                    }
                })
            }, { threshold: [0, threshold], root: document.querySelector(".wrapper"), rootMargin: rootMargin })
            subscribe.observe(containerRef.current)
        }
        return () => {
            if(subscribe) subscribe.disconnect()
        }
    }, [containerRef, threshold])

    return (
        <div ref={containerRef} style={style} className={className}>
            {children}
        </div>
    );
};

export default AnimatedElement;