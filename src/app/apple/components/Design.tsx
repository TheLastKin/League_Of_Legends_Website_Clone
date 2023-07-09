'use client'

import React, { useState } from 'react';
import '../css/design.css'
import Headings from './Headings';
import Paragraph from './Paragraph';

const colors = ["midnight", "silver", "spacegray", "starlight"]
const colorsVN = ["Đêm Xanh Thảm", "Bạc", "Xám Không Gian", "Ánh Sao"]

const Design = () => {
    const [schemeIndex, setSchemeIndex] = useState(0);

    return (
        <div className='design'>
            <Headings>
                <h4>Thiết kế</h4>
                <h1>
                    Lựa chọn của bạn. <br />
                    Air của bạn.
                </h1>
            </Headings>
            <div className='design_video'>
                <video src="/video/apple/design.mp4" muted></video>
            </div>
            <Paragraph>
                MacBook Air là <strong>của bạn hoàn toàn</strong> — chọn kích cỡ, chọn màu, thế là xong.
                Phiên bản nào bạn chọn cũng được <strong>thiết kế thân thiện với môi trường</strong>, có vỏ máy bằng nhôm tái chế 100%.
                Và <strong>thiết kế không quạt</strong> đồng nghĩa với việc máy luôn chạy êm ái ngay cả khi xử lý khối lượng công việc khủng.
            </Paragraph>
            <div className="design_video">
                <video src="/video/apple/design_2.mp4" muted></video>
            </div>
            <Paragraph>
                <strong>Hai kích cỡ hoàn hảo. </strong>
                Dù bạn chọn 13 inch hay 15 inch, cả hai phiên bản đều siêu nhẹ và mỏng chỉ 0,5 inch, cho nên bạn có thể đem theo bất cứ đâu.
            </Paragraph>
            <div className="design_scheme">
                <div className="scheme_left">
                    <div className="scheme_top_left">
                        <img src={`/image/apple/design_side_${colors[schemeIndex]}.jpg`} alt="" />
                    </div>
                    <div className="scheme_bottom_left">
                        <img src={`/image/apple/design_magsafe_${colors[schemeIndex]}.jpg`} alt="" />
                    </div>
                </div>
                <div className="scheme_right">
                    <img src={`/image/apple/design_top_${colors[schemeIndex]}.jpg`} alt="" />
                    <div className="scheme_choices">
                        {
                            colors.map((color, index) => (
                                <div style={{ outline: schemeIndex === index ? "2px solid #0071e3" : "none", outlineOffset: "3px" }} className={`scheme_color ${color}`} onClick={() => setSchemeIndex(index)}>
                                    <span style={{ display: schemeIndex === index ? "block" : "none" }}>{colorsVN[index]}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <Paragraph>
                <strong>Bốn màu tuyệt đẹp. </strong> Màu nào cũng đẹp không thể tả và đều đi kèm cáp sạc MagSafe phù hợp.
            </Paragraph>
        </div>
    );
};

export default Design;