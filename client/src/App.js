import './css/App.css';
import './css/base.css';
import './css/header.css';
import './css/tooltip.css';
import './css/animation.css';
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SearchContainer from './containers/SearchContainer';
import NotFound from './ components/NotFound';



function App() {

  
  // Free stock photo for inital bckground from https://www.pexels.com/photo/white-plane-on-blue-sky-164646/


    return ( 
      <div className="App" style={{ backgroundImage: `url("https://images.pexels.com/photos/164646/pexels-photo-164646.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")` }}>

        {/* <img src={bgImage}/> */}
        
          <header className="header">
                {/* <NavBar handleBGChange={handleBGChange} downloadLink={currentBackGround["url"]}/> */}
          </header>
              
              <main className="main-body">
        <Router>
          <>
            <Switch>
              <Route path="/search" component={SearchContainer} />
              <Route exact path="/" render={() => <SearchContainer/>} />
              <Route component={NotFound} />
              </Switch>
          </>
        </Router>
              </main>
      </div>
    );
}

export default App;
