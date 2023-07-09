'use client'

import React, { useState } from 'react'
import '../css/other_content.css'
import { BiChevronRight } from 'react-icons/bi'

const colors = ["midnight", "silver", "spacegray", "starlight"]
const colorsVN = ["Đêm Xanh Thảm", "Bạc", "Xám Không Gian", "Ánh Sao"]

const OtherContent = () => {
    const [schemeIndex, setSchemeIndex] = useState(0)

    return (
        <div className='other_content'>
            <div className="ar">
                <div className="ar_left">
                    <img src="/image/apple/ar_icon.png" alt="" />
                    <h1>
                        Dùng AR để ngắm MacBook Air
                        trong không gian
                        làm việc của bạn.
                    </h1>
                    <p>Mở trang này bằng Safari trên iPhone hoặc iPad của bạn.</p>
                    <div className="ar_options">
                        {
                            colors.map((color, index) => (
                                <div style={{ outline: schemeIndex === index ? "2px solid #0071e3" : "none", outlineOffset: "3px" }} className={`scheme_color ${color}`} onClick={() => setSchemeIndex(index)}>
                                    <span style={{ display: schemeIndex === index ? "block" : "none" }}>{colorsVN[index]}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="ar_right">
                    <img src={`/image/apple/ar_phone_${colors[schemeIndex]}.jpg`} alt="" />
                </div>
            </div>
            <div className="accessory_and_design_focus">
                <div className="accessory">
                    <h2>Phụ Kiện</h2>
                    <h1>Khám phá thế giới phụ kiện Mac.</h1>
                    <a href="">Mua</a>
                    <img src="/image/apple/accessories.jpg" alt="" />
                </div>
                <div className="design_focus">
                    <img src="/image/apple/icon_environment.png" alt="" />
                    <h1>Được thiết kế thân thiện với <span>môi trường.</span></h1>
                    <p>Vật liệu tái chế. Chuỗi cung ứng thân thiện hơn với môi trường. Đóng gói có trách nhiệm. MacBook Air được thiết kế thân thiện với môi trường, và gọn nhẹ trong tay bạn.</p>
                    <a className="redirect" href="">Tìm hiểu thêm về Apple và Môi Trường <BiChevronRight /></a>
                </div>
            </div>
            <div className="compare_mac">
                <h1>Máy tính xách tay nào phù hợp với bạn?</h1>
                <a className="redirect" href="">So sánh với tất cả phiên bản Mac <BiChevronRight /></a>
                <div className='other_macs'>
                    <div className="m1_air_13_inch">
                        <img src="/image/apple/compare_mba_m1.png" alt="" />
                        <img src="/image/apple/compare_3_swatches.png" alt="" />
                        <p></p>
                        <div>
                            <h2>MacBook Air 13”</h2>
                            <p>Chip M1</p>
                        </div>
                        <p>Từ 24.999.000đ</p>
                        <p>Màn hình Retina 13,3 inch</p>
                        <p>Chip Apple M1</p>
                        <p>Bộ nhớ thống nhất 8GB hoặc 16GB</p>
                        <p>Ổ lưu trữ 256GB đến 2TB</p>
                        <p>Thời lượng pin lên đến 18 giờ</p>
                        <p>Touch ID</p>
                        <a href="">Mua</a>
                        <a className="redirect" href="">Tìm hiểu thêm <BiChevronRight /></a>
                    </div>
                    <div className="m1_air_13_inch">
                        <img src="/image/apple/compare_mba_13_15.png" alt="" />
                        <img src="/image/apple/compare_4_swatches.png" alt="" />
                        <p>Phiên bản 15” mới</p>
                        <div>
                            <h2>MacBook Air 13” và 15”</h2>
                            <p>Chip M2</p>
                        </div>
                        <p>Từ 27.999.000đ</p>
                        <p>Màn hình Retina 13,6 inch hoặc 15,3 inch</p>
                        <p>Chip Apple M2</p>
                        <p>Bộ nhớ thống nhất 8GB hoặc 24GB</p>
                        <p>Ổ lưu trữ 256GB đến 2TB</p>
                        <p>Thời lượng pin lên đến 18 giờ</p>
                        <p>Touch ID</p>
                        <a href="">Mua sắm</a>
                    </div>
                    <div className="m1_air_13_inch">
                        <img src="/image/apple/compare_mba_m1.png" alt="" />
                        <img src="/image/apple/compare_2_swatches.png" alt="" />
                        <p></p>
                        <div>
                            <h2>MacBook Pro 13”</h2>
                            <p>Chip M2</p>
                        </div>
                        <p>Từ 31.499.000đ</p>
                        <p>Màn hình Retina 13,3 inch</p>
                        <p>Chip Apple M2</p>
                        <p>Bộ nhớ thống nhất 8GB hoặc 24GB</p>
                        <p>Ổ lưu trữ 256GB đến 2TB</p>
                        <p>Thời lượng pin lên đến 20 giờ</p>
                        <p>Touch Bar và Touch ID</p>
                        <a href="">Mua</a>
                        <a className="redirect" href="">Tìm hiểu thêm <BiChevronRight /></a>
                    </div>
                    <div className="m1_air_13_inch">
                        <img src="/image/apple/compare_mba_m1.png" alt="" />
                        <img src="/image/apple/compare_2_swatches.png" alt="" />
                        <p></p>
                        <div>
                            <h2>MacBook Air 14” và 16”</h2>
                            <p>Chip M2 Pro hoặc M2 Max</p>
                        </div>
                        <p>Từ 48.999.000đ</p>
                        <p>Màn hình Liquid Retina XDR 14,2 inch hoặc 16,2 inch</p>
                        <p>Chip Apple M2 Pro hoặc Apple M2 Max</p>
                        <p>Bộ nhớ thống nhất 16GB hoặc 96GB</p>
                        <p>Ổ lưu trữ 512GB đến 8TB</p>
                        <p>Thời lượng pin lên đến 22 giờ</p>
                        <p>Touch ID</p>
                        <a href="">Mua</a>
                        <a className="redirect" href="">Tìm hiểu thêm <BiChevronRight /></a>
                    </div>
                </div>
            </div>
            <div className="trade_in">
                <div className="trade_in_left">
                    <h2>Apple Trade In</h2>
                    <h1>Nhận điểm tín dụng để mua MacBook Air mới.</h1>
                    <p>Chỉ cần đổi máy tính đủ điều kiện của bạn để lấy điểm tín dụng mua máy mới hoặc tái chế thiết bị đó miễn phí. Tốt cho cả bạn và môi trường.</p>
                    <a className="redirect" href="">Tìm hiểu thêm <BiChevronRight /></a>
                </div>
                <div className="trade_in_right">
                    <img src="/image/apple/trade_in_full_width.jpg" alt="" />
                </div>
            </div>
            <div className="business_and_education">
                <div className="business">
                    <div>
                        <h1>Apple at Work</h1>
                        <p>Sức mạnh đưa doanh nghiệp của bạn lên tầm cao mới.</p>
                        <a className="redirect" href="">Tìm hiểu về Apple at Work <BiChevronRight /></a>
                        <a className="redirect" href="">Tìm hiểu thêm về Mac cho doanh nghiệp <BiChevronRight /></a>
                    </div>
                </div>
                <div className="education">
                    <div>
                        <h1>Apple Và Giáo Dục</h1>
                        <p>Tạo động lực cho các nhà giáo dục và sinh viên đưa thế giới vươn xa.</p>
                        <a className="redirect" href="">Tìm hiểu thêm về Apple và Giáo Dục <BiChevronRight /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OtherContent;