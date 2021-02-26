import './css/App.css';
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SearchContainer from './containers/SearchContainer';



function App() {

  const bgPath = "./assets/jelleke-vanooteghem-gnxb59lGU1M-unsplash.jpg"
  return ( 
    <div className="App" style={{ backgoundImage: `url(${bgPath})`}}>
      
      <Router>
        <>
        <header className="header">
              {/* <NavBar handleBGChange={handleBGChange} downloadLink={currentBackGround["url"]}/> */}
        </header>
            
            <main className="main-body">
            
            <Switch>
            <Route path="/search" component={SearchContainer} />
            {/* <Route component={NotFound} /> */}
            </Switch>
            </main>
            </>
      </Router>

    </div>
  );
}

export default App;
