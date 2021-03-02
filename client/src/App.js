
import './css/App.css';
import './css/base.css';
import './css/header.css';
import './css/tooltip.css';
import './css/animation.css';
import './css/results.css';
import './css/search_page.css';
import './css/list.css';
import './css/SkyRabble.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SearchContainer from './containers/SearchContainer';
import NotFound from './components/NotFound';



function App() {

  
  // Free stock photo for inital bckground from https://www.pexels.com/photo/white-plane-on-blue-sky-164646/


    return ( 
      <div className="App" style={{ backgroundImage: `url("https://images.pexels.com/photos/164646/pexels-photo-164646.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")` }}>

        <Router>
          <>
              <Switch>
                <Route path="/search" component={SearchContainer} />
                <Route exact path="/" render={() => <SearchContainer/>} />
                
                <Route component={NotFound} />
              </Switch>
                                          
          </>
        </Router>


        
      </div>
    );
}

export default App;
