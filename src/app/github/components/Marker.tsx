import React from 'react';

type MarkerProps = {
    children: any,
    paddingTop?: number,
}

const Marker = ({ children, paddingTop = 0 }: MarkerProps) => {
    return (
        <div style={{ paddingTop: `${paddingTop}px` }} className='marker'>
            {children}
        </div>
    );
};

export default Marker;