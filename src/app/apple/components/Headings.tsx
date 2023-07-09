import React from 'react';

type HeadingsProps = {
    className?: string,
    children: any
}

const Headings = ({ className = "", children }: HeadingsProps) => {
    return (
        <div className={`headings ${className}`}>
            {children}
        </div>
    );
};

export default Headings;