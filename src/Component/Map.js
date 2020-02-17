import React, { Component } from 'react';
import '../Resources/css/map.css';
import MapContainer from './MapContainer'


class Map extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className= "Container"> 
                <MapContainer />
            </div>

        )
    }

}

export default Map;