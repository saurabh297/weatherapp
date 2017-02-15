import React, { Component } from 'react';

class Result extends Component {

  render() {
    var {current}=this.props;
    return (<div>
      <h1>{current}</h1>
      </div>);
  }
}

export default Result;
