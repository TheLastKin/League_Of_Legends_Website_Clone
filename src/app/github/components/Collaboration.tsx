import React, { useState } from 'react';
import '../css/collaboration.css'
import { GoCode, GoCodeOfConduct, GoHeart } from "react-icons/go";
import Marker from './Marker';
import MarkerLine from './MarkerLine';
import MarkerCheckpoint from './MarkerCheckpoint';
import HeadingGroup from './HeadingGroup';
import AnimatedCard from './AnimatedCard';
import MarkerBranch from './MarkerBranch';
import Paragraph from './Paragraph';
import AnimatedLink from './AnimatedLink';
import ResultReport from './ResultReport';
import GetStarted from './GetStarted';
import AnimatedElement from './AnimatedElement';

const headings = ["Collaboration", "Supercharge collaboration", "GitHub help your teams work more efficiently together."]
const sponsors = [{
    img: "curl.jpeg",
    name: "curl"
}, {
    img: "commandpost.png",
    name: "CommandPost"
}, {
    img: "prophen.jpeg",
    name: "prophen"
}, {
    img: "eslint.png",
    name: "eslint"
}, {
    img: "directus.png",
    name: "directus"
}, {
    img: "sindresorhus.jpeg",
    name: "sindresorhus"
}, {
    img: "evan_you.jpeg",
    name: "Evan You"
}, {
    img: "dayhaysoos.jpeg",
    name: "dayhaysoos"
}, {
    img: "kazupon.jpeg",
    name: "kazupon"
}]

const Collaboration = () => {
    const [showFirstGroup, setShowFirstGroup] = useState(false)
    const [showSecondGroup, setShowSecondGroup] = useState(false)
    const [showThirdGroup, setShowThirdGroup] = useState(false)

    return (
        <div className='collaboration'>
            <section>
                <Marker>
                    <MarkerLine lineGradient='linear_pink_bottom' lineHeight={150} threshold={0.2}/>
                    <MarkerCheckpoint glowGradient='radial_pink' show={showFirstGroup}>
                        <GoCodeOfConduct className='collab'/>
                    </MarkerCheckpoint>
                    <MarkerLine show={showFirstGroup} lineGradient='linear_pink' lineHeight={220} threshold={0.2} onIntersectionChanged={setShowFirstGroup}/>
                </Marker>
                <div className="content_flex">
                    <HeadingGroup show={showFirstGroup} headings={headings} highlightedTextColor='#F778BA' maxWidth={700} marginTop={170}/>
                </div>
            </section>
            <section>
                <div className="content_flex collab_plan">
                    <img src="/image/github/plan.png" alt="" className="plan" />
                    <AnimatedElement playAnimation={showSecondGroup} className='project' animatedClassName='fade_in_right'>
                        <img src="/image/github/project.png" alt="" />
                    </AnimatedElement>
                    <AnimatedElement playAnimation={showSecondGroup} className='pink_glow' animatedClassName='fade_in'/>
                    <div className="box_group">
                        <div className="box">
                            <div className="dot"></div>
                            <div className="box">
                            
                            </div>
                            <div className="box">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <Marker>
                    <MarkerLine show={showSecondGroup} lineGradient='linear_pink_center' lineHeight={590} threshold={0.2} onIntersectionChanged={setShowSecondGroup}/>
                    <MarkerBranch show={showSecondGroup} src='/image/github/branch_3.svg' bottom={10}/>
                </Marker>
                <div className="content_flex p_1">
                    <AnimatedElement playAnimation={showSecondGroup} className='issue_and_project' animatedClassName='fade_in_right'>
                        <Paragraph>
                            <span>GitHub Issues and GitHub Projects</span> supply project management tools that adapt to your team alongside your code.
                        </Paragraph>
                        <AnimatedLink>Get started with GitHub Issues</AnimatedLink>
                    </AnimatedElement>
                    <AnimatedElement className='collab_report' animatedClassName='fade_in_right' threshold={0.2}>
                        <ResultReport color='#F778BA' heading='80%' content='reduction on boarding time with GitHub'/>
                    </AnimatedElement>
                </div>
            </section>
            <section>
                <div className="content_dflex">
                    <div className="content_left">
                        <AnimatedCard glowGradient='radial_pink' className='github_discussions p_1'>
                            <Paragraph>
                                <span>GitHub Discussions</span> creates space to ask questions and have open-ended conversations.
                            </Paragraph>
                            <AnimatedLink>Jump into GitHub Discussions</AnimatedLink>
                            <img src="/image/github/discussions.png" alt="" />
                        </AnimatedCard>
                    </div>
                    <div className="content_right">
                        <AnimatedCard glowGradient='radial_pink' className='github_pull_requests p_1'>
                            <Paragraph>
                                <span>Pull requests</span> allow real-time communication and collaboration about code changes.
                            </Paragraph>
                            <AnimatedLink>Check out pull requests</AnimatedLink>
                            <img src="/image/github/pull_requests.png" alt="" />
                        </AnimatedCard>
                    </div>
                </div>
            </section>
            <section style={{ marginTop: 30 }}>
                <div className="content_flex">
                    <AnimatedCard className='github_sponsors' glowGradient='radial_pink'>
                        <div className="card_left p_1">
                            <Paragraph>
                                <span>GitHub Sponsors</span> lets you support your favorite open source maintainers and projects.
                            </Paragraph>
                            <AnimatedLink className='invest_github'>Invest with GitHub Sponsors</AnimatedLink>
                        </div>
                        <div className="card_right">
                            <AnimatedElement className="sponsor_list" animatedClassName='static' threshold={0.5} onAnimate={setShowThirdGroup}>
                                {
                                    sponsors.map((sponsor, index) => (
                                        <AnimatedElement playAnimation={showThirdGroup} style={{ transitionDelay: `${(showThirdGroup ? 0.1 : 0)*index}s` }} className="sponsor" animatedClassName='fade_in_top'>
                                            <div className='sponsor_image'>
                                                <img src={`/image/github/${sponsor.img}`} alt="" />
                                            </div>
                                            <span className='sponsor_name'>{sponsor.name}</span>
                                            <div className="sponsor_link">
                                                <div>
                                                    <GoHeart/>
                                                    <span>Sponsor</span>
                                                </div>
                                            </div>
                                        </AnimatedElement>
                                    ))
                                }
                            </AnimatedElement>
                        </div>
                    </AnimatedCard>
                </div>
            </section>
            <section style={{ marginTop: 30 }}>
                <Marker>
                    <MarkerLine lineGradient='linear_purple' lineHeight={350}/>
                    <MarkerCheckpoint glowGradient='radial_purple'>
                        <GoCode className='code'/>
                    </MarkerCheckpoint>
                </Marker>
                <div className="content_flex">
                    <h1 className='github_home'>Over 100 million developers call GitHub home</h1>
                    <p className='github_home_2'>Whether you’re scaling your startup or just learning how to code, GitHub is your home. Join the world’s largest developer platform to build the innovations that empower humanity. Let’s build from here.</p>
                    <GetStarted marginTop={70}/>
                </div>
            </section>
        </div>
    );
};

export default Collaboration;