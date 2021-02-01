import React, {useState} from 'react';

interface DetailProps {
    color? : string,
    number?: number
}

export const BlogDetail = (props: DetailProps)=>{

    // const [a,setA ]= useState(1)

    var brList = ()=>{
        // var list = new Array(5);
        // return list.map(()=>{
        //     return <br/>
        // })
        return [...Array(6)].map(()=>{
            return <br/>
        })
    }

    var conditionalFC = (a: any)=>{
        console.log(a);
        // setA(2)
        if(a == 0){
            return <h1>게시글 리스트 </h1>
        }else if(a == 1){
            return <h1>상세 페이지</h1>
        }else if(a == 2){
            return <h1>글적기</h1>
        }
    }

    return (
        <div>
            {
                brList()
            }
            {
                conditionalFC(props.number)
            }

        </div>
    )
}

// export default BlogDetail