import React from 'react';

interface DetailProps {
    color : string
}

export const BlogDetail = (props: DetailProps)=>{
    return (
        <div>
            <h1>난 {props.color}색이 좋아</h1><br></br>
            <h1>이거참 뿌듯하구만</h1><br></br>
             <h3>햄버거 맞나군</h3>

            <h1>얍 !!!! </h1>
            <img src={"https://i.pinimg.com/originals/79/b6/bf/79b6bf5eb2ddc9ffa920dc46fb681b29.gif"}></img>
            <table>
                <tr>123</tr>
                <tr>456</tr>
                <tr>789</tr>
            </table>
        </div>
    )
}

// export default BlogDetail