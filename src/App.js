import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Flat from './components/flat';
import GoogleMapReact from 'google-map-react';
class App extends Component {
  constructor(props) {
  super(props)
  this.state = {
    flats: []
    }
  }
  
componentDidMount(){
  const url = 'https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json'
  fetch(url)
  .then(response => response.json())
  .then((data) => {
    this.setState({
      flats: data 
    })
  }) 
}

  render()  {
    const center = {
    lat: 48.856,
    lng: 2.3522 
    }

    return (
      <div className = "app">
      <div className = "main">
      <div className = "search">
      </div>
        <div className = "flats">
        
        { this.state.flats.map((flat) => {
          return <Flat flat = {flat}> </Flat>
           

        })}
        
        {/* <Flat flat = {flat} ></Flat>
        <Flat flat = {flat} ></Flat>
        <Flat flat = {flat}></Flat> */}

        </div>
        </div>
    <div className = "map"> 
    <GoogleMapReact
          center={center}
          zoom={11}>
        </GoogleMapReact>
</div>
</div> 
    );
  }
}

export default App;
