import '../css/banner.css'

const Banner = () => {

    return (
        <div className='banner'>
            <video src="/video/apple/Mac_15_inch.webm" className="banner_video" muted controls={false}></video>
            <h1 className="banner_heading">
                MacBook Air
            </h1>
            <div className="banner_text">Nay đã có cỡ 15"</div>
            {/* <div className="dot"></div> */}
        </div>
    );
};

export default Banner;