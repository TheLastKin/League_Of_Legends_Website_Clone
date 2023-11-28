import React, { useMemo } from 'react';
import styles from '../css/animated_link.module.css'

type AnimatedLinkProps = {
    children: string,
    className?: string
}

const AnimatedLink = ({ children, className }: AnimatedLinkProps) => {
    const providedClass = useMemo(() => {
        return className ? className + " " : ""
    }, [className])

    return (
        <div className={providedClass + styles.animated_link}>
            <span className={styles.link}>{children}</span>
            <div className={styles.chevron}>
                <div className={styles.chevron_line}></div>
                <div className={styles.chevron_arrow}></div>
            </div>
            <div className={styles.underline}></div>
        </div>
    );
};

export default AnimatedLink;