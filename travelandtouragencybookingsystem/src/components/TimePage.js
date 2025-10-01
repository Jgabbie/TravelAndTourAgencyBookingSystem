import "../CSS/timepagecss.css";
import React, { useState } from 'react';
import { Menu } from "antd";
import { HomeFilled } from '@ant-design/icons';
import { Link, useLocation } from "react-router-dom";



const TimePage = () => {
    const location = useLocation();
    return (<div>
        <div className="topbar-menu">
            <div className="logo">
                <img class="mrclogo" src='/images/M&RCLogo.png'></img>
            </div>

            <div className="menu-wrap">
                <Menu
                    className="top-anchor"
                    direction="horizontal"
                    mode="horizontal"
                    selectedKeys={[location.pathname]}
                    items={[
                        {
                            key: "/homepage", label:
                                <Link to="/homepage">
                                    <span>
                                        <HomeFilled style={{ marginRight: 4 }} />
                                        Home
                                    </span></Link>
                        },
                    ]}
                />
            </div>
        </div>
    </div>
    )
}

export default TimePage