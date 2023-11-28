import React from 'react';
import '../css/nav_bar.css'
import { AiFillGithub } from 'react-icons/ai'
import { BsChevronDown } from 'react-icons/bs'
import { FiSearch } from "react-icons/fi";
import { NavList } from '../constants/types';
import { GoPackage, GoShieldCheck, GoCopilot, GoCodeReview, GoCodespaces, GoIssueOpened, GoCommentDiscussion, GoWorkflow } from "react-icons/go";
import NavPanel from './NavPanel';

const productNavs: NavList[] = [{
    heading: "",
    items: [{
        icon: <GoWorkflow className='nav_icon'/>,
        label: "Actions",
        content: "Animate any workflow"
    }, {
        icon: <GoPackage className='nav_icon'/>,
        label: "Packages",
        content: "Host and manage packages"
    }, {
        icon: <GoShieldCheck className='nav_icon'/>,
        label: "Security",
        content: "Find and fix vulnerabilities"
    }, {
        icon: <GoCodespaces className='nav_icon'/>,
        label: "Codespaces",
        content: "Instant dev environments"
    }, {
        icon: <GoCopilot className='nav_icon'/>,
        label: "Copilot",
        content: "Write better code with AI"
    }, {
        icon: <GoCodeReview className='nav_icon'/>,
        label: "Code Review",
        content: "Manage code changes"
    }, {
        icon: <GoIssueOpened className='nav_icon'/>,
        label: "Issues",
        content: "Plan and track work"
    }, {
        icon: <GoCommentDiscussion className='nav_icon'/>,
        label: "Discussions",
        content: "Collaborate outside of code"
    }]
}, {
    heading: "Explore",
    items: [{
        content: "All featues"
    }, {
        content: "Documentation"
    }, {
        content: "GitHub skills"
    }, {
        content: "Blog"
    }]
}]

const solutionsNavs: NavList[] = [{
    heading: "For",
    items: [{ content: "Enterprise" }, { content: "Teams" }, { content: "Startups" }, { content: "Education" }]
}, {
    heading: "By Solution",
    items: [{ content: "CI/CD & Automation" }, { content: "DevOps" }, { content: "DevSecOps" }]
}, {
    heading: "Resources",
    items: [{ content: "Learning Pathways" }, { content: "Write papers, Ebook, Webinars" }, { content: "Customer Stories" }, { content: "Partners" }]
}]

const opensourceNavs: NavList[] = [{
    heading: "",
    items: [{ label: "GitHub Sponsors", content: "Fund open source developers" }]
}, {
    heading: "",
    items: [{ label: "The ReadME Project", content: "GitHub community articles" }]
}, {
    heading: "Repositories",
    items: [{ content: "Topics" }, { content: "Trending" }, { content: "Collections" }]
}]

const NavBar = () => {
    return (
        <div className='nav_bar'>
            <div className="nav_bar_left">
                <a href="#" className='github_icon'><AiFillGithub/></a>
                <div className='nav_group'>
                    <span className='label'>Product</span>
                    <BsChevronDown className='chevron_down'/>
                    <NavPanel lists={productNavs} divider='verticle'/>
                </div>
                <div className='nav_group'>
                    <span className='label'>Solutions</span>
                    <BsChevronDown className='chevron_down'/>
                    <NavPanel lists={solutionsNavs} divider='horizontal'/>
                </div>
                <div className='nav_group'>
                    <span className='label'>Open Source</span>
                    <BsChevronDown className='chevron_down'/>
                    <NavPanel lists={opensourceNavs} divider='horizontal'/>
                </div>
                <a href="#">Pricing</a>
            </div>
            <div className="nav_bar_right">
                <div className="input_container">
                    <FiSearch className='search_icon'/>
                    <input type="text" id="input" placeholder='Search or jump to...' />
                    <div>/</div>
                </div>
                <a href="#" className='sign_in'>Sign in</a>
                <a href="#" className='sign_out'>Sign up</a>
            </div>
        </div>
    );
};

export default NavBar;