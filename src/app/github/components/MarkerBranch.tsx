import React from 'react';

type MarkerBranchProps = {
    src: string,
    top?: number | string,
    bottom?: number | string,
    show?: boolean
}

const MarkerBranch = ({ src, top = "auto", bottom = "auto", show = true }: MarkerBranchProps) => {
    return <img className='branch' style={{ top: top, bottom: bottom, opacity: show ? 1 : 0 }} src={src} alt="" />
};

export default MarkerBranch;