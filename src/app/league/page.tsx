import './css/content_footer.css'
import './css/structure.css'
import ChampionRolePreview from '../league/components/ChampionRolePreview'
import ChampionSkin from '../league/components/ChampionSkin'
import LargeButton from '../league/components/LargeButton'
import GameModes from '../league/components/GameModes'
import GetStarted from '../league/components/GetStarted'
import TopBarMenu from '../league/components/TopBarMenu'
import Articles from '../league/components/Articles'
import GameNews from '../league/components/GameNews'
import RiotLogo from '../league/components/RiotLogo'

export default function Home() {

    return (
        <div className="wrapper">
            <TopBarMenu />
            <div className="intro_banner">
                <video className="LOL_Intro_Video_Blurred" src="/video/league/LOL_Intro_Video_Blurred.mp4" autoPlay muted loop></video>
            </div>
            <div className="intro_banner_front">
                <div className="outerline_banner"></div>
                <video className="LOL_Intro_Video" src="/video/league/Intro_Video_LOL.mp4" autoPlay muted loop></video>
                <img src="/image/league/LOL_Logo.png" alt=""></img>
                <LargeButton containerStyle={{ top: "125px" }}>PLAY FOR FREE</LargeButton>
            </div>
            <Articles />
            <div className="content">
                <ChampionRolePreview />
                <ChampionSkin />
                <GameModes />
                <GetStarted />
                <GameNews />
                <div className="content_footer_intro">
                    <video src="/video/league/Footer_Video.mp4" autoPlay muted loop></video>
                    <LargeButton textColor='white' containerStyle={{ position: "absolute" }}>PLAY FOR FREE</LargeButton>
                </div>
                <div className="content_footer_banner">
                    <p>TAKE LEAGUE WITH YOU</p>
                    <p>Download the League app to stay connected to friends and the latest game and esports news.</p>
                    <div className="platforms">
                        <img src="/image/league/App_Store.svg" alt="" />
                        <img src="/image/league/Google_Play.svg" alt="" />
                    </div>
                </div>
                <div className="footer">
                    <ul>
                        <li><a href="">ABOUT LEAGUE OF LEGEND</a></li>
                        <li><a href="">HELP US IMPROVE</a></li>
                        <li><a href="">SERVER STATUS</a></li>
                        <li><a href="">SUPPORT</a></li>
                        <li><a href="">ESPORT PRO SITE</a></li>
                    </ul>
                    <RiotLogo width={250} height={65}/>
                    <p>™ & © 2020 Riot Games, Inc.  League of Legends and all related logos, characters, names and distinctive likenesses thereof are exclusive property of Riot Games, Inc.  All Rights Reserved.</p>
                    <ul>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Terms Of Service</a></li>
                        <li><a href="">Cookia Policy</a></li>
                    </ul>
                    <img src="/image/league/Pegi.png" alt="" />
                </div>
            </div>
        </div>
    )
}