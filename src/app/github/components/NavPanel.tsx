import React from 'react';
import '../css/nav_panel.css'
import { NavList } from '../constants/types';

type NavPanelProps = {
    lists: NavList[],
    divider: "horizontal" | "verticle"
}

const NavPanel = ({ lists, divider }: NavPanelProps) => {
    return (
        <div className='nav_panel'>
            <div style={{ display: divider === "horizontal" ? "block" : "flex" }}>
                {
                    lists.map((list, index) => (
                        <>
                            <div className="nav_list">
                                {list.heading && <h4 className='nav_list_heading'>{list.heading}</h4>}
                                {
                                    list.items.map(item => (
                                        <div className='nav_item'>
                                            {item.icon && 
                                            <div className="nav_item_left">
                                                {item.icon}
                                            </div>}
                                            <div className='nav_item_right'>
                                                {item.label && <h4 className='nav_item_label'>{item.label}</h4>}
                                                <span className='nav_item_content'>{item.content}</span>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            {index < lists.length - 1 && <div className={`${divider}_divider`}></div>}
                        </>
                    ))
                }
            </div>
        </div>
    );
};

export default NavPanel;