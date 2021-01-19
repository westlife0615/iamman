import React from 'react';

// export const Button : () => (
//     <div></div>
// );

export interface ButtonProps {
    label?: string,
    clickHandler?: ()=> void
}

function voidFunction(){}

function Button (props : ButtonProps){
    return (
        <div>
            <button
                className="button"
                onClick={()=>{
                    props.clickHandler && typeof props.clickHandler === 'function' ?
                        props.clickHandler() :
                        voidFunction()
                    // props.clickHandler && props.clickHandler()
                }}>{props.label}</button>
        </div>
    )
}

Button.defaultProps = {
    label : "i am default man !"
}


export default Button;