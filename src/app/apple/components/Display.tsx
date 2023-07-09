import React from 'react';
import '../css/display.css'
import ContentToggle from './ContentToggle';
import Headings from './Headings';
import Paragraph from './Paragraph';

const Display = () => {
    return (
        <div className='display'>
            <Headings>
                <h4>
                    MÀN HÌNH, CAMERA VÀ ÂM THANH
                </h4>
                <h1>
                    Rõ là nét nhất.
                </h1>
            </Headings>
            <div className="display_video">
                <ContentToggle>
                    <div className="display_video_front">
                        <video src="/video/apple/display.mp4" muted></video>
                    </div>
                    <div className="display_video_back">
                        <div>
                            <div>
                                <img src="/image/apple/icon_brightness.png" alt="" />
                                <h2>
                                    Độ sáng 500 nit
                                </h2>
                                <p>Làm việc thoải mái trong mọi điều kiện ánh sáng.</p>
                            </div>
                            <div>
                                <img src="/image/apple/icon_color.png" alt="" />
                                <h2>Dải màu rộng P3</h2>
                                <p>Xem và chỉnh sửa ảnh và video với dải màu chính xác và sống động hơn.</p>
                            </div>
                            <div>
                                <img src="/image/apple/icon_true_tone.png" alt="" />
                                <h2>Công nghệ True Tone</h2>
                                <p>Công nghệ True Tone điều chỉnh độ ấm của màn hình cho phù hợp với ánh sáng môi trường, đem lại trải nghiệm xem tự nhiên hơn.</p>
                            </div>
                        </div>
                    </div>
                </ContentToggle>
            </div>
            <Paragraph>
                <strong>Màn hình Liquid Retina</strong> trên MacBook Air đẹp ấn tượng,
                với khả năng hỗ trợ <strong>1 tỷ màu</strong> và <strong>độ phân giải cao hơn đến 2x</strong> so với máy tính xách tay PC tương đương.
                Ảnh và video sống động với độ tương phản phong phú và chi tiết sắc nét, đồng thời văn bản hiển thị siêu nét giúp dễ đọc.
            </Paragraph>
            <div className="camera_and_sound">
                <div className="camera">
                    <ContentToggle>
                        <div className="camera_front">
                            <img src="/image/apple/display_camera.jpg" alt="" />
                            <img src="/image/apple/facetime.jpg" alt="" />
                        </div>
                        <div className="camera_back">
                            <div>
                                <img src="/image/apple/icon_mic.png" alt="" />
                                <p className="camera_note">
                                    Âm thanh to và rõ ràng trong các cuộc gọi dù bạn ở bất kỳ đâu nhờ <strong>bộ ba micrô phối hợp </strong>
                                    bắt âm thanh trong trẻo bằng thuật toán điều hướng chùm sóng tiên tiến.
                                </p>
                            </div>
                        </div>
                    </ContentToggle>
                    <Paragraph>
                        <strong>Camera độ nét cao. </strong>
                        Hình ảnh của bạn luôn đẹp nhất nhờ camera FaceTime HD 1080p,
                        dù bạn trò chuyện với bạn bè và gia đình hay đang cộng tác với đồng nghiệp trên khắp thế giới.
                    </Paragraph>
                </div>
                <div className="sound">
                    <ContentToggle>
                        <div className="sound_front">
                            <img src="/image/apple/display_sound.jpg" alt="" />
                        </div>
                        <div className="sound_back">
                            <div>
                                <img src="/image/apple/icon_sound.png" alt="" />
                                <p className="sound_note">
                                    <strong>MacBook Air 13 inch</strong> có <strong>hệ thống âm thanh bốn loa</strong>,
                                    kết hợp hai loa trầm với hai loa tần số cao để giải trí mọi lúc, mọi nơi.
                                </p>
                                <p className="sound_note">
                                    <strong>MacBook Air 15 inch</strong> có <strong>hệ thống âm thanh sáu loa</strong>,
                                    kết hợp hai cặp loa trầm khử lực với hai loa tần số cao để làm tăng gấp đôi độ sâu lắng của âm trầm.
                                </p>
                            </div>
                        </div>
                    </ContentToggle>
                    <Paragraph>
                        <strong>Hệ thống âm thanh sống động. </strong>
                        Các loa trên MacBook Air hỗ trợ chế độ Âm Thanh Không Gian cùng với Dolby Atmos,
                        vì vậy bạn có thể tận hưởng tầng âm ba chiều khi nghe nhạc và xem phim.
                    </Paragraph>
                </div>
            </div>
        </div>
    );
};

export default Display;