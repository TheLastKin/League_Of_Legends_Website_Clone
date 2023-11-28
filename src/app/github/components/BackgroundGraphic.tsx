import React from 'react';

type BackgroundGraphicProps = {
    show?: boolean,
    children: any,
    className?: string
}

const BackgroundGraphic = ({ show, children, className }: BackgroundGraphicProps) => {
    return (
        <div style={{ opacity: show ? 1 : 0 }} className={"background_graphic " + className}>
            {children}
        </div>
    );
};

export default BackgroundGraphic;