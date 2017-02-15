import React, { Component } from 'react';
import logo from '../../images/logo.jpg';
import '../../styles/Header.css';


class Header extends Component {
  render() {
    return (<div>
      <nav  className="navbar Header-color">
  <div className="container-fluid text-center">

    <img src={logo} className="App-logo" alt="logo"/>

    </div>
</nav></div>);
  }
}

export default Header;
