import React from 'react';
import styles from '../css/paragraph.module.css'

type ParagraphProps = {
    children: any,
    style?: React.CSSProperties
}

const Paragraph = ({ children, style }: ParagraphProps) => {
    return (
        <div style={style} className={styles.text}>
            {children}
        </div>
    );
};

export default Paragraph;