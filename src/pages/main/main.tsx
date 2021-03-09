import React, {ReactElement} from 'react';
import blogList from '../../data/blogList'
import {useHistory} from "react-router-dom";

const randomColor = (): number => {
  return Math.round(Math.random() * 1000000);
}

export const Main = (): ReactElement => {
  const history = useHistory();
  return <div className="main-page">
    <div className="main-wrapper">
      <h1>형욱 블로그</h1>
      <h3>#개발 #프로그래밍</h3>
    </div>
    <div className="main-blog-list">
      {
        blogList.map((blog, i) => {
          return <div className="main-blog-item"
                      style={ {
                        backgroundColor: '#' + randomColor()
                      } }
                      onClick={ () => {
                        history.push('detail')
                      } }
          >
            <span>{ i }</span>
            <span>{ blog.title }</span>
          </div>
        })
      }
    </div>
  
  </div>
}