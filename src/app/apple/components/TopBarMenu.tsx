'use client'

import { useEffect } from 'react'
import '../css/top_bar_menu.scss'
import { AiFillApple, AiOutlineSearch } from 'react-icons/ai'
import { BiChevronRight } from 'react-icons/bi'
import { BsBag } from 'react-icons/bs'

let showRedirects = false
let isAnimating = false

const redirects = ["Cửa hàng", "Mac", "iPad", "iPhone", "Watch", "AirPods", "TV & Nhà", "Giải Trí", "Phụ Kiện", "Hỗ Trợ"];

const TopBarMenu = () => {

    useEffect(() => {
        const items = document.querySelectorAll(".top_bar_redirects_compact>ul>li");
        items.forEach(item => {
            (item as HTMLElement).addEventListener("mouseover", () => {
                (item.childNodes[1] as HTMLElement).style.animation = "moveIn 0.3s ease forwards";
            });

            (item as HTMLElement).addEventListener("mouseleave", () => {
                (item.childNodes[1] as HTMLElement).style.animation = "moveOut 0.3s ease forwards";
            });
        })
    }, [])

    const onToggleRedirects = () => {
        if (isAnimating) return;

        isAnimating = true
        const redirects = document.querySelector(".top_bar_redirects_compact>ul") as HTMLElement
        const animatedIcon = document.querySelector(".animated_icon") as HTMLElement;
        const line1 = animatedIcon.childNodes[0] as HTMLElement;
        const line2 = animatedIcon.childNodes[1] as HTMLElement;
        if (showRedirects) {
            line1.style.animation = "reverseTransform 0.3s linear forwards"
            line2.style.animation = "reverseTransform2 0.3s linear forwards"
            redirects.style.animation = "shrinkRedirect 0.3s ease-out forwards"
            redirects.childNodes.forEach((node, index) => {
                (node as HTMLElement).style.top = `${-10 * (index+1)}px`;
                (node as HTMLElement).style.opacity = "0";
            })
        } else {
            line1.style.animation = "transform 0.3s linear forwards"
            line2.style.animation = "transform2 0.3s linear forwards"
            redirects.style.animation = "expandRedirect 0.3s ease-in forwards"
            redirects.childNodes.forEach((node, index) => {
                (node as HTMLElement).style.top = "0";
                (node as HTMLElement).style.opacity = "1";
            })
        }
        line1.onanimationend = () => {
            isAnimating = false
        }
        showRedirects = !showRedirects
    }

    return (
        <div className='top_bar_menu'>
            <div className="innertopbar">
                <div className="innertopbar_top">
                    <div className='top_bar_redirects'>
                        <ul>
                            <li><a href=""><AiFillApple /></a></li>
                            {
                                redirects.map(redirect => (
                                    <li><a href="">{redirect}</a></li>
                                ))
                            }
                            <li><a href=""><AiOutlineSearch /></a></li>
                            <li><a href=""><BsBag /></a></li>
                        </ul>
                    </div>
                    <div className='top_bar_redirects_compact'>
                        <a href=""><AiFillApple className='apple_icon' /></a>
                        <a href=""><AiOutlineSearch className='search_icon' /></a>
                        <a href=""><BsBag className='shopping_icon' /></a>
                        <span className="animated_icon" onClick={onToggleRedirects}>
                            <span className="line"></span>
                            <span className="line"></span>
                        </span>
                        <ul>
                            {
                                redirects.map(redirect => (
                                    <li><a href="">{redirect}</a><BiChevronRight className='animated_chevron' /></li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="innertopbar_middle">
                    <div>
                        <div className="middle_left">
                            <h2 className="product_name">MacBook Air</h2>
                            <p>Phiên bản 13" và 15" với chip M2</p>
                        </div>
                        <div className="middle_right">
                            <ul>
                                <li>Tổng quan</li>
                                <li>Thống số kỹ thuật</li>
                                <li>So sánh</li>
                                <li>Làm quen với Mac</li>
                            </ul>
                            <a href="">Mua sắm</a>
                        </div>
                        <div className="topbar_border"></div>
                    </div>
                </div>
            </div>
            <div className="innertopbar_bottom">
                <p>Thanh toán dần, thời hạn đến 24 tháng và chỉ trả trước 20%. <a href="">Tìm hiểu thêm</a></p>
            </div>
        </div>
    );
};

export default TopBarMenu;