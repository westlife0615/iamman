import React from 'react';
import {NavLink} from "react-router-dom";

const mystyle = {
    color: "black",
    backgroundColor: "white",
    padding: "10px",
    fontFamily: "Arial"
};

const headerNavFontStyle = {
    fontSize: "40px",
    color: "#ff00ff"
};

const headerNavViewStyle = {
    padding: "10px",
    cursor: "pointer"
};

export const Header: React.FC = ()=>{
    return (
        <div style={{
            display: "flex",
            justifyContent: "center"
        }}>
            <NavLink to={"/"}>
                <div style={{...headerNavFontStyle, ...headerNavViewStyle}}>홈</div>
            </NavLink>
        </div>
    )
}

// export default BlogDetail