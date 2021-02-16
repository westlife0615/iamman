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
      <img src={ "http://ojsfile.ohmynews.com/STD_IMG_FILE/2011/0525/IE001309768_STD.jpg" }
           style={ {width: "100%", height: 'auto'} }/>
    </div>
  )
}


export default Detail;