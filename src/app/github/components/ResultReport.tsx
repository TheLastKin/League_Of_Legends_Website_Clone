import React, { useMemo } from 'react';
import styles from '../css/result_report.module.css'
import AnimatedLink from './AnimatedLink';

type ResultReportProps = {
    className?: string,
    color: string,
    heading?: string,
    content?: string,
    toLink?: string
}

const ResultReport = ({ className, color, heading, content, toLink }: ResultReportProps) => {
    const providedClass = useMemo(() => className ? className + " " : "", [])
    return (
        <div className={providedClass + styles.result_report}>
            <div style={{ borderColor: color, color: color }}>Did you know?</div>
            <h1 style={{ color: color }}>{heading}</h1>
            <p>{content}</p>
            {toLink && <AnimatedLink>{toLink}</AnimatedLink>}
        </div>
    );
};

export default ResultReport;