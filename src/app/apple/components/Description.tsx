import React from 'react';
import '../css/description.css'
import { BiPlayCircle, BiChevronRight } from 'react-icons/bi'

const Description = () => {
    return (
        <div className='description'>
            <h1>
                Lớn ấn tượng. <br />
                Mỏng không tưởng.
            </h1>
            <h2>
                <span>MacBook Air 15 inch mới </span>
                <span>
                    thêm không gian cho những điều bạn yêu với màn hình Liquid Retina rộng rãi.
                     Và với phiên bản 13 inch, bạn có thêm nhiều lý do để chọn Air.
                     Mạnh mẽ hơn với chip M2 và với thời lượng pin lên đến 18 giờ, cả hai phiên bản đều sở hữu hiệu năng nhanh như chớp trong một thiết kế siêu gọn nhẹ.
                </span>
            </h2>
            <div>
                <h3>MacBook Air 13 inch với chip M2 từ 27.999.000đ</h3>
                <span>Hiện đã có hàng</span>
            </div>
            <div>
                <h3>MacBook Air 15 inch <span>mới</span> với chip M2 từ 32.999.000đ</h3>
                <span>Theo dõi để biết khi có hàng</span>
            </div>
            <div>
                <a href="">Xem phim <BiPlayCircle/></a>
                <a href="">Xem sự kiện <BiChevronRight/></a>
            </div>
        </div>
    );
};

export default Description;