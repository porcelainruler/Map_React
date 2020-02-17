import React, { Component } from 'react';
import '../assets/css/main.css';
import Map from './Map';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Map />
        )
    }

}

export default Main;