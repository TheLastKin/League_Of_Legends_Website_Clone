import React, { useState } from 'react';
import '../css/security.css'
import Marker from './Marker';
import MarkerLine from './MarkerLine';
import MarkerCheckpoint from './MarkerCheckpoint';
import { GoLock, GoCheckCircleFill } from "react-icons/go";
import HeadingGroup from './HeadingGroup';
import AnimatedCard from './AnimatedCard';
import Paragraph from './Paragraph';
import AnimatedLink from './AnimatedLink';
import MarkerBranch from './MarkerBranch';
import ResultReport from './ResultReport';
import AnimatedElement from './AnimatedElement';

const headings = ["Application security", "Empower developers", "With GitHub, you can secure code in minutes."]

const Security = () => {
    const [showFirstLine, setShowFirstLine] = useState(false)
    const [showFirstGroup, setShowFirstGroup] = useState(false)
    const [showSecondGroup, setShowSecondGroup] = useState(false)
    const [showThirdGroup, setShowThirdGroup] = useState(false)

    return (
        <div className='application_security'>
            <section>
                <Marker>
                    <MarkerLine show={showFirstLine} lineGradient='linear_blue_bottom' lineHeight={150} threshold={1} onIntersectionChanged={setShowFirstLine}/>
                    <MarkerCheckpoint show={showFirstGroup} glowGradient='radial_blue'>
                        <GoLock className='lock'/>
                    </MarkerCheckpoint>
                    <MarkerLine show={showFirstGroup} lineGradient='linear_blue' lineHeight={300} threshold={1} onIntersectionChanged={setShowFirstGroup}/>
                </Marker>
                <div className="content_flex">
                    <HeadingGroup show={showFirstGroup} headings={headings} highlightedTextColor='turquoise' marginTop={170} maxWidth={600}/>
                </div>
            </section>
            <section>
                <div className="content_flex">
                    <AnimatedCard className='security_steps' glowGradient='radial_blue'>
                        <div>
                            <span>cmake.yml</span>
                            <span>on: push</span>
                            <div className="steps_preview">
                                <AnimatedElement playAnimation={showSecondGroup} className="build_group" animatedClassName='scale_fade_in'>
                                    <GoCheckCircleFill className='check_green'/>
                                    <span>Build</span>
                                    <span>1m 21s</span>
                                </AnimatedElement>
                                <AnimatedElement playAnimation={showSecondGroup} className='connector' animatedClassName='scale_fade_in'/>
                                <AnimatedElement playAnimation={showSecondGroup} className="codeql_group" animatedClassName='scale_fade_in' threshold={0.5} rootMargin='30% 0px 0px 0px' onAnimate={setShowSecondGroup}>
                                    <div>Steps</div>
                                    <div className="codeql_steps">
                                        <div>
                                            <GoCheckCircleFill className='check_green'/>
                                            <span>Initialize CodeQL</span>
                                            <span>1m 21s</span>
                                        </div>
                                        <div>
                                            <GoCheckCircleFill className='check_green'/>
                                            <span>Autobuild</span>
                                            <span>1m 21s</span>
                                        </div>
                                        <div>
                                            <GoCheckCircleFill className='check_green'/>
                                            <span>Perform CodeQL Analyses</span>
                                            <span>1m 21s</span>
                                        </div>
                                    </div>
                                </AnimatedElement>
                            </div>
                        </div>
                    </AnimatedCard>
                    <AnimatedElement playAnimation={showThirdGroup} className="security_alert" animatedClassName='fade_in_right'>
                        <img src="/image/github/security.png" alt=""  />
                    </AnimatedElement>
                    <AnimatedElement playAnimation={showThirdGroup} className="blue_glow" animatedClassName='fade_in'/>
                    <div className="penta_square">
                        <div className="container">
                            <div className="square"></div>
                            <div className="square">
                                <div className="dot"></div>
                            </div>
                            <div className="square">
                            </div>
                            <div className="square"></div>
                            <div className="square">
                                <div className="curve"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section style={{ marginTop: 20 }}>
                <Marker>
                    <MarkerLine show={showThirdGroup} lineGradient='linear_blue_center' lineHeight={600} threshold={0.2} onIntersectionChanged={setShowThirdGroup}/>
                    <MarkerBranch show={showThirdGroup} src='/image/github/branch_2.svg' bottom={10}/>
                </Marker>
                <div className="content_flex p_1">
                    <AnimatedElement playAnimation={showThirdGroup} className='github_security' animatedClassName='fade_in_right'>
                        <Paragraph>
                            <span>GitHub Advanced Security</span> enables you to find and fix vulnerabilities with ease and ship secure code quickly.
                        </Paragraph>
                        <AnimatedLink>Dive into GitHub Advanced Security</AnimatedLink>
                    </AnimatedElement>
                    <AnimatedElement className='security_report' animatedClassName='fade_in_right' threshold={0.2}>
                        <ResultReport
                            heading='7x faster'
                            content='vulerability fixes with GitHub'
                            color='rgb(51, 179, 174)'
                        />
                    </AnimatedElement>
                </div>
            </section>
            <section>
                <div className="content_flex">
                    <AnimatedCard className='code_scanning' glowGradient='radial_blue'>
                        <div className="card_left p_1">
                            <Paragraph>
                                <span>Code scanning</span> is our code analysis tool that helps you remediate issues in your code.
                            </Paragraph>
                            <AnimatedLink className='download_ebook'>Download the latest SAST ebook</AnimatedLink>
                        </div>
                        <div className="card_right">
                            <AnimatedElement className='scanning_steps' animatedClassName='scale_fade_in' threshold={1}>
                                <img src="/image/github/code_scanning.png" alt="" />
                            </AnimatedElement>
                        </div>
                    </AnimatedCard>
                </div>
                <div className="content_dflex other_securities">
                    <div className="content_left">
                        <AnimatedCard className='dependabot p_1' glowGradient='radial_blue'>
                            <Paragraph>
                                <span>Dependabot</span> makes it easy to find and fix vulnerable dependencies in your supply chain.
                            </Paragraph>
                            <AnimatedLink>Explore Dependabot</AnimatedLink>
                            <AnimatedElement className='dependabot_img' animatedClassName='scale_fade_in' threshold={0.1}>
                                <img src="/image/github/dependabot.png" alt="" />
                            </AnimatedElement>
                        </AnimatedCard>
                    </div>
                    <div className="content_right">
                        <AnimatedCard className='secret_scanning p_1' glowGradient='radial_blue'>
                            <Paragraph>
                                <span>Secret scanning</span> automatically looks for partner patterns and prevents fraudulent use of accidentally committed secrets.
                            </Paragraph>
                            <AnimatedLink>Read about secret scanning</AnimatedLink>
                            <AnimatedElement className='secret_scanning_img' animatedClassName='scale_fade_in' threshold={0.1}>
                                <img src="/image/github/secret_scanning.png" alt="" />
                            </AnimatedElement>
                        </AnimatedCard>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Security;