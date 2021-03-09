import React from 'react';
import './App.css';
import {Header} from "./components/header/header";
import {BrowserRouter, Route} from "react-router-dom";
import {Main} from "./pages/main/main";
import {List} from "./pages/list/list";
import {Detail} from "./pages/detail/detail";

function App() {
  
  return (
    
    <div className="app-container">
       <BrowserRouter basename="iamman">
         <Header/>
         <Route path={ "/" } exact={ true }>
           <Main/>
         </Route>
         <Route path={ "/main" } exact={ true }>
           <Main/>
         </Route>
         <Route path={ "/list" } exact={ true }>
           <List/>
         </Route>
         <Route path={ "/detail" } exact={ true }>
           <Detail/>
         </Route>
       </BrowserRouter>
    </div>
  );
}


export default App;
