import React from 'react';
import "../css/magickeyboard.css"
import Headings from './Headings';
import ContentToggle from './ContentToggle';
import Paragraph from './Paragraph';

const MagicKeyboardAndTouchID = () => {
    return (
        <div className='magic_keyboard_and_touch_id'>
            <Headings>
                <h4>Magic keyboard với touch id</h4>
                <h1>Gõ theo cách của bạn.</h1>
            </Headings>
            <ContentToggle className='magic_keyboard'>
                <div className="magic_keyboard_front">
                    <img src="/image/apple/magic_keyboard.jpg" alt="" />
                    <img src="/image/apple/icon_touch_id.png" alt="" />
                    <span>Touch ID</span>
                </div>
                <div className="magic_keyboard_back">
                    <div>
                        <p className="touch_id_note">
                            <strong>Touch ID.</strong> Chỉ cần một thao tác chạm là bạn có thể mở khóa MacBook Air,
                            đăng nhập vào ứng dụng và trang web, cũng như làm nhiều việc khác một cách an toàn.
                            Touch ID cũng giúp bạn bớt được việc phải ghi nhớ mật khẩu.
                        </p>
                        <div className='touch_id_usages'>
                            <div>
                                <img src="/image/apple/icon_apple_pay.png" alt="" />
                                <p>Mở khóa máy Mac</p>
                            </div>
                            <div>
                                <img src="/image/apple/icon_passkeys.png" alt="" />
                                <p>Đăng nhập vào các ứng dụng và trang web với mã khóa</p>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentToggle>
            <Paragraph>
                <strong>Magic Keyboard có đèn nền,</strong> tĩnh lặng và thoải mái khi gõ, đi kèm với hàng phím chức năng có chiều cao tiêu chuẩn cùng <strong>Touch ID</strong>, 
                giúp bạn mở khóa máy Mac đồng thời đăng nhập vào các ứng dụng và trang web một cách <strong>nhanh, dễ dàng và an toàn.</strong> Chỉ cần chạm ngón tay là thực hiện tất cả.
            </Paragraph>
        </div>
    );
};

export default MagicKeyboardAndTouchID;