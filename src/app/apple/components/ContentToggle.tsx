'use client'

import React, { useState } from 'react';
import { IoAddOutline } from 'react-icons/io5';

type ContentToggleProps = {
    children: any,
    className?: string
}

const ContentToggle = ({ children, className = "" }: ContentToggleProps) => {
    const [showHidden, setShowHidden] = useState(false)
    const [isAnimating, setAnimate] = useState(false)

    const onToggleContent = (e: React.MouseEvent) => {
        if(isAnimating) return;

        setAnimate(true)
        const container = (e.target as HTMLElement).parentElement;
        const contentFront = container?.childNodes[0] as HTMLElement;
        const contentBack = container?.childNodes[1] as HTMLElement;
        const elementBack = contentBack.childNodes[0] as HTMLElement;
        if(!showHidden){
            (e.target as HTMLElement).style.rotate = "45deg"
            contentFront.ontransitionend = () => {
                elementBack.style.opacity = "1"
                elementBack.style.bottom = "0"
                setAnimate(false)
                contentFront.ontransitionend = null
            }
            contentFront.style.opacity = "0"
            contentBack.style.display = "flex"
        }else{
            (e.target as HTMLElement).style.rotate = "0deg"
            elementBack.ontransitionend = () => {
                contentBack.style.display = "none"
                contentFront.style.opacity = "1"
                setAnimate(false)
                elementBack.ontransitionend = null
            }
            elementBack.style.opacity = "0"
            elementBack.style.bottom = "10px"
        }
        setShowHidden(!showHidden)
    }

    return (
        <div className={`content_toggle ${className}`}>
            {children}
            <div className="toggle_content_button" onClick={onToggleContent}>
                <IoAddOutline/>
            </div>
        </div>
    );
};

export default ContentToggle;