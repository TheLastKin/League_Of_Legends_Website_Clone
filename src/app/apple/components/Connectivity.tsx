import React from 'react';
import '../css/connectivity.css'
import Headings from './Headings';
import Paragraph from './Paragraph';

const Connectivity = () => {
    return (
        <div className='connectivity'>
            <Headings>
                <h4>
                    Kết nối
                </h4>
                <h1>
                    Kết nối tối ưu.
                </h1>
            </Headings>
            <div className="connectivity_detail">
                <div className="magsafe">
                    <span>MagSafe</span>
                    <span></span>
                </div>
                <div className="thunderbolt">
                    <span>Hai cổng Thunderbolt</span>
                    <span></span>
                    <span></span>
                </div>
                <img src="/image/apple/connectivity_left.jpg" alt="" />
                <img src="/image/apple/connectivity_right.jpg" alt="" />
                <div className="headphone_jack">
                    <span>Jack cắm tai nghe</span>
                    <span></span>
                </div>
            </div>
            <Paragraph fontSize={17}>
                <strong>Cáp sạc MagSafe</strong> cắm vào và rút ra dễ dàng nhờ nam châm, phòng tránh các sự cố rơi vỡ. 
                Hai <strong>cổng Thunderbolt</strong> giúp bạn kết nối phụ kiện tốc độ cao và sạc máy Mac của mình. 
                Bạn cũng có thể kết nối tối đa một màn hình 6K. Và jack cắm tai nghe hỗ trợ các tai nghe trở kháng cao.
            </Paragraph>
        </div>
    );
};

export default Connectivity;