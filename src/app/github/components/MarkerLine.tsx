import React, { useEffect, useMemo, useRef } from 'react';
import styles from '../css/marker_line.module.css'

type MarkerLineProps = {
    show?: boolean,
    lineGradient: string,
    lineHeight: number,
    threshold?: number,
    onIntersectionChanged?: (show: boolean) => void
}

const MarkerLine = ({ show = true, lineGradient, lineHeight, threshold = 1, onIntersectionChanged = () => {} }: MarkerLineProps) => {
    const showClass = useMemo(() => show ? " " + styles.show_line : "", [show])
    const lineRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        let subscribe: IntersectionObserver | null;
        if(lineRef.current){
            subscribe = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if(entry.isIntersecting && entry.intersectionRatio >= threshold){
                        onIntersectionChanged(true)
                    }
                    if(!entry.isIntersecting && entry.intersectionRatio === 0){
                        onIntersectionChanged(false)
                    }
                })
            }, { threshold: [0, threshold] })
            subscribe.observe(lineRef.current)
        }
        return () => {
            if(subscribe) subscribe.disconnect()
        }
    }, [lineRef])
    
    return (
        <div ref={lineRef} style={{ height: `${lineHeight}px` }} className={styles.marker_line}>
            <div className={lineGradient + " " + styles.line + showClass}></div>
        </div>
    );
};

export default MarkerLine;