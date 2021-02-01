import React, {useState} from "react";
import {NavigationGroup} from "../../App";


/** @jsxRuntime classic /
 /* @jsx jsx */
import {css, jsx} from "@emotion/react";

export interface SideNavProps {
    navigationGroupList: NavigationGroup[],
    children: JSX.Element[] | JSX.Element
}

const SideNav = (props: SideNavProps) => {

    const [index, setIndex] = useState(0 as number);

    const sideNavFontStyle = {
        fontSize: "40px",
        color: "#0000ff"
    };
    const sideNavViewStyle = {
        width: "400px",
        height: "100vh",
        position: "relative",
        padding: '30px'
    } as React.CSSProperties;

    return (
        <div style={{
            display: "flex",
            justifyContent: "flex-start",
        }}>
            <div className={"side-nav-container"}
                 style={{...sideNavViewStyle, ...sideNavFontStyle}}>
                {
                    <div>
                        {
                            props.navigationGroupList.map((content: NavigationGroup, i) => {
                                return <div style={{padding: "10px", cursor: "pointer"}} onClick={() => {
                                    setIndex(i);
                                }}>
                                    <span>{content.text}</span>
                                </div>
                            })
                        }
                    </div>
                }
            </div>
            <div className={"main-container"} style={{width: "100%"}}>
                {props.children}
                {props.navigationGroupList[index].component}
            </div>

        </div>
    )
}

export default SideNav;