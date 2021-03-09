import React, {ReactElement} from 'react';
import { useHistory } from "react-router-dom";


export const Header = ():ReactElement => {
  const history = useHistory();
  
  return (
    <div className="header-container">
      <div className="header-wrapper header-home-wrapper"
           onClick={()=>{
             history.push('main');
           }}>
        형욱 블로그
      </div>
      <div className="header-wrapper"
           onClick={()=>{
             history.push('list');
           }}>
        게시글 보러가기
      </div>
    </div>
  )
}

// export default BlogDetail