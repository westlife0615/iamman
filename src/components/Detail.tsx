import React from "react";
import {useHistory, useParams} from "react-router-dom";

const Detail = () => {
  const history = useHistory();
  const params = useParams();
  
  function getId (data: any){
    if(data && data.id){
      return data.id
    }else
      return '';
  }
  return(
    <div>
      <div onClick={()=>{history.goBack()}} style={{cursor : "pointer"}}>뒤로가기</div>
      <br/>
      <br/>
      <h1>{getId(params)}번째 글.</h1>
      <img src={ "https://extmovie.maxmovie.com/xe/files/attach/images/135/600/898/016/b7b4f23a77f05bea311f2da34c8b72f2.gif" }
           style={ {width: "100%", height: 'auto'} }/>
    </div>
  )
}


export default Detail;