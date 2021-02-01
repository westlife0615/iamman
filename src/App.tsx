import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import {Header} from "./components/header/header";
import SideNav from "./components/side-nav/SideNav";

export type NavigationGroup = {
    text: string,
    component: JSX.Element
}

export const INITIAL_NAV_GROUP_LIST: NavigationGroup[] = [
    {
        text: "게시글 리스트",
        component: <div><img
            src={"https://img.huffingtonpost.com/asset/5d708e2f2400004f0075b4e8.jpeg?ops=scalefit_630_noupscale"}
            style={{width: "100%", height: 'auto'}}/></div>
    },
    {
        text: "상세 페이지",
        component: <div><img src={"http://ojsfile.ohmynews.com/STD_IMG_FILE/2011/0525/IE001309768_STD.jpg"}
                             style={{width: "100%", height: 'auto'}}/></div>
    },
    {
        text: "글쓰기",
        component: <div><img src={"https://www.chrischae.kr/content/images/size/w2000/2019/12/SteveJobsCloseUp-2.jpeg"}
                             style={{width: "100%", height: 'auto'}}/></div>
    },
]

function App() {
    let navigationGroupList: NavigationGroup[] = INITIAL_NAV_GROUP_LIST;

    return (
        <BrowserRouter basename={"/iamman"}>
            <React.Fragment>
                <SideNav navigationGroupList={navigationGroupList}>
                    <Header/>
                    <Route path={"/"} exact={true}>

                    </Route>
                    {/*<Route path={"/login"} exact={true}>*/}
                    {/*    <React.Fragment>*/}
                    {/*        <div style={{margin: "20px"}}>*/}
                    {/*            <input type={"text"} placeholder={"이메일을 입력하세요."} style={{width: '90%', height: '30px', fontSize: '20px'}}/>*/}
                    {/*        </div>*/}
                    {/*        <div style={{margin: "20px"}}>*/}
                    {/*            <input type={"password"} placeholder={"비밀번호를 입력하요."} style={{width: '90%', height: '30px', fontSize: '20px'}}/>*/}
                    {/*        </div>*/}
                    {/*        <div style={{margin: "20px"}}>*/}
                    {/*            <button>로그인</button>*/}
                    {/*        </div>*/}

                    {/*    </React.Fragment>*/}
                    {/*</Route>*/}
                </SideNav>
            </React.Fragment>

        </BrowserRouter>
    );
}

export default App;
