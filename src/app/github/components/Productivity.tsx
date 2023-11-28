import React, { useState } from 'react';
import '../css/productivity.css'
import { GoBriefcase } from "react-icons/go";
import AnimatedLink from './AnimatedLink';
import Marker from './Marker';
import MarkerCheckpoint from './MarkerCheckpoint';
import MarkerLine from './MarkerLine';
import MarkerBranch from './MarkerBranch';
import HeadingGroup from './HeadingGroup';
import Paragraph from './Paragraph';
import AnimatedCard from './AnimatedCard';
import ResultReport from './ResultReport';
import BackgroundGraphic from './BackgroundGraphic';
import AnimatedElement from './AnimatedElement';

const headings = ["Productivity", "Accelerate innovation", "Our AI-powered platform increases the pace of software development."]

const Productivity = () => {
    const [showFirstGroup, setShowFirstGroup] = useState(false);
    const [showSecondGroup, setShowSecondGroup] = useState(false);

    return (
        <div className='productivity'>
            <section>
                <Marker>
                    <MarkerCheckpoint show={showFirstGroup} glowGradient='radial_green'>
                        <GoBriefcase className='briefcase'/>
                    </MarkerCheckpoint>
                    <MarkerLine show={showFirstGroup} lineGradient='linear_green' lineHeight={220} onIntersectionChanged={setShowFirstGroup}/>
                </Marker>
                <div className="content_flex">
                    <HeadingGroup headings={headings} show={showFirstGroup} highlightedTextColor='rgb(63, 185, 80)' maxWidth={800}/>
                </div>
            </section>
            <section>
                <div className="content_flex">
                    <BackgroundGraphic show={showFirstGroup} className="rotating_circle">
                        <div className="circle_big">
                            <div className="circle_medium"></div>
                            <div className="circle_small"></div>
                            <div className="rotating_dot_1"></div>
                            <div className="rotating_dot_2"></div>
                        </div>
                    </BackgroundGraphic>
                    <AnimatedElement className='copilot_1' animatedClassName='fade_in_right' threshold={0.3} rootMargin='30% 0px 0px 0px'>
                        <img src="/image/github/copilot_1.png" alt="" />
                    </AnimatedElement>
                    <AnimatedElement className="copilot_2" animatedClassName='fade_in_right' playAnimation={showSecondGroup}>
                        <img src="/image/github/copilot_2.png" alt=""  />
                    </AnimatedElement>
                    <AnimatedElement className='purple_glow' animatedClassName='fade_in' playAnimation={showSecondGroup}/>
                </div>
            </section>
            <section>
                <Marker>
                    <MarkerLine show={showSecondGroup} lineGradient='linear_green_center' lineHeight={675} threshold={0.3} onIntersectionChanged={setShowSecondGroup}/>
                    <MarkerBranch src="/image/github/branch.svg" bottom={10} show={showSecondGroup}/>
                </Marker>
                <div className="content_flex p_1">
                    <AnimatedElement playAnimation={showSecondGroup} className='github_copilot' animatedClassName='fade_in_right'>
                        <Paragraph>
                            <span>GitHub Copilot</span> empowers developers to complete tasks 55% faster with contextualized AI coding assistance across workflows.
                        </Paragraph>
                        <AnimatedLink>Explore GitHub Copilot</AnimatedLink>
                    </AnimatedElement>
                    <AnimatedElement className="copilot_report" animatedClassName='fade_in_right' threshold={0.3}>
                        <ResultReport 
                            color='rgb(63, 185, 80)'
                            heading='22% increase'
                            content='In developer productivity after three years with GitHub'
                            toLink='Read the report'
                        />
                    </AnimatedElement>
                </div>
            </section>
            <section>
                <div className="content_flex">
                    <AnimatedCard className='github_actions' glowGradient='radial_green_2'>
                        <div className="card_left p_1">
                            <Paragraph>
                                <span>GitHub Actions</span> automates your build, test, and deployment workflow with simple and secure CI/CD.
                            </Paragraph>
                            <AnimatedLink className='discover_actions'>Discover GitHub Actions</AnimatedLink>
                        </div>
                        <div className="card_right">
                            <img className='action_workflow' src="/image/github/github_actions.png" alt="" />
                        </div>
                    </AnimatedCard>
                    <div className="rotating_square">
                        <div className="square">
                            <div className="circle"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                        </div>
                    </div>
                </div>
                <div className="content_dflex codespace_mobile">
                    <div className="content_left">
                        <AnimatedCard className='github_codespace p_1' glowGradient='radial_green_2'>
                            <Paragraph>
                                <span>GitHub Codespaces</span> offers a complete dev environment in seconds. Code, build, test, and open pull requests from any repo.
                            </Paragraph>
                            <AnimatedLink className='check_out_codespace'>Check out Github Codespaces</AnimatedLink>
                            <img src="/image/github/codespaces.png" alt="" />
                        </AnimatedCard>
                    </div>
                    <div className="content_right">
                        <AnimatedCard className='github_mobile p_1' glowGradient='radial_green_2'>
                            <Paragraph>
                                <span>GitHub Mobile</span> fits your projects in your pocket, so you never miss a beat while on the go.
                            </Paragraph>
                            <AnimatedLink className='download_gihub_mobile'>Download GitHub Mobile</AnimatedLink>
                            <img src="/image/github/mobile.png" alt="" />
                        </AnimatedCard>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Productivity;