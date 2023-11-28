'use client'
import React, { useMemo } from 'react';
import styles from '../css/marker_checkpoint.module.css'

type MarkerCheckpointProps = {
    children: any,
    marginVertical?: number,
    glowGradient?: string,
    show?: boolean
}

const MarkerCheckpoint = ({ children, show = true, marginVertical = 20, glowGradient }: MarkerCheckpointProps) => {
    const showClass = useMemo(() => show ? " " + styles.show_checkpoint : "", [show])

    return (
        <div style={{ margin: `${marginVertical}px 0` }} className={styles.checkpoint + showClass}>
            {children}
            {glowGradient && <div className={glowGradient + " " + styles.glow}></div>}
        </div>
    );
};

export default MarkerCheckpoint;