import React, { Component } from 'react';
import Form from './weather_components/Form';
import Search from './weather_components/Search';
import Result from './weather_components/Result';
import $ from 'jquery';
class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = { text:" ", result:" "};
    //this.fToC.bind(this);
  }
  updateWeather(weather){
    this.setState({
      text:weather
    });
  };

  fToC(fahrenheit){
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
  return message;
};

  collectionResult(status){
    var curentState = this;
    var {fToC}=this;
    if(status==="search"){
      $.get( "http://api.openweathermap.org/data/2.5/weather?appid=851623f115e0e4a17772e0e8616692c3&q="+this.state.text, function( data ) {
        curentState.setState({
          result: curentState.state.text+" temp "+fToC(data.main.temp)
        });
});

    }

    else{
      this.setState({
        result:" ",
        text:" "
      });

    }

  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <div className="thumbnail">
            <div className="caption">
            <Search onLoad={this.updateWeather.bind(this)} currentText={this.state.text}/>
            <Form update={this.collectionResult.bind(this)}/>
            <Result current={this.state.result}/>
            </div>
          </div>
        </div>

      </div>

  );
  }
}


export default Weather;
