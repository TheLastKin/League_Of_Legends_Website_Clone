'use client'

import { CSSProperties } from 'react';
import '../css/buttons.css'

type SmallButtonProps = {
    children?: string,
    style?: CSSProperties,
    href?: string
}

const SmallButton = ({ children, style, href }: SmallButtonProps) => {
    return (
        <a className="small_button" style={style} href={href}>{children}</a>
    );
};

export default SmallButton;