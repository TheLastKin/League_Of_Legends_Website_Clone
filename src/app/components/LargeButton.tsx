'use client';

import { CSSProperties } from 'react';
import '../css/buttons.css'

type LargeButtonProps = {
    containerStyle?: CSSProperties,
    children?: string,
    backgroundColor?: string,
    textColor?: string,
}

const LargeButton = ({ containerStyle, children, backgroundColor, textColor }: LargeButtonProps) => {
    return (
        <div style={containerStyle} className="large_button">
            <div className="large_button_bg" style={{ backgroundColor }}></div>
            <div className="outer">
                <div className="inner"></div>
            </div>
            <a href="" style={{ color: textColor }}>{children}</a>
        </div>
    );
};

export default LargeButton;