'use client'

import '../css/top_bar_menu.scss'
import { RiArrowDropDownLine } from "react-icons/ri";
import RiotLogo from "./RiotLogo";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { MdLanguage } from "react-icons/md";

const TopBarMenu = () => {

    return (
        <div className="topbar">
            <div className="innertopbar_left">
                <RiotLogo />
                <RiArrowDropDownLine className="dropdown_icon" />
            </div>
            <div className="innertopbar_center">
                <img className='lol_gold_icon' src="/image/league/LOL_Gold_Icon.webp" />
                <ul className="redirect_tags">
                    <li><a href="">GAME</a></li>
                    <li><a href="">CHAMPIONS</a></li>
                    <li><a href="">NEWS</a><RiArrowDropDownLine className="dropdown_icon" /></li>
                    <li><a href="">PATHCH NOTES</a></li>
                    <li><a href="">DISCOVER</a><RiArrowDropDownLine className="dropdown_icon" /></li>
                    <li><a href="">ESPORTS</a><BsBoxArrowUpRight className="arrow_up_right" /></li>
                    <li><a href="">UNIVERSE</a><BsBoxArrowUpRight className="arrow_up_right" /></li>
                    <li><a href="">SHOP</a><BsBoxArrowUpRight className="arrow_up_right" /></li>
                    <li><a href="">SUPPORT</a><BsBoxArrowUpRight className="arrow_up_right" /></li>
                    <li id="list_more"><a href="">MORE</a> <RiArrowDropDownLine className="dropdown_icon" />
                        <ul>
                            <li><a href="">PATHCH NOTES</a></li>
                            <li><a href="">DISCOVER</a><RiArrowDropDownLine className="dropdown_icon" /></li>
                            <li><a href="">ESPORTS</a><BsBoxArrowUpRight className="arrow_up_right" /></li>
                            <li><a href="">UNIVERSE</a><BsBoxArrowUpRight className="arrow_up_right" /></li>
                            <li><a href="">SHOP</a><BsBoxArrowUpRight className="arrow_up_right" /></li>
                            <li><a href="">SUPPORT</a><BsBoxArrowUpRight className="arrow_up_right" /></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="innertopbar_right">
                <MdLanguage className='language_icon' />
                <span className="sign_in">SIGN IN</span>
                <a href="" className="btn_play_now">PLAY NOW</a>
            </div>
        </div>
    );
};

export default TopBarMenu;