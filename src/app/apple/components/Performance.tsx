import React from 'react';
import '../css/performance.css';
import { IoMdAddCircleOutline } from 'react-icons/io';
import ContentToggle from './ContentToggle';
import Headings from './Headings';


const Performance = () => {
    return (
        <div className='performance'>
            <Headings>
                <h4>Hiệu năng</h4>
                <h1>
                    <i>Cả</i> tốc độ <i>và</i> thời lượng pin đều đáng kinh ngạc? <span className='performance_emoji'></span>
                </h1>
            </Headings>
            <div className="performance_video">
                <video src="/video/apple/performance.mp4" muted></video>
            </div>
            <div className="m2_chip_spec">
                <img src="/image/apple/apple_m2.jpg" alt="" />
                <div className="divider"></div>
                <div>
                    <h1><span>Nhanh hơn MacBook Air (M1) đến</span> 1,4x</h1>
                    <h1><span>Nhanh hơn MacBook Air sử dụng chip Intel nhanh nhất đến</span>12x</h1>
                    <h1><span>Thời lượng pin lên đến</span>18 giờ</h1>
                </div>
            </div>
            <p className="performance_note">
                Chip M2 giúp bạn <strong>làm mọi việc nhanh hơn</strong>,
                dù là chỉnh sửa video để trình bày trong lớp học, cộng tác lập kế hoạch kinh doanh hay xem trực tuyến chương trình giải trí trong khi đang mua sắm trên mạng.
                Và với <strong>thời lượng pin dùng cả ngày</strong>, bạn có thể để bộ tiếp hợp nguồn ở nhà.
            </p>
            <p className="performance_note">
                <strong>So với máy tính xách tay</strong> sử dụng bộ xử lý Intel Core i7, MacBook Air sở hữu <strong>hiệu năng nhanh hơn đến 2x</strong>, <strong>duyệt web nhanh hơn đến 50%</strong>, và <strong>thời lượng pin lâu hơn đến 50%</strong>.
            </p>
            <div className="explore_m2">
                Khám phá M2 <IoMdAddCircleOutline />
            </div>
            
            <ContentToggle className='app_performance'>
                <div className='app_performance_front'>
                    <div className="mask_1"></div>
                    <div className="mask_2"></div>
                    <div className="mask_3"></div>
                    <div className="mask_4"></div>
                    <h1>
                        Tất cả ứng dụng bạn
                        quen dùng đều nhanh
                        như bay trên macOS.
                    </h1>
                </div>
                <div className='app_performance_back'>
                    <div>
                        <img src="/image/apple/icon_macos.png" alt="" />
                        <p className="app_performance_note">
                            <strong>Khả Năng Tương Thích.</strong> Với hàng nghìn ứng dụng được tối ưu hóa cho Apple silicon,
                            tất cả các ứng dụng yêu thích của bạn đều chạy nhanh như chớp trên macOS, bao gồm Microsoft Excel và PowerPoint,
                            Adobe Creative Cloud và Google Suite. Đồng thời, macOS sẽ thường xuyên được cập nhật phần mềm miễn phí để vẫn chạy trơn tru.
                        </p>
                    </div>
                </div>
            </ContentToggle>
        </div>
    );
};

export default Performance;