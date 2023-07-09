import React from 'react';
import '../css/footer.css'
import { BiChevronRight, BiLogoApple } from 'react-icons/bi';
import explications from '../constants/explications';
import redirects from '../constants/redirects';
import { BsChevronRight } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='innerfooter'>
                <section className="purchase_benefits">
                    <div className="financial_assist">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 56">
                                <path fill="#6e6e73" d="m20 10.7c9.5393 0 17.3 7.7607 17.3 17.3s-7.7607 17.3-17.3 17.3-17.3-7.7607-17.3-17.3 7.7607-17.3 17.3-17.3m0-2.2c-10.7696 0-19.5 8.7305-19.5 19.5s8.7304 19.5 19.5 19.5 19.5-8.7305 19.5-19.5-8.7304-19.5-19.5-19.5zm-1.3278 14.2374c1.6211 0 3.0078.7031 3.8477 1.875v-3.3984h-3.5742c-.4492 0-.7812-.3125-.7812-.7812 0-.4297.3125-.7617.7812-.7617h3.5742v-1.0742c0-.6055.3711-.9961.9766-.9961.5859 0 .9766.3906.9766.9961v1.0742h1.3281c.4688 0 .7617.332.7617.7617 0 .4688-.3125.7812-.7617.7812h-1.3281v12.3047c0 .5859-.3711.957-.9375.957s-.9375-.3711-.9375-.957v-1.0938c-.8594 1.2305-2.2852 1.9141-3.9062 1.9141-2.9883 0-5.2734-2.3438-5.2734-5.8008s2.2852-5.8008 5.2539-5.8008zm-3.6133 12.8516h9.2188c.4688 0 .7812.332.7812.8008 0 .4492-.332.7812-.7812.7812h-9.2188c-.4492 0-.7812-.332-.7812-.7812 0-.4688.3125-.8008.7812-.8008zm3.9062-3.0664c2.0312 0 3.5352-1.6992 3.5352-3.9648 0-2.2852-1.5039-3.9844-3.5352-3.9844-2.0508 0-3.5547 1.582-3.5547 3.9844s1.5039 3.9648 3.5547 3.9648z" />
                            </svg>
                            <h3>Hỗ trợ tài chính</h3>
                            <p>Khoản thanh toán hàng tháng thấp, thời hạn thanh toán lên đến 24 tháng và chỉ cần trả trước 20% khi bạn chọn Trả Góp Hàng Tháng với MoMo.</p>
                            <a href="" className="redirect">Tìm hiểu thêm <BiChevronRight /></a>
                        </div>
                    </div>
                    <div className="free_delivery">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 56">
                                <path fill="#6e6e73" d="M33.905,17.063l-14-7.581a3.991,3.991,0,0,0-3.811,0l-14,7.581A4,4,0,0,0,0,20.581V35.419a4,4,0,0,0,2.095,3.518l14,7.581a3.989,3.989,0,0,0,3.811,0l14-7.581A4,4,0,0,0,36,35.419V20.581A4,4,0,0,0,33.905,17.063ZM17.048,11.241a1.993,1.993,0,0,1,1.9,0l13.8,7.47-6.383,3.645L11.943,14.005ZM18,27.133,3.253,18.711l6.629-3.589L24.355,23.5ZM3.048,37.178A2,2,0,0,1,2,35.419V20.581a1.955,1.955,0,0,1,.036-.262L17,28.865V44.733ZM34,35.419a2,2,0,0,1-1.048,1.759L19,44.733V28.865l14.964-8.545a1.955,1.955,0,0,1,.036.262Z" />
                            </svg>
                            <h3>Giao hàng miễn phí</h3>
                            <p>Giao hàng miễn phí thẳng đến tận nhà.</p>
                            <a href="" className="redirect">Tìm hiểu thêm <BiChevronRight /></a>
                        </div>
                    </div>
                    <div className="help_center">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 56">
                                <path fill="#6e6e73" d="m46.5553 27.6681a10.41 10.41 0 0 0 -2.6433-3.176 12.898 12.898 0 0 0 -3.93-2.1507 14.028 14.028 0 0 0 -4.3619-.7538c-.1407-.01-.2814-.01-.4322-.01-.603 0-1.6859.03-2.2588.1005a13.6292 13.6292 0 0 0 -3.0252.6634 13.0173 13.0173 0 0 0 -3.93 2.1507 10.4083 10.4083 0 0 0 -2.6433 3.176 8.4663 8.4663 0 0 0 .1708 8.1609 9.6142 9.6142 0 0 0 1.186 1.588 10.6752 10.6752 0 0 0 1.6885 1.5176l.211.1507a13.86 13.86 0 0 0 4.4131 1.9698 19.1708 19.1708 0 0 0 4.299.4824c.402 0 .8141-.01 1.2262-.04h.1809a20.7883 20.7883 0 0 0 2.2312 1.2763 17.57 17.57 0 0 0 2.1407.8945 5.3063 5.3063 0 0 0 1.5878.3316 1.08 1.08 0 0 0 .7739-.2613.9119.9119 0 0 0 .3216-.6533 1.1967 1.1967 0 0 0 -.2815-.7839c-.221-.2613-.4824-.6031-.804-1.0252a12.5728 12.5728 0 0 1 -.8141-1.196c-.02-.03.04-.1608.07-.1708a10.42 10.42 0 0 0 4.05-3.4875 8.448 8.448 0 0 0 1.5183-4.8443 8.2907 8.2907 0 0 0 -.9447-3.9096zm-2.2312 7.6282a8.3359 8.3359 0 0 1 -3.2966 2.8142 2.1523 2.1523 0 0 0 -1.0854 1.3266 2.0632 2.0632 0 0 0 .1709 1.6382c.01.02.02.03.03.05-.11-.05-.2211-.1-.3417-.1608a18.6866 18.6866 0 0 1 -2.02-1.1559 2.1979 2.1979 0 0 0 -1.2362-.3215h-.1709c-.3618.03-.7236.04-1.0754.04a16.721 16.721 0 0 1 -3.7965-.4221 12.4286 12.4286 0 0 1 -2.985-1.186c-.2713-.1508-.5427-.3216-.794-.4925a7.5181 7.5181 0 0 1 -1.0251-.8241 7.8848 7.8848 0 0 1 -1.4674-1.7991 6.4587 6.4587 0 0 1 -.1308-6.1804 8.4059 8.4059 0 0 1 2.151-2.5729 10.9211 10.9211 0 0 1 3.3065-1.8091 12.7522 12.7522 0 0 1 3.1458-.6232c.3216-.02 1.1533-.03 1.4849-.03.3619 0 .7237.01 1.0855.04a12.4791 12.4791 0 0 1 3.0553.6131 11.0977 11.0977 0 0 1 3.3167 1.8092 8.4173 8.4173 0 0 1 2.1307 2.5628 6.213 6.213 0 0 1 .7135 2.9649 6.4836 6.4836 0 0 1 -1.1658 3.7186zm-13.4241-19.6254a18.268 18.268 0 0 0 -5.5981-3.0654 23.2813 23.2813 0 0 0 -7.2238-1.1055 20.7964 20.7964 0 0 0 -6.8443 1.1055 18.1537 18.1537 0 0 0 -5.5981 3.0654 14.5464 14.5464 0 0 0 -3.7689 4.5327 11.7279 11.7279 0 0 0 -1.3568 5.568 13.6656 13.6656 0 0 0 2.1608 7.4147 15.1353 15.1353 0 0 0 5.8492 5.0252.0845.0845 0 0 1 .04.1105 15.9945 15.9945 0 0 1 -1.176 1.779c-.4522.603-.8241 1.0954-1.1357 1.4673a1.6471 1.6471 0 0 0 -.4019 1.1156 1.3831 1.3831 0 0 0 .4522.9347 1.576 1.576 0 0 0 1.1156.3719 7.3006 7.3006 0 0 0 2.2513-.4724 26.4909 26.4909 0 0 0 3.0654-1.2764 28.1581 28.1581 0 0 0 3.196-1.789 1.6481 1.6481 0 0 1 .191-.09c.6633.05 1.3166.08 1.96.08a24.1784 24.1784 0 0 0 5.6563-.6533c.1307-.03.2513-.07.3719-.1005a11.8356 11.8356 0 0 1 -1.5677-1.6889 22.3119 22.3119 0 0 1 -4.46.4322c-.5829 0-1.1859-.03-1.8091-.07l-.07-.01h-.08a2.3717 2.3717 0 0 0 -1.2764.412 27.0214 27.0214 0 0 1 -2.985 1.6684 25.586 25.586 0 0 1 -2.8342 1.186c-.1206.04-.2312.08-.3417.1105.1005-.1306.211-.2713.3216-.4221a20.518 20.518 0 0 0 1.3066-1.99 2.0973 2.0973 0 0 0 -.8845-2.9046 13.1092 13.1092 0 0 1 -5.0855-4.3618 11.6 11.6 0 0 1 -1.8202-6.279 9.7382 9.7382 0 0 1 1.1156-4.6332 12.672 12.672 0 0 1 3.2663-3.91 16.232 16.232 0 0 1 4.9851-2.7236 18.7722 18.7722 0 0 1 6.191-.995 21.1057 21.1057 0 0 1 6.5609.995 16.1166 16.1166 0 0 1 4.985 2.7236 13.5029 13.5029 0 0 1 2.07 2.0805 17.1418 17.1418 0 0 1 2.3015-.2412 14.7186 14.7186 0 0 0 -3.0954-3.3968z" />
                            </svg>
                            <h3>Hỗ trợ mua hàng</h3>
                            <p>Bạn có thắc mắc? Gọi cho Chuyên Gia hoặc chat trực tuyến. Gọi 1800-1192.</p>
                            <a href="" className="redirect">Liên hệ với chúng tôi <BiChevronRight /></a>
                        </div>
                    </div>
                </section>
                <section className="explication">
                    <ul>
                        {
                            explications.map(exp => (
                                <li className="">{exp}</li>
                            ))
                        }
                    </ul>
                    <p>
                        Trả Góp Hàng Tháng với MoMo được cung cấp bởi (các) đối tác tín dụng thông qua ứng dụng MoMo của Công Ty Cổ Phần Dịch Vụ Di Động Trực Tuyến ("MoMo") và không phải bởi Apple. Hình thức trả góp chỉ dành cho công dân Việt Nam thỏa điều kiện mua sản phẩm đủ điều kiện.
                    </p>
                    <p>
                        Tất cả các đơn hàng mua thông qua hình thức trả góp hàng tháng với MoMo yêu cầu phải có tài khoản ví điện tử MoMo và phải có sự phê duyệt riêng của (các) đối tác tín dụng của MoMo. Nếu bạn có câu hỏi liên quan đến việc bạn có đủ điều kiện tham gia chương trình trả góp hay không, vui lòng liên hệ với MoMo để được các đối tác tín dụng của MoMo giải đáp thắc mắc. Vui lòng tham khảo ứng dụng MoMo hoặc (các) đối tác tín dụng của MoMo để biết thông tin về các điều kiện, phí và lệ phí.
                    </p>
                    <p>
                        Apple có toàn quyền quyết định (các) sản phẩm nào đủ điều kiện tham gia chương trình trả góp tại bất kỳ thời điểm nào. Bất kỳ thay đổi nào trong việc chọn lựa sản phẩm, thời hạn trả góp và lãi suất sẽ thay đổi chương trình trả góp hàng tháng. Sản phẩm hợp lệ phải có giá trị mua hàng tối thiểu 3.000.000đ và tất cả các giao dịch mua hàng phải trả trước 20%.
                    </p>
                </section>
                <section className="route_tree">
                    <BiLogoApple/>
                    <BsChevronRight/>
                    <a href=''>Mac</a>
                    <BsChevronRight/>
                    <a href=''>Macbook Air</a>
                    <BsChevronRight/>
                    <a href="">Macbook Air 13 inch và 15 inch với M2</a>
                </section>
                <section className="redirects">
                    <div>
                        {
                            redirects.slice(0, 2).map(redirect => (
                                <>
                                    <h5>{redirect.topic}</h5>
                                    <ul>
                                        {redirect.subTopics.map(name => (
                                            <li><a href="">{name}</a></li>
                                        ))}
                                    </ul>
                                </>
                            ))
                        }
                    </div>
                    <div>
                        {
                            redirects.slice(2, 4).map(redirect => (
                                <>
                                    <h5>{redirect.topic}</h5>
                                    <ul>
                                        {redirect.subTopics.map(name => (
                                            <li><a href="">{name}</a></li>
                                        ))}
                                    </ul>
                                </>
                            ))
                        }
                    </div>
                    <div>
                        {
                            redirects.slice(4, 5).map(redirect => (
                                <>
                                    <h5>{redirect.topic}</h5>
                                    <ul>
                                        {redirect.subTopics.map(name => (
                                            <li><a href="">{name}</a></li>
                                        ))}
                                    </ul>
                                </>
                            ))
                        }
                    </div>
                    <div>
                        {
                            redirects.slice(5, 8).map(redirect => (
                                <>
                                    <h5>{redirect.topic}</h5>
                                    <ul>
                                        {redirect.subTopics.map(name => (
                                            <li><a href="">{name}</a></li>
                                        ))}
                                    </ul>
                                </>
                            ))
                        }
                    </div>
                    <div>
                        {
                            redirects.slice(8, 10).map(redirect => (
                                <>
                                    <h5>{redirect.topic}</h5>
                                    <ul>
                                        {redirect.subTopics.map(name => (
                                            <li><a href="">{name}</a></li>
                                        ))}
                                    </ul>
                                </>
                            ))
                        }
                    </div>
                </section>
                <section className="for_retail_store">
                    <span>Xem thêm cách để mua hàng: <a href="">Tìm cửa hàng bán lẻ</a> gần bạn. Hoặc gọi 1800 1192</span>
                </section>
                <section className="legal">
                    <div>
                        <span>Bản quyền © Apple Inc. 2023 Bảo lưu mọi quyền.</span>
                        <span>Việt Nam</span>
                    </div>
                    <div>
                        <a href="">Chính Sách Quyền Riêng Tư</a>
                        <a href="">Điều Khoản Sử Dụng</a>
                        <a href="">Bán Hàng Và Hoàn Tiền</a>
                        <a href="">Pháp Lý</a>
                        <a href="">Bản Đồ Trang Web</a>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Footer;