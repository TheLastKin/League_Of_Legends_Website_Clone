type LeftHeadingProps = {
    children: string,
    style?: React.CSSProperties,
    containerStyle?: React.CSSProperties
}

const LeftHeading = ({ children, style, containerStyle }: LeftHeadingProps) => {
    return (
        <div style={containerStyle} className="left_heading">
            <p style={style}>{children} ——</p>
        </div>
    );
};

export default LeftHeading;