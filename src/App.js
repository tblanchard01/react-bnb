import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Flat from './components/flat';

class App extends Component {
  render() {
    const flat = {
      "id": 148,
      "name": "Trendy Apt in Buttes Montmartre",
      "imageUrl": "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat2.jpg",
      "price": 200,
      "priceCurrency": "EUR",
      "lat": 48.885707,
      "lng": 2.343543
    }

    const flats = [flat, flat, flat, flat]

    return (
      <div className = "app">
      <div className = "main">
      <div className = "search">
      </div>
        <div className = "flats">
        
        {flats.map((flat) => {
          return <Flat flat = {flat}> </Flat>
           

        })}
        
        {/* <Flat flat = {flat} ></Flat>
        <Flat flat = {flat} ></Flat>
        <Flat flat = {flat}></Flat> */}

        </div>
        </div>
    <div className = "map">
</div>
</div> 
    );
  }
}

export default App;
