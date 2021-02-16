import React from 'react';
import {BrowserRouter, Route, NavLink} from 'react-router-dom'
import './App.css';
import {Header} from "./components/header/header";
import SideNav from "./components/side-nav/SideNav";
import Detail from "./components/Detail";

export type NavigationGroup = {
  text: string,
  path: string
}

export const INITIAL_NAV_GROUP_LIST: NavigationGroup[] = [
  {
    text: "게시글 리스트",
    path: "/list"
  },
  {
    text: "상세 페이지",
    path: "/detail"
  },
  {
    text: "글쓰기",
    path: "/write"
  },
]

const Home = () => {
  return <div><img
    src={ "https://3.bp.blogspot.com/-H0rjOoPmiwE/WsCNm6dShwI/AAAAAAAAAAc/nPOc9gvNwnggTO29lxgocuOQMCq6WFz_QCLcBGAs/s1600/%25ED%2595%2598%25EC%25A7%25A4%2B1570.gif" }
    style={ {width: "100%", height: 'auto'} }/></div>
}


const List = () => {
  const contentList = [
    {
      content: "첫번째 글",
    },
    {
      content: "2번째 글",
    },
    {
      content: "3번째 글",
    },
    {
      content: "4번째 글",
    },
    {
      content: "5번째 글",
    },
    {
      content: "6번째 글",
    },
    {
      content: "7번째 글",
    },
    {
      content: "8번째 글",
    },
  ]
  return <div style={ {display: "flex"} }>
    <div>
      {
        contentList.map((a, i) => {
          return <div style={ {margin: '10px'} }><NavLink to={ "/list/" + i } style={ {
            margin: "10px",
            cursor: "pointer"
          } }>{ a.content }</NavLink></div>
        })
      }
    </div>
    <img
      src={ "https://img.huffingtonpost.com/asset/5d708e2f2400004f0075b4e8.jpeg?ops=scalefit_630_noupscale" }
      style={ {width: "200px", height: 'auto'} }/>
  
  </div>
}

const Write = () => {
  // return <div><img src={ "https://www.chrischae.kr/content/images/size/w2000/2019/12/SteveJobsCloseUp-2.jpeg" }
  //                  style={ {width: "100%", height: 'auto'} }/></div>
  return (
    <div>
      <textarea style={ {width: "300px", height: "500px"} }></textarea>
      <button>쓰기</button>
    </div>
  )
}

function App() {
  let navigationGroupList: NavigationGroup[] = INITIAL_NAV_GROUP_LIST;
  
  return (
    <BrowserRouter basename={ "/iamman" }>
      <React.Fragment>
        <SideNav navigationGroupList={ navigationGroupList }>
          <Header/>
          <Route path={ "/" } exact={ true } component={ Home }/>
          <Route path={ "/list" } exact={ true } component={ List }/>
          <Route path={ "/list/:id" } exact={ true }>
            <Detail></Detail>
          </Route>
          <Route path={ "/write" } exact={ true } component={ Write }/>
        </SideNav>
      </React.Fragment>
    
    </BrowserRouter>
  );
}

export default App;
