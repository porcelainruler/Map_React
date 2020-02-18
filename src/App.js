import React, { Component, Fragment } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker  } from 'google-maps-react';
import Header from './Component/Header';
import Footer from './Component/Footer';
import MapContainer from './Component/MapContainer';
import './App.css';

const mapStyles = {
  width: '80%',
  height: '90%',
  marginLeft: 'auto',
  marginRight: 'auto'
};

const api_key = 'AIzaSyDVwHvJvyD5eWyMn30Sk67kQpLNJXd1WMU';

export class App extends Component {
  
  state = {
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
  };

  render() {
    return (
        <React.Fragment>
          <Header />  
          <MapContainer />
        </React.Fragment>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: api_key
})(App);