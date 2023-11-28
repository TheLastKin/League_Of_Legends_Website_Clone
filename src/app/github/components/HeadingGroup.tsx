import React, { useMemo } from 'react';
import styles from '../css/heading_group.module.css'

type HeadingGroupProps = {
    headings: string[],
    highlightedTextColor: string,
    marginTop?: number,
    maxWidth?: number,
    show: boolean
}

const HeadingGroup = ({ headings, show, highlightedTextColor, marginTop = 0, maxWidth = 600 }: HeadingGroupProps) => {
    const showClass = useMemo(() => show ? " " + styles.show_heading : "", [show])
    return (
        <div style={{ marginTop: `${marginTop}px`, maxWidth: `${maxWidth}px` }} className={styles.heading_group}>
            <h2 className={styles.first_heading + showClass}>{headings[0]}</h2>
            <h1 style={{ color: highlightedTextColor }} className={styles.second_heading + showClass}>{headings[1]}</h1>
            <h1 className={styles.third_heading + showClass}>{headings[2]}</h1>
        </div>
    );
};

export default HeadingGroup;