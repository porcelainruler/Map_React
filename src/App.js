import React, { Component, Fragment } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker  } from 'google-maps-react';
import Header from './Component/Header';
import Footer from './Component/Footer';
import './App.css';

const mapStyles = {
  width: '80%',
  height: '90%',
  marginLeft: 'auto',
  marginRight: 'auto'
};

const api_key = 'AIzaSyDVwHvJvyD5eWyMn30Sk67kQpLNJXd1WMU';

export class MapContainer extends Component {
  
  state = {
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
        <React.Fragment>
          <Header />  
          <Map
            google={this.props.google}
            zoom={14}
            style={mapStyles}
            initialCenter={{
              lat: -1.2884,
              lng: 36.8233
            }}
          />
        </React.Fragment>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: api_key
})(MapContainer);