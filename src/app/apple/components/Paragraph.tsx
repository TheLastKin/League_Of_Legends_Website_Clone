import React from 'react';

type ParagraphProps = {
    children: any,
    className?: React.CSSProperties,
    fontSize?: number
}

const Paragraph = ({ children, className, fontSize }: ParagraphProps) => {
    
    return (
        <p style={fontSize ? { fontSize: `${fontSize}px` } : undefined} className={`paragraph ${className}`}>
            {children}
        </p>
    );
};

export default Paragraph;