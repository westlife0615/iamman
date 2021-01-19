import React from 'react';

const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
};

export const Header = ()=>{
    return (
        <table>
            <td style={mystyle}>홈</td>
            <td style={mystyle}>게시물</td>
            <td style={mystyle}>공지사항</td>
            <td style={mystyle}>게시판</td>
            <td style={mystyle}>콘택트</td>
        </table>
    )
}

// export default BlogDetail