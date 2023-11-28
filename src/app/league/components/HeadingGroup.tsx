import React, { CSSProperties } from 'react';

import '../css/headings.css'

type HeadingGroupProps = {
    containerStyle?: CSSProperties,
    firstHeadingStyle?: CSSProperties,
    secondHeadingStyle?: CSSProperties,
    thirdHeadingStyle?: CSSProperties,
    firstHeadingText: string,
    secondHeadingText: string,
    thirdHeadingText?: string,
    textColor?: string
}

const HeadingGroup = ({ containerStyle, firstHeadingText, secondHeadingText, thirdHeadingText, firstHeadingStyle, secondHeadingStyle, thirdHeadingStyle, textColor }: HeadingGroupProps) => {
    return (
        <div style={containerStyle} className="heading_group">
            <div>
                <div style={{ ...firstHeadingStyle, color: textColor }}>{firstHeadingText}</div>
                <div style={{ ...secondHeadingStyle, color: textColor }}>{secondHeadingText}</div>
            </div>
            {thirdHeadingText && <div style={{ ...thirdHeadingStyle, color: textColor }}>{thirdHeadingText}</div>}
        </div>
    );
};

export default HeadingGroup;