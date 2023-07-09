'use client'

import React, { useEffect, useState, useMemo } from 'react';
import '../css/new_to_mac.css'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'


const NewToMac = () => {
    const [index, setIndex] = useState(0);
    const maxIndex = Math.ceil(5 - ((window.innerWidth * 0.75) / 290))

    useEffect(() => {
        window.addEventListener("resize", () => {
            const items = document.querySelectorAll(".slider_item");
            items.forEach(item => (item as HTMLElement).style.translate = "0 0")
            setIndex(0)
        })
    }, [])

    useEffect(() => {
        const items = document.querySelectorAll(".slider_item");
        items.forEach(item => (item as HTMLElement).style.translate = `${-290 * index}px 0`)
    }, [index])

    const moveItem = (direction: number) => () => {
        setIndex(Math.max(Math.min(index + direction, maxIndex), 0))
    }

    return (
        <div className='new_to_mac'>
            <div>
                <h1>
                    Mới dùng Mac?
                </h1>
                <div className='slider'>
                    <div className="slider_item">
                        <img src="/image/apple/new_mac_iphone.jpg" alt="" />
                        <p className="slider_text">
                            <strong>Mac + iPhone. </strong>
                            Học sử dụng Mac cũng dễ như iPhone. Cho dù bạn đang trò chuyện với bạn bè trong Tin Nhắn, chuyển tập tin bằng AirDrop,
                            hay định vị thiết bị bằng ứng dụng Tìm, hiệu quả sẽ tốt hơn nữa khi bạn sử dụng Mac cùng với iPhone.
                        </p>
                    </div>
                    <div className="slider_item">
                        <img src="/image/apple/new_icloud.jpg" alt="" />
                        <p className="slider_text">
                            <strong>iCloud. </strong>
                            Với iCloud, bạn có thể lưu tất cả ảnh, danh bạ và tài liệu của mình để truy cập trên mọi thiết bị bạn dùng.
                            Tạo danh sách việc cần làm trên iPhone rồi kiểm tra trên Mac và nhiều việc khác nữa.
                        </p>
                    </div>
                    <div className="slider_item">
                        <img src="/image/apple/new_migration.jpg" alt="" />
                        <p className="slider_text">
                            <strong>Trợ Lý Di Chuyển. </strong>
                            Dễ dàng di chuyển tập tin, ứng dụng và nhiều dữ liệu khác từ máy tính PC hoặc Mac cũ. Và nếu cần trợ giúp,
                            bạn luôn có thể liên lạc với bộ phận Hỗ Trợ của Apple qua điện thoại hay đặt hẹn gặp trực tiếp tại cửa hàng.
                        </p>
                    </div>
                    <div className="slider_item">
                        <img src="/image/apple/new_powerful_apps.jpg" alt="" />
                        <p className="slider_text">
                            <strong>Các ứng dụng mạnh mẽ được tích hợp sẵn. </strong>
                            Mac được cài sẵn các ứng dụng như FaceTime, Freeform, Ảnh và Keynote, giúp bạn sáng tạo và cộng tác trong ý tưởng lớn sắp tới.
                        </p>
                    </div>
                    <div className="slider_item">
                        <img src="/image/apple/new_mac_iphone.jpg" alt="" />
                        <p className="slider_text">
                            <strong>Đúng, Mac làm được đó. </strong>
                            Không chỉ MacBook Air. Mọi máy Mac đều có thiết kế dễ sử dụng, mạnh mẽ và ấn tượng.
                        </p>
                        <a href="">Tìm hiểu thêm <BiChevronRight /> </a>
                    </div>
                </div>
                <div className='slider_buttons'>
                    <BiChevronLeft style={{ opacity: index === 0 ? "0.3" : "1", cursor: index === 0 ? "default" : "pointer" }} onClick={moveItem(-1)} />
                    <BiChevronRight style={{ opacity: index === maxIndex ? "0.3" : "1", cursor: index === maxIndex ? "default" : "pointer" }} onClick={moveItem(1)} />
                </div>
            </div>
        </div>
    );
};

export default NewToMac;