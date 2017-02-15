import React, { Component } from 'react';
import '../styles/App.css';
import Header from './app_components/Header';
import Footer from './app_components/Footer';
import Weather from './app_components/Weather';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Weather Application</h1>
      <Header/>
      <Weather/>
      <Footer/>
      </div>
    );
  }
}

export default App;
