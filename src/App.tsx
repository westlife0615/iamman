import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import {Header} from "./components/header/header";
import SideNav from "./components/side-nav/SideNav";

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

const List = () => {
  return <div><img
    src={ "https://img.huffingtonpost.com/asset/5d708e2f2400004f0075b4e8.jpeg?ops=scalefit_630_noupscale" }
    style={ {width: "100%", height: 'auto'} }/></div>
}

const Detail = () => {
  return <div><img src={ "http://ojsfile.ohmynews.com/STD_IMG_FILE/2011/0525/IE001309768_STD.jpg" }
                   style={ {width: "100%", height: 'auto'} }/></div>
}

const Write = () => {
  return <div><img src={ "https://www.chrischae.kr/content/images/size/w2000/2019/12/SteveJobsCloseUp-2.jpeg" }
                   style={ {width: "100%", height: 'auto'} }/></div>
}

function App() {
  let navigationGroupList: NavigationGroup[] = INITIAL_NAV_GROUP_LIST;
  
  return (
    <BrowserRouter basename={ "/iamman" }>
      <React.Fragment>
        <SideNav navigationGroupList={ navigationGroupList }>
          <Header/>
          <Route path={ "/" } exact={ true } component={ List }/>
          <Route path={ "/list" } exact={ true } component={ List }/>
          <Route path={ "/detail" } exact={ true } component={ Detail }/>
          <Route path={ "/write" } exact={ true } component={ Write }/>
        </SideNav>
      </React.Fragment>
    
    </BrowserRouter>
  );
}

export default App;
