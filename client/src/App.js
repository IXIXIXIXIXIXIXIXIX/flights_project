
import './css/App.css';
import './css/base.css';
import './css/header.css';
import './css/tooltip.css';
import './css/animation.css';
import './css/results.css';
import './css/search_page.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SearchContainer from './containers/SearchContainer';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';



function App() {

  
  // Free stock photo for inital bckground from https://www.pexels.com/photo/white-plane-on-blue-sky-164646/


    return ( 
      <div className="App" style={{ backgroundImage: `url("https://images.pexels.com/photos/164646/pexels-photo-164646.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")` }}>

        <Router>
          <>
          <header className="header">
                <NavBar/>
          </header>

              
            <main className="main-body">
              <Switch>
                <Route path="/search" component={SearchContainer} />
                <Route exact path="/" render={() => <SearchContainer/>} />
                <Route component={NotFound} />
              </Switch>
                                          
            </main>
          </>
        </Router>

        {/* <div className="App">
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
    </div> */}


        
      </div>
    );
}

export default App;
