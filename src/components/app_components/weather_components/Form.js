import React, { Component } from 'react';

class Form extends Component{

  render() {
  var {update}=this.props;
  return (<div>
    <button type="button" className="btn btn-primary" onClick={()=>{update("search")}}>SEARCH</button>
    <button type="button" className="btn btn-default" onClick={()=>{update("clear")}}>CLEAR</button>
      </div>);

}
}
export default Form;
