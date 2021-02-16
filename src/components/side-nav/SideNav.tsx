import React, {useState} from "react";
import {useHistory, NavLink} from "react-router-dom";
import {NavigationGroup} from "../../App";


/** @jsxRuntime classic /
 /* @jsx jsx */
import {css, jsx} from "@emotion/react";

export interface SideNavProps {
  navigationGroupList: NavigationGroup[],
  children: JSX.Element[]|JSX.Element
}

const SideNav = (props: SideNavProps) => {
  
  const [ index, setIndex ] = useState(0 as number);
  const history = useHistory();
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
    <div style={ {
      display: "flex",
      justifyContent: "flex-start",
    } }>
      <div className={ "side-nav-container" }
           style={ {...sideNavViewStyle, ...sideNavFontStyle} }>
        <div style={ {padding: "10px", cursor: "pointer"} }>
          <NavLink to={ "/list" }>리스트</NavLink>
        </div>
        <div style={ {padding: "10px", cursor: "pointer"} }>
          <NavLink to={ "/detail" }>상세페이지</NavLink>
        </div>
        <div style={ {padding: "10px", cursor: "pointer"} }>
          <NavLink to={ "/write" }>글쓰기</NavLink>
        </div>
      
      </div>
      <div className={ "main-container" } style={ {width: "100%"} }>
        { props.children }
      </div>
    
    </div>
  )
}

export default SideNav;