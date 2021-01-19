import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "./components/button/button";
import {BlogDetail} from "./components/blog-detail/blog-detail";
import {Header} from "./components/header/header";

const a: JSX.Element = (<div></div>)

let buttonName = "눌러주세요. 명령이다 !!!";
let buttonNames = [1, 2, 3, 4, 5, 6, 7, 8]

function afterClicked() {
    alert("Ronaldo !!! goal !!! ")
}

function App() {
    return (
        <div className="App">
            <Header></Header>
            <BlogDetail color={"빨강색"}></BlogDetail>
        </div>
    );
}

export default App;
