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
                <p style={{ ...firstHeadingStyle, color: textColor }}>{firstHeadingText}</p>
                <p style={{ ...secondHeadingStyle, color: textColor }}>{secondHeadingText}</p>
            </div>
            {thirdHeadingText && <p style={{ ...thirdHeadingStyle, color: textColor }}>{thirdHeadingText}</p>}
        </div>
    );
};

export default HeadingGroup;